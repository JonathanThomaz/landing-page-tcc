import type { FeatureCard, TeamMember } from '../types';

export const featureCards: FeatureCard[] = [
  {
    icon: 'bi-gear-fill',
    iconColor: 'text-primary',
    title: 'Funcionalidades Principais',
    features: [
      { icon: 'bi-check-circle', text: 'Gestão inteligente de membros', colorClass: 'text-success' },
      { icon: 'bi-check-circle', text: 'Moderação automatizada com IA', colorClass: 'text-success' },
      { icon: 'bi-check-circle', text: 'Analytics e relatórios detalhados', colorClass: 'text-success' },
      { icon: 'bi-check-circle', text: 'Sistema de notificações inteligentes', colorClass: 'text-success' },
      { icon: 'bi-check-circle', text: 'Interface responsiva e intuitiva', colorClass: 'text-success' },
    ],
  },
  {
    icon: 'bi-code-slash',
    iconColor: 'text-success',
    title: 'Tecnologias Utilizadas',
    features: [
      { icon: 'bi-check-circle', text: 'TypeScript e JavaScript', colorClass: 'text-primary' },
      { icon: 'bi-check-circle', text: 'Bootstrap 5 para UI/UX', colorClass: 'text-primary' },
      { icon: 'bi-check-circle', text: 'APIs de Inteligência Artificial', colorClass: 'text-primary' },
      { icon: 'bi-check-circle', text: 'Desenvolvimento Web Moderno', colorClass: 'text-primary' },
      { icon: 'bi-check-circle', text: 'Design Responsivo', colorClass: 'text-primary' },
    ],
  },
  {
    icon: 'bi-trophy-fill',
    iconColor: 'text-warning',
    title: 'Benefícios e Diferenciais',
    features: [
      { icon: 'bi-check-circle', text: 'Redução de tempo de moderação', colorClass: 'text-warning' },
      { icon: 'bi-check-circle', text: 'Melhoria na experiência do usuário', colorClass: 'text-warning' },
      { icon: 'bi-check-circle', text: 'Insights baseados em dados', colorClass: 'text-warning' },
      { icon: 'bi-check-circle', text: 'Escalabilidade e performance', colorClass: 'text-warning' },
      { icon: 'bi-check-circle', text: 'Solução inovadora no mercado', colorClass: 'text-warning' },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Jonathan Thomaz',
    description: 'Desenvolvedor Full Stack especializado em tecnologias web modernas. Pós-graduando em Desenvolvimento Web e Mobile pelo IF Sudeste MG - Campus Rio Pomba.',
    githubUrl: 'https://github.com/jonathanthomaz',
    linkedinUrl: 'https://www.linkedin.com/in/jonathan-thomaz/',
  },
];
