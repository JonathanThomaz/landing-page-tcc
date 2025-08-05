import { useNews } from './useNews';

export function NewsSearch() {
  const { searchTerm, setSearchTerm } = useNews();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="input-group input-group-lg">
        <span className="input-group-text bg-light">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar notícias por título, conteúdo ou autor..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setSearchTerm('')}
            title="Limpar pesquisa"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </div>
      {searchTerm && (
        <small className="text-muted mt-2 d-block">
          <i className="bi bi-info-circle"></i> Pesquisando por: "{searchTerm}"
        </small>
      )}
    </div>
  );
}
