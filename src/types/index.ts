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

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  author: string;
  eventDate: string;
  createdAt: string;
}

export interface NewsFormData {
  title: string;
  content: string;
  author: string;
  eventDate: string;
}

export interface NewsContextType {
  news: NewsItem[];
  searchTerm: string;
  filteredNews: NewsItem[];
  isLoading: boolean;
  addNews: (newsData: NewsFormData) => void;
  setSearchTerm: (term: string) => void;
}
