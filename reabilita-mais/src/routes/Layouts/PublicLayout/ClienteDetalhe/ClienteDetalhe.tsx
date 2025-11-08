// src/routes/ClienteDetalhe/index.tsx

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { TipoCliente } from "../../../../types/tipoClientes";

export default function ClienteDetalhe() {
  const { id } = useParams<{ id: string }>(); 
  const [cliente, setCliente] = useState<TipoCliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCliente = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5000/cliente/${id}`);
        
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: Não foi possível encontrar o cliente.`);
        }

        const data: TipoCliente = await response.json();

        if (Object.keys(data).length === 0) {
            throw new Error(`Nenhum cliente encontrado com o ID ${id}.`);
        }

        setCliente(data);

      } catch (err: unknown) { 
        if (err instanceof Error) {
          console.error("Falha na busca:", err);
          setError(err.message);
        } else {
          console.error("Ocorreu um erro desconhecido:", err);
          setError("Ocorreu um erro inesperado.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCliente();
    }
  }, [id]);
  

  if (loading) {
    return <div className="text-white text-2xl">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold text-red-400">Ocorreu um Erro</h1>
        <p className="mt-2">{error}</p>
        <Link to="/" className="mt-4 inline-block text-purple-300 underline hover:text-purple-100">
          Voltar para a Home
        </Link>
      </div>
    );
  }

  return cliente ? (
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 text-white">
      <img
        src={cliente.foto_perfil}
        alt={`Foto de perfil de ${cliente.nome}`}
        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-400"
      />
      <h1 className="text-4xl font-bold text-center mb-4">{cliente.nome}</h1>
      <p className="text-center text-lg text-white/80 mb-6">
        "{cliente.descricao}"
      </p>
      <div className="text-center text-2xl font-bold text-yellow-400 mb-8">
        Avaliação: {cliente.avaliacao.toFixed(1)} ★
      </div>
      <div className="text-center">
        <Link to="/" className="text-white underline hover:text-purple-500">
          Voltar para a Home
        </Link>
      </div>
    </div>
  ) : null;
}