export interface Horario {
  from: string
  to: string
  weekDay: string
}

export default interface Store {
  _id: string
  name: string
  bloco: string
  referencia: string
  imagem: string
  horario: string
  horarios: Horario[]
  status: string
  lat?: number
  lng?: number
}
