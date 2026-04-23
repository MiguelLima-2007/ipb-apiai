import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header className="bg-green-900 text-white py-4 px-8">
      <div className="navbar bg-green-900 shadow-sm text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white hover:bg-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-green-900 text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="hover:bg-green-800">Conheça-nos</a>
              </li>
              <li>
                <a className="hover:bg-green-800">Em que Cremos</a>
                <ul className="p-2">
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://www.executivaipb.com.br/arquivos/manual_presbiteriano_2024.pdf"
                    >
                      Manual Presbiteriano
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-green-800">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="hover:bg-green-800">Sermões</a>
              </li>
            </ul>
          </div>

          <a className="flex items-center gap-2" href="/">
            <span className="text-xl font-semibold tracking-wide">IPB</span>
            <span className="text-z text-green-300 tracking-wider">Apiaí</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex border-l border-gray-300 pl-4">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a className="hover:bg-green-800" href="/conhecaNos">
                Conheça-nos
              </a>
            </li>

            <li>
              <details>
                <summary className="hover:bg-green-800">Em que Cremos</summary>
                <ul className="p-2 bg-green-900 w-40 z-10">
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://www.executivaipb.com.br/arquivos/manual_presbiteriano_2025.pdf"
                    >
                      Manual Presbiteriano
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://www.executivaipb.com.br/arquivos/confissao_de_westminster.pdf"
                    >
                      Confissão de Fé de Westminster
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://ipsemear.org/wp-content/uploads/catecismo-maior.pdf"
                    >
                      Catecismo Maior
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary className="hover:bg-green-800">
                  Documentos de Consulta/Aprendizado
                </summary>
                <ul className="p-2 bg-green-900 w-40 z-10">
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://ipsemear.org/wp-content/uploads/Breve-Catecismo.pdf"
                    >
                      Breve Catecismo
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://www.monergismo.com/textos/credos/credoapostolico.htm"
                    >
                      Credo Apostólico
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://ipsemear.org/wp-content/uploads/Credo-Niceno.pdf"
                    >
                      Credo Niceno
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://ipsemear.org/wp-content/uploads/Catecismo-de-Heidelberg.pdf"
                    >
                      Catecismo de Heidelberg (1563)
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://ipsemear.org/wp-content/uploads/Confissao_belga.pdf"
                    >
                      Confissão Belga
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-green-800"
                      href="https://www.monergismo.com/textos/credos/dort.htm"
                    >
                      Cânons de Dort
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:bg-green-800" href="/sermoes">
                Sermões
              </a>
            </li>
            <li>
              <a className="hover:bg-green-800" href="/servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className="hover:bg-green-800" href="/contatos">
                Contatos
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a
            className="btn border-none text-white-900 hover:bg-green-900"
            href="/cadastro"
          >
            Cadastrar
          </a>
        </div>
      </div>
    </header>
  );
}
