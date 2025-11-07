export type TipoConsulta = {
  id: number;
  pacienteId: number;
  especialidade: string;
  medico: string;
  data: string;
  status: "Agendada" | "Realizada" | "Cancelada";
};