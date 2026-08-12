export interface Training {
  nr: string
  title: string
  subtitle?: string
  hours: number
}

export interface TrainingCategory {
  name: string
  courses: Training[]
}

export const trainingCategories: TrainingCategory[] = [
  {
    name: 'NR 1 – Disposições Gerais',
    courses: [
      { nr: 'NR 1', title: 'Treinamento de NR 1', hours: 4 },
    ],
  },
  {
    name: 'NR 5 – CIPA',
    courses: [
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 1', hours: 8 },
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 2', hours: 12 },
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 3', hours: 16 },
      { nr: 'NR 5', title: 'CIPA – Grau de Risco 4', hours: 20 },
      { nr: 'NR 5', title: 'CIPATR', hours: 20 },
    ],
  },
  {
    name: 'NR 6 – EPI e EPC',
    courses: [
      { nr: 'NR 6', title: 'EPI e EPC', hours: 2 },
    ],
  },
  {
    name: 'NR 10 – Segurança Elétrica',
    courses: [
      { nr: 'NR 10', title: 'Segurança Elétrica (Básico)', hours: 40 },
      { nr: 'NR 10', title: 'Segurança Elétrica (Reciclagem)', hours: 20 },
      { nr: 'NR 10', title: 'SEP – Segurança Elétrica (Iniciação)', hours: 40 },
      { nr: 'NR 10', title: 'SEP – Segurança Elétrica (Reciclagem)', hours: 20 },
    ],
  },
  {
    name: 'NR 13 – Caldeiras e Unidades de Processo',
    courses: [
      { nr: 'NR 13', title: 'Segurança na Operação de Caldeiras (Online Complementar)', hours: 8 },
      { nr: 'NR 13', title: 'Unidades de Processo (Online Complementar)', hours: 8 },
    ],
  },
  {
    name: 'NR 15 – Proteção Respiratória',
    courses: [
      { nr: 'NR 15', title: 'PPR – Programa de Proteção Respiratória', hours: 4 },
    ],
  },
  {
    name: 'NR 17 – Ergonomia',
    courses: [
      { nr: 'NR 17', title: 'Ergonomia', hours: 2 },
      { nr: 'NR 17', title: 'Ergonomia para Operadores de Checkout', hours: 2 },
      { nr: 'NR 17', title: 'Levantamento e Transporte Manual de Cargas', hours: 12 },
      { nr: 'NR 17', title: 'Trabalho em Teleatendimento', hours: 4 },
    ],
  },
  {
    name: 'NR 20 – Inflamáveis e Combustíveis',
    courses: [
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Classe I)', hours: 6 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Classe II)', hours: 10 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Classe III)', hours: 12 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Básico (Reciclagem)', hours: 4 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Classe I)', hours: 12 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Classe II)', hours: 14 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Classe III)', hours: 16 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Intermediário (Reciclagem)', hours: 8 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado I', hours: 20 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado I (Reciclagem)', hours: 4 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado II', hours: 32 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Avançado II (Reciclagem)', hours: 4 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Iniciação', hours: 3 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Iniciação (Reciclagem)', hours: 3 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Classe II', hours: 14 },
      { nr: 'NR 20', title: 'Inflamáveis e Combustíveis – Classe III', hours: 14 },
    ],
  },
  {
    name: 'NR 23 – Prevenção e Combate a Incêndios',
    courses: [
      { nr: 'NR 23', title: 'PPCI – Prevenção e Proteção Contra Incêndios', hours: 6 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Básico)', hours: 14 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Básico – Reciclagem)', hours: 14 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17)', hours: 6 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Básico – Reciclagem)', hours: 8 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Intermediário)', hours: 20 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Intermediário – Reciclagem)', hours: 20 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Intermediário)', hours: 24 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Intermediário – Reciclagem)', hours: 20 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Avançado)', hours: 38 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (Avançado – Reciclagem)', hours: 34 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Avançado)', hours: 24 },
      { nr: 'NR 23', title: 'Brigada de Incêndio (IT-17 Avançado – Reciclagem)', hours: 10 },
    ],
  },
  {
    name: 'NR 33 – Espaço Confinado',
    courses: [
      { nr: 'NR 33', title: 'Trabalhador e Vigia', hours: 34 },
      { nr: 'NR 33', title: 'Trabalhador e Vigia (Reciclagem)', hours: 24 },
      { nr: 'NR 33', title: 'Supervisor de Entrada', hours: 10 },
      { nr: 'NR 33', title: 'Supervisor de Entrada (Reciclagem)', hours: 12 },
    ],
  },
  {
    name: 'NR 35 – Trabalho em Altura',
    courses: [
      { nr: 'NR 35', title: 'Trabalho em Altura', hours: 12 },
      { nr: 'NR 35', title: 'Trabalho em Altura (Reciclagem)', hours: 12 },
      { nr: 'NR 35', title: 'Trabalho em Altura – Supervisor', hours: 24 },
    ],
  },
  {
    name: 'Outros Treinamentos',
    courses: [
      { nr: 'Extra', title: 'Direção Defensiva para Frotistas', hours: 4 },
      { nr: 'Extra', title: 'Direção Defensiva para Motoristas de Caminhão', hours: 4 },
      { nr: 'Extra', title: 'Treinamentos Personalizados', hours: 1 },
      { nr: 'Extra', title: 'Noções Básicas de Anatomia', hours: 1 },
      { nr: 'Extra', title: 'RCP – Ressuscitação Cardiopulmonar', hours: 3 },
      { nr: 'Extra', title: 'APH – Primeiros Socorros (Básico)', hours: 9 },
      { nr: 'Extra', title: 'APH – Primeiros Socorros (Intermediário)', hours: 18 },
      { nr: 'Extra', title: 'Avaliação Geral de Cena', hours: 1 },
      { nr: 'Extra', title: 'APR – Análise de Risco', hours: 12 },
      { nr: 'Extra', title: 'Prevenção e Combate à COVID-19', hours: 2 },
      { nr: 'Extra', title: 'Treinamento 5S', hours: 2 },
      { nr: 'Extra', title: 'LGPD – Lei Geral de Proteção de Dados', hours: 2 },
      { nr: 'Extra', title: 'Valas e Escavações', hours: 12 },
    ],
  },
]

export const totalCourses = trainingCategories.reduce((sum, cat) => sum + cat.courses.length, 0)
