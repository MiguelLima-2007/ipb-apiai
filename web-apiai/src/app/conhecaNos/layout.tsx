export default function ConhecaNosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-w-screen"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #29493610 0px,
          #29493610 1px,
          transparent 1px,
          transparent 12px
        )`,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}