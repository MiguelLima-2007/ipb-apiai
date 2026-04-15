import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2>Página não encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado.</p>
      <Link href="/">Voltar para o início</Link>
    </div>
  )
}