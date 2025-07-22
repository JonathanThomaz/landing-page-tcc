export interface FeatureItem {
  icon: string;
  text: string;
  colorClass: string;
}

export interface FeatureCard {
  icon: string;
  iconColor: string;
  title: string;
  features: FeatureItem[];
}

export interface TeamMember {
  name: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface SocialLink {
  url: string;
  icon: string;
  label: string;
}
