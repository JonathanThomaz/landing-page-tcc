import type { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard = ({ member }: TeamMemberCardProps) => (
  <div className="col-lg-6">
    <div className="card shadow-sm">
      <div className="card-body text-center p-4">
        <div className="mb-3">
          <i className="bi bi-person-circle text-primary" style={{ fontSize: '4rem' }}></i>
        </div>
        <h5 className="card-title fw-bold">{member.name}</h5>
        <p className="text-muted mb-3">{member.description}</p>
        <div className="d-flex justify-content-center gap-3">
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
            <i className="bi bi-github"></i> GitHub
          </a>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);
