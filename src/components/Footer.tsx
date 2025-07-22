export const Footer = () => (
  <footer id="contato" className="bg-dark text-light py-4 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h5 className="fw-bold mb-3">
            <i className="bi bi-diagram-3"></i> Gestão de Comunidades IA
          </h5>
          <p className="mb-2"><strong>Estudante:</strong> Jonathan Thomaz</p>
          <p className="mb-2"><strong>Curso:</strong> Pós-graduação em Desenvolvimento Web e Mobile</p>
          <p className="mb-2"><strong>Instituição:</strong> IF Sudeste MG - Campus Rio Pomba</p>
        </div>
        <div className="col-lg-6">
          <h6 className="fw-bold mb-3">Contato</h6>
          <p className="mb-2">
            <i className="bi bi-envelope"></i>
            <a href="mailto:jonathanthomaz96@gmail.com.br" className="text-light text-decoration-none">
              jonathanthomaz96@gmail.com.br
            </a>
          </p>
          <div className="d-flex gap-3 mt-3">
            <a href="https://github.com/jonathanthomaz" target="_blank" className="text-light">
              <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
            </a>
            <a href="https://www.linkedin.com/in/jonathan-thomaz/" target="_blank" className="text-light">
              <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="row">
        <div className="col-12 text-center">
          <p className="mb-0">&copy; 2025 - Projeto de TCC. Desenvolvido para fins acadêmicos.</p>
        </div>
      </div>
    </div>
  </footer>
);
