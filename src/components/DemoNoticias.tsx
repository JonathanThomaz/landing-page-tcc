import { Section } from './Section';
import { NewsForm } from './NewsForm';
import { NewsFeed } from './NewsFeed';
import { NewsProvider } from './NewsContext';

export function DemoNoticias() {
  return (
    <NewsProvider>
      <Section id="demo-noticias" className="py-5 demo-noticias-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">
              Demonstração - Sistema de Notícias
            </h2>
            <p className="lead text-muted">
              Experimente a funcionalidade de criação e visualização de notícias da comunidade
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-12">
              <NewsForm />
            </div>
            <div className="col-12">
              <NewsFeed />
            </div>
          </div>
        </div>
      </Section>
    </NewsProvider>
  );
}
