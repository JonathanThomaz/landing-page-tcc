import { Section } from './Section';

export const SobreProjeto = () => (
  <Section id="sobre" className="py-5 bg-body-secondary">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="display-5 fw-bold mb-4">Sobre o Projeto</h2>
          <p className="lead">
            Este projeto de TCC visa desenvolver uma aplicação web moderna e intuitiva 
            para gestão de comunidades, integrando recursos de inteligência artificial 
            para otimizar processos, melhorar a experiência do usuário e fornecer 
            insights valiosos para administradores de comunidades.
          </p>
        </div>
      </div>
    </div>
  </Section>
);
