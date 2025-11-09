# Reabilita+

![Status](https://img.shields.io/badge/status-concluído-purple)

Projeto desenvolvido para o Challenge de Análise e Desenvolvimento de Sistemas da FIAP (1º Ano - 2º Semestre). A Reabilita+ é uma plataforma SPA (Single Page Application) que visa conectar pacientes a clínicas de reabilitação, otimizando o acesso a serviços de saúde especializados e facilitando o agendamento de consultas.

---

### 📋 Índice

* [Sobre o Projeto](#-sobre-o-projeto)
* [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [📂 Estrutura de Pastas](#-estrutura-de-pastas)
* [▶️ Como Rodar o Projeto](#️-como-rodar-o-projeto)
* [👥 Integrantes](#-integrantes)
* [🔗 Links Importantes](#-links-importantes)

---

### 📖 Sobre o Projeto

A Reabilita+ é uma empresa especializada na oferta de serviços terceirizados para clínicas de reabilitação. Nosso foco está em atender pessoas com deficiência física — transitória ou definitiva — por meio de parcerias com instituições que compartilham do nosso compromisso com a excelência no cuidado.

Esta aplicação foi construída como uma SPA (Single Page Application) moderna e responsiva, utilizando as tecnologias mais atuais do ecossistema front-end. O projeto se conecta a uma API Java (criada na disciplina de Domain-Driven Design) para funcionalidades como:

* Cadastro de novos pacientes.
* Login e autenticação de pacientes.
* Dashboard privado com listagem de consultas.
* Agendamento de novas consultas.
* Atualização de dados cadastrais do paciente.

---

### 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

* **[React](https://react.dev/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Vite](https://vitejs.dev/)**
* **[Tailwind CSS](https://tailwindcss.com/)**
* **[React Router](https://reactrouter.com/)**
* **[React Hook Form](https://react-hook-form.com/)**
* **[Context API](https://react.dev/learn/passing-data-deeply-with-context)** (para Autenticação)
* **[Lucide React](https://lucide.dev/)** (para Ícones)

---

### 📂 Estrutura de Pastas

O projeto segue a estrutura modular abaixo, separando componentes públicos, privados e reutilizáveis.

/src
├── components/ # Componentes reutilizáveis
│ ├── Cabecalho/ # Header público
│ ├── Menu/
│ ├── PacienteComponents/ # Componentes da área privada (Sidebar, Header "Bem-vindo")
│ ├── Rodape/
│ └── TituloSecao/
├── img/ # Imagens e ícones
├── routes/
│ ├── Error/ # Página de Erro 404
│ └── Layouts/
│ ├── Hook/ # Hook (useAuth.tsx)
│ ├── PrivateLayout/ # Telas que exigem login
│ │ ├── LayoutPrivado/
│ │ ├── PacienteRoutes/ (Consulta, Configuracoes, PaginaInicial)
│ │ └── RotasPrivadas/
│ ├── PublicLayout/ # Telas públicas (Home, Login, Cadastro, Ajuda, etc.)
│ └── TemporaryBox/ # Contexto de Autenticação (AuthProvider.tsx)
├── types/ # Definições de tipos (TypeScript)
└── main.tsx # Ponto de entrada e configuração das rotas
---

### ▶️ Como Rodar o Projeto

A aplicação está conectada a um back-end Java hospedado na nuvem. Você **não** precisa rodar um back-end localmente.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Challenge-2025/Front-end-Design-Engineering.git](https://github.com/Challenge-2025/Front-end-Design-Engineering.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Front-end-Design-Engineering/reabilita-mais
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de front-end (Aplicação React):**
    ```bash
    npm run dev
    ```
    *A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).*

#### API (Back-end)

A API Java consumida por este projeto está hospedada no Render:
`https://domain-driven-design-using-java-2sem.onrender.com`

---

### 👥 Integrantes

| Nome | GitHub | LinkedIn |
| :--- | :--- | :--- |
| **Pedro Ferreira Gomes** | [Ferreira2120](https://github.com/Ferreira2120) | [Pedro Ferreira](https://www.linkedin.com/in/pedro-ferreira-a762532bb) |
| **Gabriel Bebé Silva** | [Gabriel24701](https://github.com/Gabriel24701) | [Gabriel Bebé](https://www.linkedin.com/in/gabriel-bebé-298815238) |

---

### 🔗 Links Importantes

* **Repositório GitHub:** `https://github.com/Challenge-2025/Front-end-Design-Engineering`
* **Deploy (Vercel):** `[INSERIR LINK DO VERCEL AQUI]`
* **Vídeo de Apresentação (YouTube):** `[INSERIR LINK DO VÍDEO DA SPRINT 4 AQUI]`