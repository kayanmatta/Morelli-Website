/**
 * Morelli — Gateway do formulário de contato
 * Valida o token do Cloudflare Turnstile e só então repassa ao Web3Forms.
 * Segredos (definidos no painel da Cloudflare, nunca no código):
 *   TURNSTILE_SECRET     -> Secret Key do widget "morelli-form"
 *   WEB3FORMS_ACCESS_KEY -> access key do Web3Forms
 */
function json(obj, status, headers = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  })
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || 'https://morelliengenharia.com.br'
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
    }

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors })
    if (request.method !== 'POST') return json({ success: false, message: 'Method not allowed' }, 405, cors)

    let data
    try {
      data = await request.json()
    } catch {
      return json({ success: false, message: 'Invalid JSON' }, 400, cors)
    }

    // Honeypot: se preenchido, é bot
    if (data.botcheck) return json({ success: false, message: 'Bot detected' }, 403, cors)

    if (!data.nome || !data.email || !data.mensagem || !data.token) {
      return json({ success: false, message: 'Missing fields' }, 400, cors)
    }

    // 1) Valida o Turnstile na Cloudflare
    const verdict = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET,
        response: data.token,
        remoteip: request.headers.get('cf-connecting-ip'),
      }),
    }).then((r) => r.json())

    if (!verdict.success) {
      return json({ success: false, message: 'Captcha verification failed' }, 403, cors)
    }

    // 2) Repassa ao Web3Forms (access key fica só aqui, nunca no navegador)
    const payload = {
      access_key: env.WEB3FORMS_ACCESS_KEY,
      subject: `📋 Orçamento - ${data.nome}`,
      from_name: 'Morelli Engenharia',
      Nome: data.nome,
      Empresa: data.empresa || 'Não informada',
      Email: data.email,
      Telefone: data.telefone || 'Não informado',
      Mensagem: data.mensagem,
    }

    const result = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    }).then((r) => r.json())

    return json(result, result.success ? 200 : 422, cors)
  },
}
