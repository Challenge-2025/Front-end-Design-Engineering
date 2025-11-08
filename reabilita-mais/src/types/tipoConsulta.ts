export type TipoConsulta = {
  id: number;
  idPaciente: number;
  especialidade: string;
  medico: string;
  dataConsulta: string;
  status: "Agendada" | "Realizada" | "Cancelada";
};