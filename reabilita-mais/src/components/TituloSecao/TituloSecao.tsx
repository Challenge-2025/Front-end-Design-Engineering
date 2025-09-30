
type TituloProps = {
  titulo: string;
};


export default function TituloSecao({ titulo }: TituloProps) {
  return (
    <legend className="text-xl font-semibold text-white/90 mb-4 col-span-full">
      {titulo}
    </legend>
  );
}