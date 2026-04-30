import CarousselComponent from "@/components/caroussel";
import GroupComponent from "@/components/group";
import DivisorHomePage from "@/components/contatosDivisor";

export default function Home() {
  return (
    <div className=" w-full min-h-screen">
      <div className="p-10"><CarousselComponent /></div>
      <div className="p-10"><GroupComponent /></div>
      <DivisorHomePage />
    </div>
  );
}
