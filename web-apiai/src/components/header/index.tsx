import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header className="bg-primary-900 text-white">
      <div className="relative max-w-7xl mx-auto flex items-center justify-center px-6 py-6 pt-20">
        
        <div className="absolute left-6">
          <Image
            src="/images/logoMin.png"
            alt="Logo da Igreja"
            width={250}
            height={250}
          />
        </div>

        {/* Menu centralizado */}
        <nav className="flex items-center gap-8 text-sm font-medium pl-24 font-[2000]">
          <a href="#" className="hover:text-green-300">INÍCIO</a>
          <a href="#" className="hover:text-green-300">DÍZIMOS E OFERTAS</a>
          <a href="#" className="hover:text-green-300">ENSINO</a>
          <a href="#" className="hover:text-green-300">CENTRO DE CUIDADO PASTORAL</a>
          <a href="#" className="hover:text-green-300">AGENDA</a>
          <a href="#" className="hover:text-green-300">IPP+</a>
          <a href="#" className="hover:text-green-300">LGPD</a>
          <a href="#" className="hover:text-green-300">More</a>
        </nav>

      </div>
    </header>
  );
}