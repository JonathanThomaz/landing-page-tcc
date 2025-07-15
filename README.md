# TCC - Gestão de Comunidades com IA

**Projeto desenvolvido por:** Jonathan Thomaz  
**Curso:** Pós-graduação em Desenvolvimento Web e Mobile  
**Instituição:** IF Sudeste MG - Campus Rio Pomba  
**Ano:** 2025

---

Projeto simples usando apenas HTML, Bootstrap e TypeScript, sem frameworks como React ou Angular.

## 📋 Visão Geral

Este é um projeto de TCC desenvolvido com tecnologias web fundamentais, focando em uma abordagem **vanilla** (sem frameworks) para demonstrar o domínio das tecnologias base da web. A landing page apresenta um sistema completo de gestão de comunidades com IA, implementado com TypeScript, Bootstrap 5 e JavaScript puro.

## 🏗️ Estrutura do Projeto

```
tcc-landing-page/
├── public/
│   ├── index.html          # Página principal
│   ├── style.css           # Estilos customizados
│   └── js/
│       └── index.js        # JavaScript compilado do TypeScript
├── src/
│   └── index.ts           # Código TypeScript principal
├── tsconfig.json          # Configuração do TypeScript
└── package.json           # Dependências e scripts
```

## 🎨 Funcionalidade Principal

### **Sistema de Alternância de Tema**
- **Funcionalidade**: Alternância completa entre tema claro e escuro
- **Características**:
  - Implementação vanilla sem frameworks frontend
  - Persistência da preferência do usuário
  - Transições suaves entre temas
  - Integração nativa com Bootstrap 5

## 🌓 Sistema de Alternância de Tema

### **Abordagem Vanilla (Sem Frameworks)**

O sistema de tema foi implementado usando **TypeScript puro** e **CSS Variables**, demonstrando como criar funcionalidades complexas sem dependência de frameworks:

#### **Implementação TypeScript:**
```typescript
class ThemeManager {
  private currentTheme: string;
  private toggleButton: HTMLElement | null;
  private htmlElement: HTMLElement | null;

  constructor() {
    this.htmlElement = document.documentElement;
    this.toggleButton = document.getElementById('theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  private setTheme(theme: string): void {
    if (this.htmlElement) {
      this.htmlElement.setAttribute('data-bs-theme', theme);
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
    }
  }
}
```

#### **CSS Variables para Temas:**
```css
:root {
  --bs-body-bg: #ffffff;
  --bs-body-color: #212529;
  --hero-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-bg: #ffffff;
  --card-shadow: rgba(0, 0, 0, 0.1);
}

[data-bs-theme="dark"] {
  --bs-body-bg: #212529;
  --bs-body-color: #ffffff;
  --hero-bg: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  --card-bg: #2d3748;
  --card-shadow: rgba(0, 0, 0, 0.3);
}
```

### **Funcionalidades do Sistema de Tema:**

1. **Persistência de Dados**
   - Salva preferência no `localStorage`
   - Restaura tema na próxima visita

2. **Transições Suaves**
   - Animações CSS para mudanças de cor
   - Efeitos visuais no botão de alternância

3. **Ícone Dinâmico**
   - Lua para modo claro
   - Sol para modo escuro
   - Animação de escala no clique

4. **Integração com Bootstrap**
   - Usa o atributo `data-bs-theme` do Bootstrap 5
   - Compatível com componentes nativos

## 🚀 Implementação da Funcionalidade

### **Classe ThemeManager (TypeScript):**

A implementação completa do sistema de temas usando orientação a objetos:

```typescript
class ThemeManager {
  private currentTheme: string;
  private toggleButton: HTMLElement | null;
  private htmlElement: HTMLElement | null;

  constructor() {
    this.htmlElement = document.documentElement;
    this.toggleButton = document.getElementById('theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  private init(): void {
    this.setTheme(this.currentTheme);
    this.bindEvents();
  }

  private bindEvents(): void {
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  private toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private setTheme(theme: string): void {
    if (this.htmlElement) {
      this.htmlElement.setAttribute('data-bs-theme', theme);
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
      this.updateToggleIcon();
    }
  }

  private updateToggleIcon(): void {
    if (this.toggleButton) {
      const icon = this.toggleButton.querySelector('i');
      if (icon) {
        icon.className = this.currentTheme === 'light' 
          ? 'bi bi-moon-stars' 
          : 'bi bi-sun';
      }
    }
  }
}
```

### **Vantagens da Abordagem Vanilla:**

- ✅ **Performance**: Sem overhead de frameworks
- ✅ **Controle Total**: Manipulação direta do DOM
- ✅ **Aprendizado**: Domínio das tecnologias fundamentais
- ✅ **Compatibilidade**: Funciona em qualquer ambiente web
- ✅ **Tamanho**: Bundle menor e mais rápido

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos avançados com variables e animations
- **TypeScript**: Tipagem estática e orientação a objetos
- **Bootstrap 5**: Framework CSS responsivo
- **Bootstrap Icons**: Biblioteca de ícones
- **JavaScript ES6+**: Funcionalidades modernas (classes, modules, etc.)

## 📱 Responsividade

O projeto implementa design responsivo usando:
- **Bootstrap Grid System**
- **Media Queries customizadas**
- **Flexbox e CSS Grid**
- **Imagens e ícones escaláveis**

## 🎯 Diferenciais do Projeto

1. **Sem Dependência de Frameworks Frontend**
2. **Sistema de tema completo e persistente**
3. **Código TypeScript bem estruturado e tipado**
4. **Performance otimizada**
5. **Integração nativa com Bootstrap 5**

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Compilar TypeScript e iniciar servidor
npm run dev

# Apenas compilar
npm run build

# Apenas servidor
npm start
```

## 📝 Conclusão

Este projeto demonstra que é possível criar aplicações web modernas, interativas e profissionais usando apenas as tecnologias fundamentais da web, sem a necessidade de frameworks complexos. A implementação vanilla permite maior controle, melhor performance e um entendimento mais profundo das tecnologias web.

