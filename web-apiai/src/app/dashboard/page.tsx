import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }
    
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Dashboard!</h1>
      <p className="text-lg text-gray-600">Aqui você pode acessar suas informações e configurações geral.</p>

      <h2>Bem-Vindo {session?.user?.name}</h2>
    </div>
  );
}