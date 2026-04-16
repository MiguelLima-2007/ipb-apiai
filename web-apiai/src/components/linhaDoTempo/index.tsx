export default function LinhaDoTempoComponent() {
  return (
    <ul className="timeline timeline-snap-icon timeline-vertical">

      {/* 1916 */}
      <li>
        <div className="timeline-middle">
          ✔
        </div>

        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">1916</time>
          <div className="text-lg font-black">
            Primeira congregação presbiteriana
          </div>
          O missionário Rev. Roberto Dale Daffim organizou a primeira
          congregação presbiteriana na cidade,
          <p> com cerca de 10 membros.
          Parte deles veio da igreja de Faxina (atual Itapeva).</p>
        </div>
        <hr />
      </li>

      {/* 1934 */}
      <li>
        <hr />
        <div className="timeline-middle">✔</div>

        <div className="timeline-end mb-10">
          <time className="font-mono italic">1934</time>
          <div className="text-lg font-black">
            Oficialização da Igreja Presbiteriana de Apiaí
          </div>
          A congregação foi oficialmente organizada como Igreja Presbiteriana,
          <p>com conselho formado por presbíteros e diáconos e cerca de 40 membros.</p>
        </div>
        <hr />
      </li>

      {/* Expansão */}
      <li>
        <hr />
        <div className="timeline-middle">✔</div>

        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">1933–1982</time>
          <div className="text-lg font-black">Expansão</div>
          <p>1933 → reforma do primeiro espaço</p>
          <p>1949–1950 → construção do templo atual</p>
          <p>1978 e 1982 → ampliações</p>
        </div>
        <hr />
      </li>

      {/* Hoje */}
      <li>
        <hr />
        <div className="timeline-middle">✔</div>

        <div className="timeline-end mb-10">
          <time className="font-mono italic">Atualidade</time>
          <div className="text-lg font-black">Estrutura atual</div>
          A igreja conta com templo sede, casa pastoral e pavilhão
          de educação religiosa,
          <p>servindo a comunidade local.</p>
        </div>
      </li>

    </ul>
  );
}