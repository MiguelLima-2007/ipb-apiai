import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MySideBarComponent } from "@/components/my-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import HeaderComponent from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPB Apiaí",
  description:
    "Esse é o site da IPB Apiaí, um projeto de extensão da Igreja Presbiteriana de Apiaí.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} font-sans antialiased flex`}>
        <SidebarProvider>
          <MySideBarComponent />

          <div className="flex flex-col grow h-screen">
            
            {/* HEADER */}
            <header className="bg-green-900 text-gray-50 h-3/12 flex flex-col">
              <div className="px-4 pt-2">
                <SidebarTrigger />
              </div>

              <HeaderComponent />
            </header>

            {/* MAIN */}
            <main className="bg-cyan-400 flex flex-col grow justify-center items-center">
              {children}
            </main>

            {/* FOOTER */}
            <footer className="bg-green-300 h-2/12 flex items-center px-4">
              Rodapé
            </footer>

          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}