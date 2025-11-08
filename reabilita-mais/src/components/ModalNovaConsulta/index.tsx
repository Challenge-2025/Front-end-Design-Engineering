import { useState } from "react";

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
    status: "",
    idPaciente: 0,
    especialidade: "",
    nmMedico: "",
  });

  if (!isOpen) return null; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCriarConsulta(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Nova Consulta</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            name="dataConsulta"
            value={formData.dataConsulta}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          >
            <option value="">Selecione o status</option>
            <option value="Agendada">Agendada</option>
            <option value="Realizada">Realizada</option>
            <option value="Cancelada">Cancelada</option>
          </select>

          <input
            type="number"
            name="idPaciente"
            placeholder="ID do Paciente"
            value={formData.idPaciente}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />

          <input
            type="text"
            name="especialidade"
            placeholder="Especialidade"
            value={formData.especialidade}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />

          <input
            type="text"
            name="nmMedico"
            placeholder="Nome do Médico"
            value={formData.nmMedico}
            onChange={handleChange}
            className="border rounded-lg p-2"
            required
          />

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
