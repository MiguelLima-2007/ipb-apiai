import Image from "next/image";
import CarousselComponent from "@/components/caroussel";
import GroupComponent from "@/components/group";

export default function Home() {
  return (
    <div>
      <CarousselComponent />
      <div className="p-10"><GroupComponent /></div>

    </div>
  );
}
