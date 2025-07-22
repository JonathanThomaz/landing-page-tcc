import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#home">
        <i className="bi bi-diagram-3"></i> Gestão de Comunidades IA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#sobre">
              Sobre o Projeto
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#funcionalidades">
              Funcionalidades
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#equipe">
              Equipe
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">
              Contato
            </a>
          </li>
          <li className="nav-item">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
