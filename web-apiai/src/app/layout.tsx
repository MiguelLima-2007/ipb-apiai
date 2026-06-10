import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

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
          <div className="flex flex-col grow h-screen">

            {/* HEADER */}
            <header className="bg-[#294936] text-gray-50 h-[120px] flex flex-col position-absolute w-full">
              <div className="px-4 pt-2">
              </div>

              <HeaderComponent />
            </header>

            {/* MAIN */}
            <main className="bg-gray-200 flex flex-col grow justify-center items-center">
              {children}
            </main>

            {/* FOOTER */}
            <footer className="bg-[#294936] h-2/12 flex items-center px-4">
              <FooterComponent />
            </footer>

          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}