"use client";
import { signIn } from "next-auth/react";

export default function FormLogin() {
    async function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        
        const data = {
            email: formData.get("Email"),
            password: formData.get("Password")
        }

        signIn("credentials", {
            ...data,
            callbackUrl: "/dashboard"
        })
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={login}
        className="bg-white p-12 rounded-lg w-120 max-w-full px-5 flex justify-center items -center flex-col gap-5">
        <h2 className="font-bold text-xl  p-2">Faça seu Login Aqui</h2>
        <h6>Email:</h6>
        <input 
          name="Email"
          type="email" 
          className="input input-primary bg-white border-gray-300 rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent" 
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
        <h5>Você ainda não tem uma conta? <a href="/cadastro" className="text-green-900 hover:underline">Cadastre-se aqui</a></h5>
        <h5>Você esqueceu sua senha? <a href="/recuperar-senha" className="text-green-900 hover:underline">Recupere-a aqui</a></h5>
      </form>
    </div>
  );
}
