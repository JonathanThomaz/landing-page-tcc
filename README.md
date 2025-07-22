# TCC - Landing Page - Gestão de Comunidades com IA

Uma landing page desenvolvida com React, TypeScript e Vite, seguindo os princípios SOLID e utilizando Composition Pattern para demonstrar um projeto de TCC sobre gestão de comunidades com inteligência artificial.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **Bootstrap 5** - Framework CSS para UI responsiva
- **Bootstrap Icons** - Conjunto de ícones vetoriais
- **Yarn** - Gerenciador de pacotes

## 🏗️ Arquitetura e Princípios

### Princípios SOLID Aplicados

1. **Single Responsibility Principle (SRP)**
   - Cada componente tem uma única responsabilidade
   - `ThemeProvider` apenas gerencia temas
   - `FeatureCard` apenas renderiza um card de funcionalidade
   - `TeamMemberCard` apenas renderiza informações de membro da equipe

2. **Open/Closed Principle (OCP)**
   - Componentes são abertos para extensão, fechados para modificação
   - `Button` e `Icon` podem ser estendidos via props sem alterar código

3. **Liskov Substitution Principle (LSP)**
   - Componentes filhos podem substituir componentes pai
   - Interfaces TypeScript garantem contratos consistentes

4. **Interface Segregation Principle (ISP)**
   - Interfaces específicas e focadas (`FeatureItem`, `TeamMember`, `FeatureCard`)
   - Componentes dependem apenas das interfaces que usam

5. **Dependency Inversion Principle (DIP)**
   - Componentes dependem de abstrações (props/interfaces)
   - Dados são injetados via props, não hardcoded

### Composition Pattern

- **Componentes Compostos**: `Section`, `Button`, `Icon` são reutilizáveis
- **Injeção de Dependência**: Dados vêm de `src/data/index.ts`
- **Separação de Responsabilidades**: UI, dados e lógica separados

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Button.tsx       # Componente de botão reutilizável
│   ├── Equipe.tsx       # Seção da equipe
│   ├── FeatureCard.tsx  # Card de funcionalidade
│   ├── FeatureList.tsx  # Lista de funcionalidades
│   ├── Footer.tsx       # Rodapé
│   ├── Funcionalidades.tsx # Seção de funcionalidades
│   ├── HeroSection.tsx  # Seção hero principal
│   ├── Icon.tsx         # Componente de ícone reutilizável
│   ├── Navbar.tsx       # Barra de navegação
│   ├── Section.tsx      # Wrapper de seção reutilizável
│   ├── SobreProjeto.tsx # Seção sobre o projeto
│   ├── TeamMemberCard.tsx # Card de membro da equipe
│   ├── ThemeProvider.tsx # Provider de contexto de tema
│   └── ThemeToggle.tsx  # Botão de alternância de tema
├── data/                # Dados da aplicação
│   └── index.ts         # Configuração de dados
├── types/               # Definições de tipos TypeScript
│   └── index.ts         # Interfaces e tipos
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada
└── styles.css           # Estilos globais
```

## 🎨 Features

- **Tema Claro/Escuro**: Alternância dinâmica com persistência no localStorage
- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Animações CSS**: Efeitos visuais suaves e profissionais
- **Componentização**: Código modular e reutilizável
- **TypeScript**: Tipagem estática para maior robustez
- **Acessibilidade**: Seguindo boas práticas de a11y

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
yarn install

# Iniciar servidor de desenvolvimento
yarn dev

# Build para produção
yarn build

# Preview da build de produção
yarn preview

# Lint do código
yarn lint
```

## 📋 Como Usar

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd tcc-landing-page
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🔧 Configuração

### Vite Config
O projeto usa configuração padrão do Vite com suporte a TypeScript e React.

### TypeScript Config
- `strict: true` para máxima verificação de tipos
- Configuração modular com diferentes arquivos para diferentes contextos

### Bootstrap
Importado via CDN no CSS principal para melhor performance e facilidade de manutenção.

## 📚 Sobre o Projeto TCC

Este projeto representa uma landing page para um TCC sobre **"Desenvolvimento de uma Aplicação Web para Gestão de Comunidades com uso de Inteligência Artificial"**.

### Objetivos
- Demonstrar capacidades técnicas em desenvolvimento web moderno
- Aplicar conceitos de arquitetura de software
- Showcasing de tecnologias e metodologias
- Interface profissional e responsiva

### Funcionalidades Demonstradas
- Gestão inteligente de membros
- Moderação automatizada com IA
- Analytics e relatórios detalhados
- Sistema de notificações inteligentes
- Interface responsiva e intuitiva

## 👨‍💻 Desenvolvedor

**Jonathan Thomaz**  
Pós-graduando em Desenvolvimento Web e Mobile  
IF Sudeste MG - Campus Rio Pomba

- GitHub: [@jonathanthomaz](https://github.com/jonathanthomaz)
- LinkedIn: [jonathan-thomaz](https://www.linkedin.com/in/jonathan-thomaz/)

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte do TCC.

---

*Desenvolvido com ❤️ usando React, TypeScript e Vite*
