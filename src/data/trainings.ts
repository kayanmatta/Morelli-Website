export interface Training {
  nr: string
  title: string
  hours: number
  image?: string
}

export interface TrainingCategory {
  name: string
  courses: Training[]
}

export const trainingCategories: TrainingCategory[] = [
  {
    name: 'NR 1 – Disposições Gerais',
    courses: [
      { nr: 'NR 1', title: 'Treinamento de NR 1', hours: 4, image: 'treinamento-nr1.png' },
    ],
  },
  {
    name: 'NR 5 – CIPA',
    courses: [
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 1', hours: 8, image: 'NR5-NIVEL-1.png' },
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 2', hours: 12, image: 'Treinamento NR 5 - CIPA 2.png' },
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 3', hours: 16, image: 'Treinamento NR 5 - CIPA 3.png' },
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 4', hours: 20, image: 'NR5-NIVEL-4.png' },
      { nr: 'NR 5', title: 'CIPATR', hours: 20, image: 'Treinamento NR 31 - CIPATR.jpg' },
    ],
  },
  {
    name: 'NR 6 – EPI e EPC',
    courses: [
      { nr: 'NR 6', title: 'EPI e EPC', hours: 2, image: 'Treinamento de NR 6.png' },
    ],
  },
  {
    name: 'NR 10 – Segurança Elétrica',
    courses: [
      { nr: 'NR 10', title: 'Segurança Elétrica (Básico)', hours: 40, image: 'Treinamento de NR 10.png' },
      { nr: 'NR 10', title: 'Segurança Elétrica (Reciclagem)', hours: 20, image: 'Treinamento de NR 10 2.png' },
      { nr: 'NR 10', title: 'SEP – Segurança Elétrica (Iniciação)', hours: 40, image: 'thumb-nr10-sep-sistema-eletrico-potencia.png' },
      { nr: 'NR 10', title: 'SEP – Segurança Elétrica (Reciclagem)', hours: 20, image: 'thumb-nr10-sep-sistema-eletrico-potencia (1).png' },
    ],
  },
  {
    name: 'NR 13 – Caldeiras e Unidades de Processo',
    courses: [
      { nr: 'NR 13', title: 'Segurança na Operação de Caldeiras (Online Complementar)', hours: 8, image: 'Treinamento de NR 13.png' },
      { nr: 'NR 13', title: 'Unidades de Processo (Online Complementar)', hours: 8, image: 'Treinamento de NR 13 2.png' },
    ],
  },
  {
    name: 'NR 15 – Proteção Respiratória',
    courses: [
      { nr: 'NR 15', title: 'PPR – Programa de Proteção Respiratória', hours: 4, image: 'Treinamento de NR 15.png' },
    ],
  },
  {
    name: 'NR 17 – Ergonomia',
    courses: [
      { nr: 'NR 17', title: 'Ergonomia', hours: 2, image: 'Treinamento de NR 17.png' },
      { nr: 'NR 17', title: 'Ergonomia para Operadores de Checkout', hours: 2, image: 'Treinamento de NR 17 2.png' },
      { nr: 'NR 17', title: 'Levantamento e Transporte Manual de Cargas', hours: 12, image: '33Treinamento-de-NR-17-Levantamento-e-Transporte-Manual-de-Cargas.png' },
      { nr: 'NR 17', title: 'Trabalho em Teleatendimento', hours: 4, image: '35Treinamento-de-NR-17-Trabalho-em-Teleatendimento.png' },
    ],
  },
  {
    name: 'NR 20 – Inflamáveis e Combustíveis',
    courses: [
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Classe I)', hours: 6 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Classe II)', hours: 10, image: '42Treinamento-de-NR20-Basico-Classe-II.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Classe III)', hours: 12, image: '43Treinamento-de-NR20-Basico-Classe-III.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Reciclagem)', hours: 4, image: 'thumb-nr20-reciclagem-basico-1.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Classe I)', hours: 12, image: '47Treinamento-de-NR20-Intermediario-Classe-I.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Classe II)', hours: 14, image: 'thumb-nr20-CLASSE-II-1.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Classe III)', hours: 16, image: 'thumb-nr20-CLASSE-III.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Reciclagem)', hours: 8, image: 'thumb-nr20-intermediario-reciclagem.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado I', hours: 20, image: 'thumb-nr20-avancado-1.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado I (Reciclagem)', hours: 4, image: 'thumb-nr20-avancado-1-reciclagem.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado II', hours: 32, image: 'thumb-nr20-avancado-2.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado II (Reciclagem)', hours: 4, image: 'thumb-nr20-avancado-2-reciclagem.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Iniciação', hours: 3, image: 'thumb-nr20-iniciacao.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Iniciação (Reciclagem)', hours: 3, image: 'thumb-nr20-iniciacao-1.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Classe II', hours: 14, image: 'thumb-nr20-CLASSE-II-1.png' },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Classe III', hours: 14, image: 'thumb-nr20-CLASSE-III.png' },
    ],
  },
  {
    name: 'NR 23 – Prevenção e Combate a Incêndios',
    courses: [
      { nr: 'NR 23', title: 'PPCI – Prevenção e Proteção Contra Incêndios', hours: 6, image: 'thumb-nr23-ppci.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Básico)', hours: 14, image: '15Treinamento-de-Formacao-da-Brigada-de-Incendio-Basico---Conforme-INSTRUCAO-TECNICA-No.-17-2014-1.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Básico – Reciclagem)', hours: 14, image: '14Treinamento-de-Formacao-da-Brigada-de-Incendio-Basico-Reciclagem---Conforme-INSTRUCAO-TECNIC.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17)', hours: 6, image: '15Treinamento-de-Formacao-da-Brigada-de-Incendio-Basico---Conforme-INSTRUCAO-TECNICA-No.-17-2014-1.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Básico – Reciclagem)', hours: 8, image: '10Treinamento-de-Formacao-Brigada-de-Incendios-Basico-Reciclagem.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Intermediário)', hours: 20, image: '17Treinamento-de-Formacao-da-Brigada-de-Incendio-Intermediario---Conforme-INSTRUCAO-TECNICA-No.-1.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Intermediário – Reciclagem)', hours: 20, image: '16Treinamento-de-Formacao-da-Brigada-de-Incendio-Intermediario-Reciclagem---Conforme-INSTRUCAO.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Intermediário)', hours: 24, image: '13Formacao-Brigada-de-Incendios-IT-17-Intermediario-1.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Intermediário – Reciclagem)', hours: 20, image: '13Formacao-Brigada-de-Incendios-IT-17-Intermediario-1-1.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Avançado)', hours: 38, image: '09Treinamento-de-Formacao-Brigada-de-Incendios-Avancado.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Avançado – Reciclagem)', hours: 34, image: '08Treinamento-de-Formacao-Brigada-de-Incendios-Avancado-Reciclagem.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Avançado)', hours: 24, image: 'Formacao-de-Brigada-de-Incendio-Avancado.png' },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Avançado – Reciclagem)', hours: 10, image: 'Formacao-de-Brigada-de-Incendio-Avancado-Reciclagem.png' },
    ],
  },
  {
    name: 'NR 33 – Espaço Confinado',
    courses: [
      { nr: 'NR 33', title: 'Trabalhador e Vigia', hours: 34, image: '53Treinamento-de-NR33-Trabalhador-e-Vigia.png' },
      { nr: 'NR 33', title: 'Trabalhador e Vigia (Reciclagem)', hours: 24, image: 'thumb-nr33-trabalhador-vigia-reciclagem.png' },
      { nr: 'NR 33', title: 'Supervisor de Entrada', hours: 10, image: 'thumb-nr33-supervisor.png' },
      { nr: 'NR 33', title: 'Supervisor de Entrada (Reciclagem)', hours: 12, image: 'thumb-nr33-supervisor-reciclagem.png' },
    ],
  },
  {
    name: 'NR 35 – Trabalho em Altura',
    courses: [
      { nr: 'NR 35', title: 'Trabalho em Altura', hours: 12, image: 'thumb-nr35-1.png' },
      { nr: 'NR 35', title: 'Trabalho em Altura (Reciclagem)', hours: 12, image: '55Treinamento-de-NR35-Trabalho-em-Altura-Reciclagem.png' },
      { nr: 'NR 35', title: 'Trabalho em Altura – Supervisor', hours: 24, image: '54Treinamento-de-NR35-Trabalho-em-Altura-Supervisor.png' },
    ],
  },
  {
    name: 'Outros Treinamentos',
    courses: [
      { nr: 'Extra', title: 'Direção Defensiva para Frotistas', hours: 4, image: '07Treinamento-de-Direcao-Preventiva-para-Froteiros.png' },
      { nr: 'Extra', title: 'Direção Defensiva para Motoristas de Caminhão', hours: 4, image: '06Treinamento-de-Direcao-Defensiva-para-Motoristas-de-Caminhao.png' },
      { nr: 'Extra', title: 'Treinamentos Personalizados', hours: 1, image: 'thumb-treinamento-integracao.png' },
      { nr: 'Extra', title: 'Noções Básicas de Anatomia', hours: 1, image: '18Treinamento-de-Nocoes-Basicas-de-Anatomia.png' },
      { nr: 'Extra', title: 'RCP – Ressuscitação Cardiopulmonar', hours: 3, image: 'thumb-RCP.png' },
      { nr: 'Extra', title: 'APH – Primeiros Socorros (Básico)', hours: 9, image: 'thumb-treinamento-aph-basico.png' },
      { nr: 'Extra', title: 'APH – Primeiros Socorros (Intermediário)', hours: 18, image: '04Atendimento-Pre-Hospitalar-Primeiros-Socorros-Intermediario.png' },
      { nr: 'Extra', title: 'Avaliação Geral de Cena', hours: 1, image: '05Avaliacao-Geral-da-Cena.png' },
      { nr: 'Extra', title: 'APR – Análise de Risco', hours: 12, image: 'thumb-apr-analise-risco.png' },
      { nr: 'Extra', title: 'Prevenção e Combate à COVID-19', hours: 2, image: 'COVID.png' },
      { nr: 'Extra', title: 'Treinamento 5S', hours: 2, image: 'thumb-treinamento-5s.png' },
      { nr: 'Extra', title: 'LGPD – Lei Geral de Proteção de Dados', hours: 2, image: 'thumb-lgpd.jpg' },
      { nr: 'Extra', title: 'Valas e Escavações', hours: 12, image: 'VALAS-ESCAVACOES.png' },
    ],
  },
]

export const totalCourses = trainingCategories.reduce((sum, cat) => sum + cat.courses.length, 0)
