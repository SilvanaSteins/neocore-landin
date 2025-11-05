export default function Page() {
  return (
    <main style={{ textAlign: "center", padding: 24 }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>🚧 NeoCore</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Estamos afinando el motor. Vuelve pronto.
      </p>
      <a
        href="/api/ping"
        style={{
          display: "inline-block",
          padding: "10px 16px",
          background: "white",
          color: "#111827",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600
        }}
      >
        /api/ping
      </a>
    </main>
  );
}
