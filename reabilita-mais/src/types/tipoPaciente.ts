import type { TipoEndereco } from "./tipoEndereco";

export type TipoPaciente = {
    id:number;
    nomeCompleto:string;
    cpf:string;
    email:string;
    dataDeNascimento:string;
    telefone:string;
    pdc:string;
    endereco:TipoEndereco
}