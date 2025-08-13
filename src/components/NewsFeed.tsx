import { NewsCard } from './NewsCard';
import { NewsSearch } from './NewsSearch';
import { useNews } from './useNews';

export function NewsFeed() {
  const { filteredNews, searchTerm, isLoading } = useNews();

  return (
    <div id="news-feed">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary mb-0">
          <i className="bi bi-newspaper me-2"></i>
          Feed de Notícias
        </h4>
        <span className="badge bg-primary rounded-pill">
          {filteredNews.length} {filteredNews.length === 1 ? 'notícia' : 'notícias'}
        </span>
      </div>

      <NewsSearch />

      {isLoading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Carregando...</span>
          </div>
          <h5 className="text-muted">
            {searchTerm ? 'Pesquisando notícias...' : 'Carregando notícias...'}
          </h5>
        </div>
      ) : filteredNews.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-3">
            <i className="bi bi-search display-1 text-muted"></i>
          </div>
          <h5 className="text-muted">
            {searchTerm 
              ? `Nenhuma notícia encontrada para "${searchTerm}"` 
              : 'Nenhuma notícia disponível'
            }
          </h5>
          {searchTerm && (
            <p className="text-muted">
              Tente pesquisar com outros termos ou limpe a pesquisa para ver todas as notícias.
            </p>
          )}
        </div>
      ) : (
        <div className="row g-4">
          {filteredNews.map((news) => (
            <div key={news.id} className="col-lg-6 col-xl-4">
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
