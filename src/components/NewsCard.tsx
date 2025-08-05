import type { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="card h-100 shadow-sm news-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title text-primary mb-1">{news.title}</h5>
          <small className="text-muted">
            <i className="bi bi-calendar-event"></i> {formatDate(news.eventDate)}
          </small>
        </div>
        
        <div className="mb-2">
          <small className="text-muted">
            <i className="bi bi-person-fill"></i> Por <span className="fw-medium">{news.author}</span>
          </small>
        </div>

        <p className="card-text">{news.content}</p>
        
        <div className="mt-auto">
          <small className="text-muted">
            <i className="bi bi-clock"></i> Publicado em {formatDateTime(news.createdAt)}
          </small>
        </div>
      </div>
    </div>
  );
}
