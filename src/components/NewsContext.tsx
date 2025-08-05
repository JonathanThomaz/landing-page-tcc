import { useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { NewsItem, NewsFormData, NewsContextType } from '../types';
import { initialNews } from '../data';
import { NewsContext } from '../contexts/NewsContext';

interface NewsProviderProps {
  children: ReactNode;
}

export function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const addNews = (newsData: NewsFormData) => {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      ...newsData,
      createdAt: new Date().toISOString(),
    };

    setNews(prevNews => [newNews, ...prevNews]);
  };

  const filteredNews = useMemo(() => {
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
  }, [news, searchTerm]);

  const value: NewsContextType = {
    news,
    searchTerm,
    filteredNews,
    addNews,
    setSearchTerm,
  };

  return (
    <NewsContext.Provider value={value}>
      {children}
    </NewsContext.Provider>
  );
}
