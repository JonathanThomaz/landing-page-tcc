import { featureCards } from '../data';
import { FeatureCard } from './FeatureCard';

export const Funcionalidades = () => (
  <section id="funcionalidades" className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-5 fw-bold">Funcionalidades e Tecnologias</h2>
          <p className="lead text-muted">Conheça os principais recursos e tecnologias do projeto</p>
        </div>
      </div>
      <div className="row g-4">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} card={card} />
        ))}
      </div>
    </div>
  </section>
);
