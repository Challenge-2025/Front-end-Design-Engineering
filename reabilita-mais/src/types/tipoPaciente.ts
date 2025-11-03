import type { TipoEndereco } from "./tipoEndereco";

export type TipoPaciente = {
    idPaciente:number;
    nomeCompleto:string;
    cpf:string;
    email:string;
    dataDeNascimento:string;
    telefone:string;
    pdc:string;
    endereco:TipoEndereco
}