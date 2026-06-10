import LinhaDoTempoComponent from "@/components/linhaDoTempo";
import CardLiderancaComponent from "@/components/cardLideranca";
import HeroComponent from "@/components/heroConhecaNos";

export default function ConhecaNosPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-white rounded-lg shadow-md">
      <HeroComponent />
      <CardLiderancaComponent />
      <LinhaDoTempoComponent />
      
    </div>
  );
}
