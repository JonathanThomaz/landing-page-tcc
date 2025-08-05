import type { FeatureCard, TeamMember, NewsItem } from '../types';

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

export const initialNews: NewsItem[] = [
  {
    id: '1',
    title: 'Lançamento da Nova Funcionalidade de Moderação IA',
    content: 'Implementamos um sistema avançado de moderação baseado em inteligência artificial que reduz em 80% o tempo necessário para revisar conteúdos na comunidade.',
    author: 'Jonathan Thomaz',
    eventDate: '2025-01-15',
    createdAt: '2025-01-16T10:30:00Z',
  },
  {
    id: '2',
    title: 'Workshop: Desenvolvimento Web Moderno',
    content: 'Participe do nosso workshop sobre as melhores práticas em desenvolvimento web utilizando TypeScript, React e Bootstrap. Evento gratuito para a comunidade.',
    author: 'Equipe TCC',
    eventDate: '2025-02-10',
    createdAt: '2025-01-20T14:15:00Z',
  },
  {
    id: '3',
    title: 'Conquista: 1000 Usuários Ativos',
    content: 'Alcançamos a marca de 1000 usuários ativos em nossa plataforma! Obrigado a toda comunidade pelo apoio e feedback construtivo.',
    author: 'Jonathan Thomaz',
    eventDate: '2025-01-25',
    createdAt: '2025-01-25T16:45:00Z',
  },
  {
    id: '4',
    title: 'Atualização: Interface Responsiva Melhorada',
    content: 'Lançamos uma nova versão da interface com melhorias significativas na experiência mobile e otimizações de performance para todos os dispositivos.',
    author: 'Equipe TCC',
    eventDate: '2025-02-01',
    createdAt: '2025-02-01T09:20:00Z',
  },
];
