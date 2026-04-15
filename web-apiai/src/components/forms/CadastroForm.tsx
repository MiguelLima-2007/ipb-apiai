"use client";

export default function FormRegister() {

    async function register(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const data = {
            nome: formData.get("Nome"),
            email: formData.get("Email"),
            password: formData.get("Password")
        }

        console.log(data)
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="bg-white p-12 rounded-lg w-300 max-w-full px-5 flex justify-center items -center flex-col gap-5">
        <h2 className="font-bold text-xl  p-2">Faça seu Cadastro Aqui</h2>
        <h6>Nome:</h6>
        <input 
          name="Nome"
          type="text" 
          className="input input-primary bg-white border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
          placeholder="Coloque seu Nome aqui!"
        />
        <h6>Email:</h6>
        <input 
          name="Email"
          type="email" 
          className="input input-primary bg-white border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
          placeholder="Coloque seu Email aqui!"
        />
        <h6>Senha:</h6>
        <input 
          name="Password"
          type="password" 
          className="input input-primary bg-white border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" 
          placeholder="Coloque sua Senha aqui!"
        /> 
        
        <button className="bg-green-900 text-white rounded-lg w-full px-4 py-2 hover:bg-green-700 transition-colors duration-300" type="submit">Confirmar</button>
        <h5>Você já tem uma conta? <a href="/login" className="text-green-900 hover:underline">Faça Login aqui</a></h5>
      </form>
    </div>
  );
}
