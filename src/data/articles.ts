export interface Article {
  id: number
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: string
  imageKey: 'hero' | 'equipe' | 'higiene' | 'treinamento'
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Por que sua empresa precisa de um PGR atualizado?",
    category: "Legislação",
    date: "8 de Janeiro, 2025",
    readTime: "5 min",
    imageKey: "hero",
    excerpt:
      "O Programa de Gerenciamento de Riscos substituiu o PPRA com a atualização da NR-1. Saiba por que é fundamental manter esse documento sempre em dia.",
    content: `O Programa de Gerenciamento de Riscos (PGR) é o documento central da gestão de segurança do trabalho nas empresas, instituído pela atualização da NR-1 que entrou em vigor em 2022.

Diferente do antigo PPRA, o PGR adota uma abordagem mais ampla e sistemática, contemplando todos os tipos de riscos ocupacionais: físicos, químicos, biológicos, ergonômicos e de acidentes. O programa exige que as empresas identifiquem os perigos presentes no ambiente de trabalho, avaliem os riscos associados e implementem medidas de controle eficazes e mensuráveis.

**Quem é obrigado a ter o PGR?**

Todas as empresas que possuem empregados registrados em CLT são obrigadas a elaborar e manter o PGR atualizado, independentemente do porte ou setor de atuação. Microempresas e EPPs sem exposição significativa a riscos ocupacionais podem adotar um modelo simplificado.

**Penalidades por não conformidade**

Empresas que não mantêm o PGR atualizado estão sujeitas a autuações pela fiscalização do Ministério do Trabalho, com multas que podem variar de R$ 2.000 a R$ 30.000 dependendo da gravidade e reincidência. Além disso, a ausência do documento representa uma vulnerabilidade significativa em processos trabalhistas.

**Periodicidade de atualização**

O PGR deve ser revisado sempre que houver mudanças nas condições de trabalho, introdução de novos processos ou mudanças no quadro de trabalhadores — e no mínimo anualmente. A Morelli Engenharia realiza revisões periódicas garantindo que seu programa esteja sempre em conformidade com a legislação vigente.

**Como a Morelli pode ajudar**

Nossa equipe de engenheiros especializados realiza o diagnóstico completo das condições de trabalho, identifica todos os riscos presentes e propõe as medidas de controle mais adequadas para cada realidade. Entre em contato para saber mais.`,
  },
  {
    id: 2,
    title: "PCMSO: proteção à saúde do trabalhador e conformidade legal",
    category: "Saúde Ocupacional",
    date: "15 de Janeiro, 2025",
    readTime: "6 min",
    imageKey: "equipe",
    excerpt:
      "O Programa de Controle Médico de Saúde Ocupacional é obrigatório por lei e protege tanto os trabalhadores quanto a empresa de passivos trabalhistas.",
    content: `O Programa de Controle Médico de Saúde Ocupacional (PCMSO), regulamentado pela NR-7, é um dos documentos mais importantes da gestão de saúde e segurança do trabalho.

Seu objetivo principal é promover e preservar a saúde dos trabalhadores, monitorando a ocorrência de doenças ocupacionais e detectando precocemente alterações de saúde relacionadas ao trabalho.

**O que inclui o PCMSO?**

O programa contempla a realização dos exames médicos obrigatórios: admissional, periódico, de retorno ao trabalho, de mudança de função e demissional. Também inclui a análise dos resultados, identificação de agravos à saúde relacionados ao trabalho e encaminhamento dos trabalhadores para tratamento quando necessário.

**Responsabilidade do empregador**

O empregador é integralmente responsável pela elaboração e implementação do PCMSO, que deve ser coordenado por um Médico do Trabalho. A Morelli Engenharia oferece suporte completo, desde a elaboração do programa até o gerenciamento dos exames periódicos e emissão dos Atestados de Saúde Ocupacional (ASO).

**Consequências da ausência do PCMSO**

Empresas sem PCMSO ou com programa desatualizado estão sujeitas a multas significativas. Além disso, ficam expostas a ações trabalhistas por doenças ocupacionais que poderiam ter sido detectadas e tratadas precocemente com o monitoramento adequado.`,
  },
  {
    id: 3,
    title: "NR-35: trabalho em altura e as responsabilidades da empresa",
    category: "Treinamentos",
    date: "22 de Janeiro, 2025",
    readTime: "4 min",
    imageKey: "treinamento",
    excerpt:
      "Toda empresa que possui trabalhadores que realizam atividades acima de 2 metros deve atender aos requisitos da NR-35. Saiba o que é exigido.",
    content: `A Norma Regulamentadora NR-35 estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, considerando qualquer atividade executada acima de 2 metros do nível inferior onde haja risco de queda.

Quedas de altura continuam sendo uma das principais causas de acidentes graves e fatais no Brasil. A implementação adequada da NR-35 é fundamental tanto para a proteção dos trabalhadores quanto para a conformidade legal das empresas.

**Principais exigências**

A NR-35 exige que o empregador desenvolva e implemente medidas de proteção coletiva e individual, realize análise de risco para cada serviço em altura, garanta que todos os trabalhadores recebam treinamento específico e mantenha registros atualizados das capacitações realizadas.

**Treinamento obrigatório**

O treinamento de trabalho em altura é obrigatório para todos os trabalhadores que exercem atividades nessas condições. Deve ter carga horária mínima de 8 horas para o trabalhador e 16 horas para o supervisor, com renovação a cada 2 anos ou quando ocorrer algum dos eventos especificados pela norma.

**Como a Morelli pode ajudar**

Oferecemos treinamentos de NR-35 ministrados por profissionais habilitados, com conteúdo atualizado e metodologia prática. Nossos treinamentos atendem integralmente às exigências legais, garantindo a segurança dos colaboradores e a conformidade da sua empresa.`,
  },
  {
    id: 4,
    title: "Insalubridade e periculosidade: entenda as diferenças",
    category: "Laudos Técnicos",
    date: "5 de Fevereiro, 2025",
    readTime: "7 min",
    imageKey: "higiene",
    excerpt:
      "Muitas empresas confundem insalubridade com periculosidade. Entender a diferença é fundamental para garantir direitos e evitar passivos trabalhistas.",
    content: `Insalubridade e periculosidade são dois regimes de adicional salarial previstos na legislação trabalhista brasileira. Apesar de ambos compensarem o trabalhador pela exposição a condições especiais de trabalho, existem diferenças importantes entre eles.

**Insalubridade**

A insalubridade está regulamentada pela NR-15 e ocorre quando o trabalhador fica exposto, acima dos limites de tolerância estabelecidos, a agentes nocivos à saúde. Esses agentes podem ser físicos (ruído, calor, radiações), químicos (substâncias tóxicas) ou biológicos (vírus, bactérias).

O adicional de insalubridade é de 10%, 20% ou 40% sobre o salário mínimo, dependendo do grau (mínimo, médio ou máximo).

**Periculosidade**

A periculosidade, regulamentada pela NR-16, é devida ao trabalhador exposto a condições de risco acentuado de acidente, como inflamáveis, explosivos, energia elétrica, roubos e outras formas de violência física, e radiações ionizantes.

O adicional de periculosidade corresponde a 30% sobre o salário base do trabalhador.

**Como é feita a caracterização?**

Ambos os adicionais devem ser caracterizados por meio de perícia realizada por Médico do Trabalho ou Engenheiro de Segurança do Trabalho. A Morelli Engenharia emite laudos técnicos completos fundamentados em levantamentos de campo detalhados e na legislação vigente.`,
  },
  {
    id: 5,
    title: "Treinamentos obrigatórios: sua empresa está em dia em 2025?",
    category: "Treinamentos",
    date: "12 de Fevereiro, 2025",
    readTime: "5 min",
    imageKey: "treinamento",
    excerpt:
      "As Normas Regulamentadoras exigem treinamentos periódicos para diversas funções. Saiba quais são os principais e as consequências de não realizá-los.",
    content: `As Normas Regulamentadoras (NRs) estabelecem uma série de treinamentos obrigatórios que as empresas devem realizar periodicamente. O não cumprimento pode resultar em autuações, multas e responsabilidade civil em caso de acidente.

**Principais treinamentos obrigatórios**

- **CIPA (NR-5):** Formação dos membros da Comissão Interna de Prevenção de Acidentes
- **EPI (NR-6):** Uso, guarda e conservação de Equipamentos de Proteção Individual
- **Trabalho em Altura (NR-35):** Para todos que trabalham acima de 2 metros
- **Elétrica (NR-10):** Segurança em instalações e serviços em eletricidade
- **Espaço Confinado (NR-33):** Para trabalho em ambientes confinados
- **Brigada de Incêndio:** Para equipes de emergência

**Validade e periodicidade**

Cada treinamento possui sua própria periodicidade definida na respectiva NR. É fundamental manter um controle rigoroso das datas de vencimento para garantir que todos os trabalhadores estejam sempre com as capacitações vigentes.

**Documentação necessária**

Todos os treinamentos devem ser documentados com listas de presença, conteúdo programático, carga horária e qualificação do instrutor. Esses registros podem ser solicitados em fiscalizações e processos judiciais, e devem ser mantidos pelo período estabelecido em cada norma.`,
  },
  {
    id: 6,
    title: "SESMT terceirizado: a solução para empresas de médio porte",
    category: "Gestão de SST",
    date: "20 de Fevereiro, 2025",
    readTime: "6 min",
    imageKey: "equipe",
    excerpt:
      "Para muitas empresas, manter um SESMT interno é oneroso. A terceirização dos serviços especializados é uma alternativa legal, econômica e eficiente.",
    content: `O Serviço Especializado em Engenharia de Segurança e em Medicina do Trabalho (SESMT), regulamentado pela NR-4, estabelece a obrigatoriedade de manutenção de profissionais especializados nas empresas conforme o grau de risco e número de empregados.

**Quando é obrigatório o SESMT interno?**

O dimensionamento está definido no Quadro II da NR-4, que determina quais profissionais são necessários (Engenheiro de Segurança, Médico do Trabalho, Enfermeiro, Técnico de Segurança e Auxiliar de Enfermagem) de acordo com o grau de risco e o número de trabalhadores.

**A alternativa do SESMT terceirizado**

Para empresas que não atingem o dimensionamento mínimo para SESMT interno, ou para aquelas onde os custos seriam proibitivos, a NR-4 permite a constituição de SESMT conjunto ou a contratação de empresa especializada em prestação de serviços de SST.

A Morelli Engenharia oferece o SESMT terceirizado completo, com toda a equipe multidisciplinar necessária para atender às exigências legais e zelar pela saúde e segurança dos colaboradores da sua empresa.

**Benefícios da terceirização**

- Redução de custos em comparação com contratações diretas
- Acesso a equipe multidisciplinar certificada
- Documentação sempre atualizada conforme as NRs vigentes
- Relatórios gerenciais periódicos
- Suporte técnico contínuo e atendimento ágil`,
  },
  {
    id: 7,
    title: "Riscos Psicossociais no Trabalho: o que são e como gerenciar",
    category: "Saúde Ocupacional",
    date: "1 de Março, 2025",
    readTime: "8 min",
    imageKey: "equipe",
    excerpt:
      "Os riscos psicossociais estão cada vez mais presentes nos ambientes de trabalho. Entenda o que são, como afetam a saúde mental e quais as obrigações da empresa.",
    content: `Os riscos psicossociais no trabalho referem-se às condições de trabalho que afetam a saúde mental e o bem-estar psicológico dos trabalhadores. Estresse, assédio moral, sobrecarga de trabalho, falta de autonomia e conflitos interpessoais são exemplos de fatores psicossociais que podem gerar adoecimento.

Com as mudanças no mundo do trabalho — pressão por produtividade, home office, precarização — os transtornos mentais relacionados ao trabalho cresceram significativamente. A depressão, a ansiedade e a Síndrome de Burnout já são consideradas doenças ocupacionais quando comprovada a relação com o trabalho.

**O que diz a legislação?**

A NR-1, atualizada em 2022, incluiu explicitamente os riscos psicossociais como parte do gerenciamento de riscos ocupacionais. Isso significa que as empresas devem identificar, avaliar e controlar esses riscos no PGR, assim como fazem com os riscos físicos, químicos e biológicos.

A Lei 14.838/2024 tornou obrigatória a implementação de programas de combate ao assédio moral e sexual no trabalho, reforçando a responsabilidade das empresas em criar ambientes psicologicamente saudáveis.

**Principais fatores de risco psicossocial**

- Sobrecarga de trabalho e jornadas excessivas
- Pressão por metas inatingíveis
- Falta de reconhecimento e feedback
- Assédio moral ou sexual
- Isolamento social (especialmente em home office)
- Insegurança quanto à estabilidade no emprego
- Conflitos entre vida pessoal e profissional

**Consequências para a empresa**

Empresas que negligenciam os riscos psicossociais enfrentam aumento do absenteísmo, alta rotatividade, queda de produtividade, ações trabalhistas e indenizações por danos morais. O custo de não prevenir é muito maior do que o investimento em prevenção.

**Como implementar a gestão de riscos psicossociais**

A gestão eficaz inclui: aplicação de questionários validados para avaliação do clima organizacional, análise ergonômica do trabalho que considere os aspectos cognitivos e psíquicos, capacitação de lideranças para identificação precoce de sofrimento mental, canais de denúncia seguros e confidenciais, e programas de promoção da saúde mental.

**Como a Morelli pode ajudar**

A Morelli Engenharia oferece assessoria completa na identificação e gestão de riscos psicossociais, integrando essa avaliação ao PGR e ao PCMSO da sua empresa. Nossa equipe multidisciplinar inclui psicólogos organizacionais e engenheiros de segurança especializados em saúde mental no trabalho. Entre em contato para saber como podemos ajudar sua empresa a criar um ambiente mais saudável e produtivo.`,
  },
]
