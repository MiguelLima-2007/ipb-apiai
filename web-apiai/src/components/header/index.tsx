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
              <li><a className="hover:bg-green-800">Item 1</a></li>
              <li>
                <a className="hover:bg-green-800">Parent</a>
                <ul className="p-2">
                  <li><a className="hover:bg-green-800">Submenu 1</a></li>
                  <li><a className="hover:bg-green-800">Submenu 2</a></li>
                </ul>
              </li>
              <li><a className="hover:bg-green-800">Item 3</a></li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl text-white hover:bg-green-800">
            Logo
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><a className="hover:bg-green-800">Item 1</a></li>
            <li>
              <details>
                <summary className="hover:bg-green-800">Parent</summary>
                <ul className="p-2 bg-green-900 w-40 z-10">
                  <li><a className="hover:bg-green-800">Submenu 1</a></li>
                  <li><a className="hover:bg-green-800">Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a className="hover:bg-green-800">Item 3</a></li>
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