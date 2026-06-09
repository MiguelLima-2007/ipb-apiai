import LinhaDoTempoComponent from "@/components/linhaDoTempo";
import CardLiderancaComponent from "@/components/cardLideranca";

export default function ConhecaNosPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 px-4">
      <CardLiderancaComponent />
      <LinhaDoTempoComponent />

    </div>
  );
}
