

export default function ConhecaNosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gray-200 bg-opacity-50 rounded-lg shadow-xl m-10">
      
      <h1 className="text-3xl font-bold mb-4">
        Conheça-nos
      </h1>
      {children}
    </div>
  );
}