export const metadata = {
  title: "NeoCore — En construcción",
  description: "Estamos afinando el motor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
          color: "white",
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial"
        }}
      >
        {children}
      </body>
    </html>
  );
}
