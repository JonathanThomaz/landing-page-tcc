import { Section } from './Section';
import { Button } from './Button';
import { Icon } from './Icon';

export const HeroSection = () => (
  <Section id="home" className="hero-section">
    <div className="container">
      <div className="row align-items-center min-vh-100 pt-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">
            Desenvolvimento de uma Aplicação Web para Gestão de Comunidades
          </h1>
          <h2 className="text-primary mb-4">com uso de Inteligência Artificial</h2>
          <p className="lead mb-4">
            Uma solução inovadora que combina tecnologias modernas de desenvolvimento web
            com inteligência artificial para revolucionar a gestão de comunidades online,
            proporcionando experiências mais inteligentes e eficientes.
          </p>
          <div className="d-flex gap-3">
            <Button href="#sobre">
              <Icon name="bi bi-info-circle" /> Saiba Mais
            </Button>
            <Button href="#funcionalidades" className="btn btn-outline-primary btn-lg">
              <Icon name="bi bi-gear" /> Funcionalidades
            </Button>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="hero-image">
            <Icon name="bi bi-diagram-3-fill text-primary" style={{ fontSize: '15rem' }} />
            <div className="floating-elements">
              <Icon name="bi bi-robot text-success floating-icon-1" />
              <Icon name="bi bi-people text-info floating-icon-2" />
              <Icon name="bi bi-graph-up text-warning floating-icon-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
