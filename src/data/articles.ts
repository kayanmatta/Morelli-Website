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
    title: "Riscos Psicossociais na NR-1: Obrigatoriedade, Metodologia Karasek e Como Implementar no PGR",
    category: "Legislação",
    date: "26 de Maio, 2026",
    readTime: "12 min",
    imageKey: "equipe",
    excerpt:
      "Desde 26 de maio de 2026, a avaliação de riscos psicossociais é obrigatória no PGR conforme a nova NR-1. Entenda a metodologia Karasek (Demanda-Controle-Suporte), os 5 fatores de risco e como implementar na sua empresa.",
    content: `A avaliação de riscos psicossociais passou a ser obrigatória no Gerenciamento de Riscos Ocupacionais (GRO) da NR-1 desde 26 de maio de 2026, conforme a Portaria MTE nº 1419/2024. Agora, toda empresa com empregados CLT deve incluir os fatores de risco psicossociais no PGR (Programa de Gerenciamento de Riscos), sob pena de autuação pela fiscalização do Ministério do Trabalho.

**O que mudou na nova NR-1?**

A NR-1 atualizada trouxe duas mudanças expressivas:

- O item 1.5.3.1.4 agora exige que o gerenciamento de riscos ocupacionais abranja os riscos decorrentes dos fatores ergonômicos, incluindo explicitamente os fatores de risco psicossociais relacionados ao trabalho.
- O item 1.5.3.2.1 passou a exigir que a organização considere as condições de trabalho nos termos da NR-17, incluindo os fatores de risco psicossociais relacionados ao trabalho.

Na prática, isso significa que não basta avaliar riscos físicos, químicos, biológicos e de acidentes — a saúde mental dos trabalhadores agora deve ser avaliada com a mesma rigidez técnica.

**O que são riscos psicossociais?**

Riscos psicossociais são fatores relacionados à organização, conteúdo e condições de trabalho que podem afetar a saúde mental e o bem-estar psicológico dos colaboradores. De acordo com a ISO 45003:2021, esses riscos são classificados em cinco grandes categorias:

- **Demandas do Trabalho:** carga excessiva, ritmo acelerado, prazos curtos, alta exigência mental ou física, tarefas simultâneas.
- **Autonomia e Controle:** falta de liberdade para decidir como executar tarefas, trabalho repetitivo sem espaço para iniciativa, supervisão rígida.
- **Relações Interpessoais:** qualidade da relação entre colegas e gestores, assédio moral, conflitos no ambiente de trabalho, falta de suporte.
- **Reconhecimento e Recompensa:** falta de valorização profissional, baixos salários, ausência de feedback, promoções injustas, ausência de perspectivas de crescimento.
- **Conflito Trabalho-Vida Pessoal:** jornada excessiva, trabalho nos finais de semana, pressão para estar sempre disponível.

**Metodologia de Avaliação: O Modelo de Karasek (Demanda-Controle-Suporte)**

O Modelo Demanda-Controle, desenvolvido por Robert Karasek em 1979 e ampliado por Johnson & Hall em 1988 com o fator Suporte Social, é a metodologia mais reconhecida internacionalmente para avaliação de riscos psicossociais no trabalho.

O modelo avalia três dimensões:

- **Demanda Psicológica:** pressão mental no trabalho, incluindo prazos, volume de tarefas e necessidade de lidar com problemas complexos.
- **Controle sobre o Trabalho:** nível de autonomia para decidir como realizar tarefas, uso de habilidades e capacidade de influenciar o próprio ritmo.
- **Apoio Social (Suporte):** nível de apoio oferecido por colegas e gestores para reduzir o impacto do estresse.

**Os 4 Quadrantes do Modelo de Karasek**

A partir da relação entre demanda e controle, o modelo define quatro tipos de trabalho:

- **Trabalho de Alto Estresse (alta demanda + baixo controle):** maior incidência de estresse, burnout e transtornos psicológicos. Exemplos: profissionais da saúde, call center, motoristas.
- **Trabalho Ativo (alta demanda + alto controle):** pode ser estressante, mas geralmente positivo se houver suporte adequado. Exemplos: engenheiros, gestores, empreendedores.
- **Trabalho Passivo (baixa demanda + baixo controle):** pode gerar desmotivação e tédio, reduzindo o desenvolvimento profissional.
- **Trabalho de Baixa Pressão (baixa demanda + alto controle):** ambiente tranquilo, mas com pouco estímulo ao crescimento.

O Suporte Social não altera a posição nos quadrantes, mas influencia diretamente os impactos do estresse. Trabalhadores com alto suporte social lidam melhor com demandas elevadas.

**Como implementar a avaliação psicossocial no PGR**

A implementação segue as etapas do GRO:

- **Identificação dos perigos:** aplicação de questionários validados (modelo Karasek) com todos os colaboradores.
- **Avaliação dos riscos:** classificação dos resultados nos quadrantes demanda-controle-suporte.
- **Medidas de prevenção:** para trabalho de alto estresse, reduzir carga de trabalho, flexibilizar prazos, aumentar autonomia, criar pausas obrigatórias e reforçar suporte social. Para trabalho ativo, manter desafios equilibrados. Para trabalho passivo, incentivar participação e reconhecimento.
- **Monitoramento:** reavaliação periódica e acompanhamento dos indicadores de saúde mental.

**Penalidades por não conformidade**

Empresas que não incluem a avaliação de riscos psicossociais no PGR estão sujeitas a autuações pela fiscalização do Ministério do Trabalho, com multas que variam conforme a gravidade e reincidência. Além disso, ficam expostas a ações trabalhistas por doenças ocupacionais relacionadas à saúde mental.

**Equipe técnica da Morelli Engenharia**

A Morelli Engenharia conta com equipe especializada para implementação completa da avaliação de riscos psicossociais no PGR:

- **Jeane Morelli Toledo:** Engenheira de Meio Ambiente e Engenheira de Segurança do Trabalho, especialista em análise ambiental com ampla experiência na gestão de riscos ocupacionais. Responsável pela validação e estruturação da ferramenta de levantamento e análise dos riscos psicossociais.
- **Edgar da Silva Toledo:** Engenheiro Eletricista e Engenheiro de Segurança do Trabalho, com ampla experiência na gestão de riscos ocupacionais. Responsável pela coordenação do estudo e implementação da metodologia para análise de riscos psicossociais no PGR.

**Como a Morelli pode ajudar**

A Morelli Engenharia oferece o serviço completo de Mapeamento e Avaliação de Riscos Psicossociais em conformidade com a NR-1 e o PGR, utilizando a metodologia Karasek (Demanda-Controle-Suporte). Nosso serviço inclui aplicação de questionários, análise dos resultados, classificação de riscos, plano de ações e medidas de prevenção integradas ao seu PGR. Entre em contato e solicite um orçamento.`,
  },
]
