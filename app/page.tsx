
import Link from 'next/link'

export default function Page() {
  return (
    <main className="container">
      <section className="card">
        <span className="badge">NeoCore · pre-alpha</span>
        <h1>Estamos afinando el motor</h1>
        <p>La plataforma está en preparación. Mientras tanto, este dominio está servido por un proyecto mínimo, sano y observable.</p>
        <div className="actions">
          <a className="button" href="/api/ping">/api/ping</a>
          <a className="button" href="/status">/status</a>
          <Link className="button" href="https://vercel.com">Vercel</Link>
        </div>
        <footer>
          <span>Build limpio · sin CSP agresivo</span>
          <span className="code">next 14 · node 18+</span>
        </footer>
      </section>
    </main>
  )
}
