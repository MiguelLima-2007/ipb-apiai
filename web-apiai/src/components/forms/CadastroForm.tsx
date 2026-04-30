"use client";

import { useState, useRef, useEffect } from "react";
import { signIn } from "next-auth/react";

const congregacoes = [
  "Sede", "Pinheiros", "Lageado", "Flor do Templo",
  "Ribeira", "Laranjal", "Caracinhas",
];

export default function FormRegister() {
  const [congregacao, setCongregacao] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      password: formData.get("password"),
      congregacao,
    };

    console.log(data);

    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Erro ao cadastrar");
      return;
    }

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={register}
        className="bg-white p-10 rounded-2xl shadow-md w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Faça seu Cadastro</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm">Nome</label>
            <input
              name="nome"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-800 outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-800 outline-none"
              placeholder="Seu email"
            />
          </div>
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

        <div className="space-y-1">
          <label className="text-sm">Confirmar senha</label>
          <input
            name="confirmPassword"
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-800 outline-none"
            placeholder="Confirme sua senha"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm">Data de nascimento</label>
          <input
            name="dataNascimento"
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-green-800 outline-none"
          />
        </div>

        {/* Congregação */}
        <div className="space-y-1">
          <label className="text-sm">Igreja / Congregação</label>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-green-800 outline-none transition-colors hover:border-gray-400"
            >
              <span className={congregacao ? "text-gray-900" : "text-gray-400"}>
                {congregacao ?? "Selecione a Congregação"}
              </span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <ul className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-1.5 space-y-0.5">
                {congregacoes.map((c) => (
                  <li
                    key={c}
                    onClick={() => {
                      setCongregacao(c);
                      setDropdownOpen(false);
                    }}
                    className={`px-3 py-2 rounded-md text-sm cursor-pointer transition-colors ${
                      congregacao === c
                        ? "bg-green-50 text-green-900 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#56876D] text-white py-3 rounded-lg hover:bg-[#4a7a5d] transition font-semibold"
        >
          Cadastrar
        </button>

        <p className="text-sm text-center">
          Já tem conta?{" "}
          <a href="/login" className="text-green-900 hover:underline">
            Faça login
          </a>
        </p>
      </form>
    </div>
  );
}