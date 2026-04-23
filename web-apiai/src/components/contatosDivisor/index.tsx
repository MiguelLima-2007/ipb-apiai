export default function DivisorHomePage() {
  return (
    <div className="bg-green-900 h-auto">
      <h1 className="text-white text-2xl font-bold text-center p-20">
        CONTATO
      </h1>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/images/fundoContato.png')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ENDEREÇO</h1>
            <p className="mb-5">
              A Igreja Presbiteriana de Apiaí (IPB Apiaí) está localizada na Rua 19 de Novembro, 52, Centro, Apiaí - SP. O CEP da região é 18320-063. A igreja atua no centro da cidade.
            </p>
            <a href="https://www.google.com/maps?sca_esv=ac2b5ebe1147ae9b&output=search&q=localiza%C3%A7%C3%A3o+da+ipb+apiai&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRiigBgL2I_pgQa-94zvB054Dys3s2x_Qm_GJcU2DlSXiOiQhMRy_qxDedbT-RrKxCQoW44ut0piPdzeodKx-6yWcaZG30GVggR_-cBzkorXVmw7L816LKazvQOpeG_II2bC6w_OZhDPQ8EETDZF6qiOamyJSVg1u09nfrLj2LIFc-fvyQ4RuCLPG6lCkPr7pX5rj5yw&entry=mc&ved=1t:200715&ictx=111"><button className="btn btn-dark">Ir para o Google Maps</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
