import { useState, useMemo, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { NewsItem, NewsFormData, NewsContextType } from '../types';
import { initialNews } from '../data';
import { NewsContext } from '../contexts/NewsContext';
import { sleepInSeconds } from '../utils';

interface NewsProviderProps {
  children: ReactNode;
}

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const loadInitialNews = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await sleepInSeconds(2);
      
      setNews(initialNews);
    } catch (error) {
      console.error('Erro ao carregar notícias iniciais:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Carrega as notícias iniciais quando o componente é montado
  useEffect(() => {
    loadInitialNews();
  }, []);

  const setSearchTermWithDelay = async (term: string) => {
    if (term.trim()) {
      setIsSearching(true);
      setSearchTerm(term);
      await sleepInSeconds(1.5);
      setIsSearching(false);
    } else {
      setSearchTerm(term);
    }
  };

  const addNews = (newsData: NewsFormData) => {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      ...newsData,
      createdAt: new Date().toISOString(),
    };

    setNews(prevNews => [newNews, ...prevNews]);
  };

  const filteredNews = useMemo(() => {
    // Se está carregando inicial ou pesquisando, retorna array vazio
    if (isLoading || isSearching) {
      return [];
    }

    if (!searchTerm.trim()) {
      return [...news].sort((a, b) => {
        // Ordena por data do evento (mais recente primeiro), depois por data de criação
        const eventDateA = new Date(a.eventDate).getTime();
        const eventDateB = new Date(b.eventDate).getTime();
        
        if (eventDateA !== eventDateB) {
          return eventDateB - eventDateA;
        }
        
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }

    const searchLower = searchTerm.toLowerCase();
    return news
      .filter(item => 
        item.title.toLowerCase().includes(searchLower) ||
        item.content.toLowerCase().includes(searchLower) ||
        item.author.toLowerCase().includes(searchLower)
      )
      .sort((a, b) => {
        const eventDateA = new Date(a.eventDate).getTime();
        const eventDateB = new Date(b.eventDate).getTime();
        
        if (eventDateA !== eventDateB) {
          return eventDateB - eventDateA;
        }
        
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [news, searchTerm, isLoading, isSearching]);

  const value: NewsContextType = {
    news,
    searchTerm,
    filteredNews,
    isLoading: isLoading || isSearching,
    addNews,
    setSearchTerm: setSearchTermWithDelay,
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
}
