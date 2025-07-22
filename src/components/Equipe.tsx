import { teamMembers } from '../data';
import { TeamMemberCard } from './TeamMemberCard';

export const Equipe = () => (
  <section id="equipe" className="py-5 bg-body-secondary">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-5 fw-bold">Equipe</h2>
          <p className="lead text-muted">Desenvolvido com dedicação e inovação</p>
        </div>
      </div>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  </section>
);
