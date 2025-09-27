import "./App.css";

export default function App() {
  return (
    <div className="site">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="Ir para o topo">
            <span className="brand-dot" />
            Hyan.dev
          </a>
          <nav className="links" aria-label="principal">
            <a href="#projects">Projetos</a>
          </nav>
        </div>
      </header>

      {/* HERO em tela cheia */}
      <section id="top" className="hero">
        <div className="container hero-inner">
          <span className="kicker">Portfólio • React + Vite</span>
          <h1 className="title">Interfaces rápidas, acessíveis e bonitas</h1>
          <p className="subtitle">
            Eu crio experiências web com foco em performance e simplicidade.
          </p>
          <div className="cta">
            <a className="btn btn-brand" href="https://github.com/HyanFerreira" target="_blank">
              Ver projetos
            </a>
            <a className="btn" href="http://linkedin.com/in/hyanferreira/" target="_blank">
              Baixar CV
            </a>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projetos recentes</h2>
          <div className="grid">
            <article className="card">
              <h3>RepubliMap</h3>
              <p className="meta">
                Mapa de moradias estudantis + rotas de ônibus
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Node</li>
                <li>Prisma</li>
                <li>MySQL</li>
              </ul>
            </article>
            <article className="card">
              <h3>FaciliTur</h3>
              <p className="meta">Calendário de eventos e turismo da cidade</p>
              <ul className="tags">
                <li>Laravel</li>
                <li>Livewire</li>
                <li>TallStackUI</li>
              </ul>
            </article>
            <article className="card">
              <h3>Rally of the Guard</h3>
              <p className="meta">Mod Fabric 1.21.1 — guardas com táticas</p>
              <ul className="tags">
                <li>Java</li>
                <li>Minecraft</li>
                <li>Fabric</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container foot">
          © {new Date().getFullYear()} Hyan Ferreira · React + Vite · Deploy:
          Netlify
        </div>
      </footer>
    </div>
  );
}
