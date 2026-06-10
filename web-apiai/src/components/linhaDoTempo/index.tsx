type EventoHistorico = {
  ano: string;
  titulo: string;
  descricao: string;
  tag: string;
  atual?: boolean;
};

const eventos: EventoHistorico[] = [
  {
    ano: "1916",
    titulo: "Primeira congregação presbiteriana",
    descricao:
      "O missionário Rev. Roberto Dale Daffim organizou a primeira congregação presbiteriana na cidade, com cerca de 10 membros, parte deles vindos da igreja de Faxina (atual Itapeva).",
    tag: "Origem",
  },
  {
    ano: "1933",
    titulo: "Primeira reforma do espaço",
    descricao:
      "Reforma do primeiro espaço físico da congregação, marcando o crescimento e consolidação da comunidade.",
    tag: "Expansão",
  },
  {
    ano: "1934",
    titulo: "Oficialização da Igreja",
    descricao:
      "A congregação foi oficialmente organizada como Igreja Presbiteriana de Apiaí, com conselho formado por presbíteros e diáconos e cerca de 40 membros.",
    tag: "Marco histórico",
  },
  {
    ano: "1949",
    titulo: "Construção do templo atual",
    descricao:
      "Entre 1949 e 1950, o templo sede atual foi construído, seguido de ampliações em 1978 e 1982 para acomodar o crescimento da comunidade.",
    tag: "Construção",
  },
  {
    ano: "Hoje",
    titulo: "Estrutura atual",
    descricao:
      "A igreja conta com templo sede, casa pastoral e pavilhão de educação religiosa, servindo fielmente a comunidade de Apiaí e região.",
    tag: "Atualidade",
    atual: true,
  },
];

export default function LinhaDoTempoComponent() {
  return (
    <div>
      <p className="text-xl pt-14 tracking-[0.12em] uppercase text-[#294936] font-medium mb-6">
        Nossa história
      </p>

      <div className="relative">
        <div className="absolute left-[111px] top-2 bottom-2 w-px bg-[#294936] opacity-20" />

        <ul className="space-y-10">
          {eventos.map((evento) => (
            <li key={evento.ano} className="flex items-start">
              {/* Ano */}
              <div className="w-20 text-right font-serif text-xl font-bold text-[#294936] mt-0.5 shrink-0">
                {evento.ano}
              </div>

              {/* Dot */}
              <div className="w-16 flex justify-center shrink-0">
                <div
                  className={`w-3 h-3 rounded-full bg-[#294936] mt-1.5 shrink-0 ${
                    evento.atual ? "ring-4 ring-[#294936]/20" : ""
                  }`}
                />
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <p className="font-serif text-[17px] font-bold text-gray-900 mb-1">
                  {evento.titulo}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-2">
                  {evento.descricao}
                </p>
                <span className="inline-block text-xs bg-[#294936]/10 text-[#294936] rounded px-2 py-0.5">
                  {evento.tag}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}