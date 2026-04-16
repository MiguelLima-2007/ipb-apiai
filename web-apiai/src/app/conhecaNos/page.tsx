import LinhaDoTempoComponent from "@/components/linhaDoTempo";

export default function ConhecaNosPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 px-4">
      <h1 className="text-4xl font-bold mb-4">Nossa história</h1>
      <p className="mb-15">
        Uma história construída pela fé, dedicação e compromisso com o
        evangelho, impactando vidas em Apiaí e região.
      </p>
      <LinhaDoTempoComponent />
    </div>
  );
}
