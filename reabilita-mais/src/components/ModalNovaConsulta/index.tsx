import { useEffect, useState } from "react";
import { useAuth } from "../../routes/Layouts/Hook/useAuth";

type ModalNovaConsultaProps = {
  isOpen: boolean;
  onClose: () => void;
  onCriarConsulta: (novaConsulta: any) => void;
};

const API_URL = import.meta.env.VITE_API_REABILITA;

export default function ModalNovaConsulta({
  isOpen,
  onClose,
  onCriarConsulta,
}: ModalNovaConsultaProps) {
  const [formData, setFormData] = useState({
    dataConsulta: "",
    idPaciente: 0,
    especialidade: "",
    nmMedico: "",
  });

  const { paciente } = useAuth();

  useEffect(() => {
    if (paciente?.id) {
      setFormData((prev) => ({ ...prev, idPaciente: paciente.id }));
    }
  }, [paciente]);

  if (!isOpen) return null;

  console.log("dados do hook: ", paciente)

  console.log("Enviando consulta:", {
  dataConsulta: formData.dataConsulta,
  idPaciente: formData.idPaciente,
  especialidade: formData.especialidade,
  nmMedico: formData.nmMedico
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const body = {
        dataConsulta: formData.dataConsulta,
        idPaciente: formData.idPaciente,
        especialidade: formData.especialidade,
        nmMedico: formData.nmMedico,
      };

      const response = await fetch(`${API_URL}/consultas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar consulta");
      }

      const data = await response.json();
      onCriarConsulta(data);
      alert("Consulta criada com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao criar consulta. Tente novamente.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20  w-[90%] max-w-md">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          Nova Consulta
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            name="dataConsulta"
            value={formData.dataConsulta}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 text-[#3d013a]"
            required
          />

          <input
            type="text"
            name="especialidade"
            placeholder="Especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 text-[#3d013a]"
            required
          />

          <select
            name="nmMedico"
            value={formData.nmMedico}
            onChange={handleChange}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 text-[#3d013a]"
            required
          >
            <option value="">Selecione o médico</option>
            <option value="Dra. Adriana">Dra. Adriana</option>
            <option value="Dr. João Carlos">Dr. João Carlos</option>
            <option value="Dr. Macedo">Dr. Macedo</option>
            <option value="Dra. Carla Texeira">Dra. Carla Texeira</option>
            <option value="Dra. Maria Vitorino">Dra. Maria Vitorino</option>
            <option value="Dr. Carlos Darmont">Dr. Carlos Darmont</option>
          </select>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
