"use client";

import { signIn } from "next-auth/react";

export default function FormLogin() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={login}
        className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Faça seu Login</h2>

        <div className="space-y-1">
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-800 outline-none"
            placeholder="Seu email"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Senha</label>
          <input
            name="password"
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-800 outline-none"
            placeholder="Sua senha"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#56876D] text-white py-3 rounded-lg hover:bg-[#4a7a5d] transition font-semibold"
        >
          Entrar
        </button>

        <div className="space-y-2 text-sm text-center">
          <p>
            Não tem uma conta?{" "}
            <a href="/cadastro" className="text-green-900 hover:underline">
              Cadastre-se aqui
            </a>
          </p>
          <p>
            Esqueceu sua senha?{" "}
            <a href="/recuperar-senha" className="text-green-900 hover:underline">
              Recupere-a aqui
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}