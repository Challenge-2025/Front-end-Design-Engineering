export type TipoConsulta = {
  idConsulta: number;
  idPaciente: number;
  especialidade: string;
  nmMedico: string;
  dataConsulta: string;
  status: "AGENDADA" | "REALIZADA" | "CANCELADA";
};