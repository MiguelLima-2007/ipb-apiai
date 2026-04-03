import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MySideBarComponent } from "@/components/my-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPB Apiaí",
  description:
    "Esse é o site da IPB Apiaí, um projeto de extensão da Igreja Presbiteriana de Apiaí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row`}
      >
        <SidebarProvider>
          <MySideBarComponent />
          <div className="flex flex-col grow h-screen">
            <header className="bg-blue-400 text-gray-50 h-2/12">
              <SidebarTrigger></SidebarTrigger>
              Cabeçalho
            </header>

            <main className="bg-cyan-400 flex flex-col grow justify-center items-center">
              {children}
            </main>
            <footer className="bg-orange-300 h-2/12">Rodapé</footer>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
