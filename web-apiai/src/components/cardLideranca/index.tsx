type Lider = {
  nome: string;
  cargo: string;
  versiculo: string;
  iniciais: string;
};

const lideres: Lider[] = [
  {
    iniciais: "PM",
    nome: "Pastor Exemplo",
    cargo: "Pastor Titular",
    versiculo: "«Apascenta as minhas ovelhas.» — Jo 21.17",
  },
  {
    iniciais: "JA",
    nome: "João Almeida",
    cargo: "Presbítero",
    versiculo: "«Sede fortes e corajosos.» — Js 1.9",
  },
  {
    iniciais: "MS",
    nome: "Maria Santos",
    cargo: "Diaconisa",
    versiculo: "«Servir a muitos.» — Mc 10.45",
  },
];

export default function CardLideranca() {
  return (
    <div className="mt-10">
      <p className="text-xs tracking-[0.12em] uppercase text-[#294936] font-medium mb-6">
        Nossa liderança
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {lideres.map((lider) => (
          <div
            key={lider.nome}
            className="border border-gray-200 rounded-2xl px-5 py-5"
          >
            <div className="w-12 h-12 rounded-full bg-[#294936]/10 flex items-center justify-center mb-4">
              <span className="text-sm font-semibold text-[#294936]">
                {lider.iniciais}
              </span>
            </div>
            <p className="font-serif text-base font-bold text-gray-900">
              {lider.nome}
            </p>
            <p className="text-xs text-[#294936] font-medium mb-3">
              {lider.cargo}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed italic">
              {lider.versiculo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}