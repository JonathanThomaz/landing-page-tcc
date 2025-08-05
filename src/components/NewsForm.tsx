import { useState } from 'react';
import type { NewsFormData } from '../types';
import { useNews } from './useNews';

export function NewsForm() {
  const { addNews } = useNews();
  const [formData, setFormData] = useState<NewsFormData>({
    title: '',
    content: '',
    author: '',
    eventDate: '',
  });

  const [errors, setErrors] = useState<Partial<NewsFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Remove erro do campo quando usuário começa a digitar
    if (errors[name as keyof NewsFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<NewsFormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Conteúdo é obrigatório';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Autor é obrigatório';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Data do evento é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      addNews(formData);
      setFormData({
        title: '',
        content: '',
        author: '',
        eventDate: '',
      });
      
      // Scroll para o feed para mostrar a nova notícia
      const feedElement = document.getElementById('news-feed');
      if (feedElement) {
        feedElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="card shadow-sm news-form-card">
      <div className="card-header bg-primary text-white">
        <h5 className="card-title mb-0">
          <i className="bi bi-plus-circle-fill me-2"></i>
          Criar Nova Notícia
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="form-label">
                Título <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Digite o título da notícia"
              />
              {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="author" className="form-label">
                Autor <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Nome do autor"
              />
              {errors.author && <div className="invalid-feedback">{errors.author}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="eventDate" className="form-label">
              Data do Evento <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className={`form-control ${errors.eventDate ? 'is-invalid' : ''}`}
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
            />
            {errors.eventDate && <div className="invalid-feedback">{errors.eventDate}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Conteúdo <span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${errors.content ? 'is-invalid' : ''}`}
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={4}
              placeholder="Descreva o conteúdo da notícia..."
            />
            {errors.content && <div className="invalid-feedback">{errors.content}</div>}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-send-fill me-2"></i>
              Publicar Notícia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
