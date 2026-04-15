import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header className="bg-green-900 text-white py-4 px-8">
      <div className="relative flex items-center justify-center">

        {/* LOGO À ESQUERDA, CENTRALIZADA VERTICALMENTE */}
        <a href="#" className="absolute left-2 pt-18">
          <Image
            src="/images/logoMin.png"
            alt="Logo da Igreja"
            width={250}
            height={250}
          />
        </a>

        {/* NAV CENTRALIZADA NO HEADER */}
        <nav className="flex items-center gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">DÍZIMOS E OFERTAS</a>
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">ENSINO</a>
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">CENTRO DE CUIDADO PASTORAL</a>
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">AGENDA</a>
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">IPP+</a>
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">LGPD</a>
          <a href="#" className="hover:text-green-300 transition-colors class='transition duration-300 ease-in-out'">More</a>
        </nav>

      </div>
    </header>
  );
}