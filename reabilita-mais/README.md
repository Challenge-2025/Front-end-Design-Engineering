# Reabilita+

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-purple)

Projeto desenvolvido para o Challenge de Análise e Desenvolvimento de Sistemas da FIAP (2º Semestre). A Reabilita+ é uma plataforma SPA (Single Page Application) que visa conectar pacientes a clínicas de reabilitação, otimizando o acesso a serviços de saúde especializados e facilitando a comunicação.

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

A Reabilita+ é uma empresa especializada na oferta de serviços terceirizados para clínicas de reabilitação. Nosso foco está em atender pessoas com deficiência física — transitória ou definitiva — por meio de parcerias com instituições que compartilham do nosso compromisso com a excelência no cuidado. Acreditamos no potencial de cada indivíduo para evoluir, superar barreiras e reconquistar sua autonomia.

Esta aplicação foi construída como uma SPA (Single Page Application) moderna, responsiva e acessível, utilizando as tecnologias mais atuais do ecossistema front-end. O projeto inclui funcionalidades como cadastro e login de usuários, consulta de informações, uma central de ajuda com FAQ interativo e uma seção para encontrar clínicas próximas.

---

### 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

* **[React](https://react.dev/)**: Biblioteca para construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática ao código.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build para um desenvolvimento front-end mais rápido e otimizado.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilização utility-first para criar designs customizados de forma ágil.
* **[React Router](https://reactrouter.com/)**: Para gerenciamento de rotas e navegação na SPA.
* **[React Hook Form](https://react-hook-form.com/)**: Para gerenciamento e validação de formulários de maneira eficiente e performática.
* **[JSON Server](https://github.com/typicode/json-server)**: Para simular uma API RESTful em ambiente de desenvolvimento.

---

### 📂 Estrutura de Pastas

O projeto segue uma estrutura modular para facilitar a manutenção e escalabilidade. Os principais diretórios dentro de `/src` são:

```
/src
├── components/       # Componentes reutilizáveis (Header, Footer, Menu)
│   ├── Cabecalho/
│   ├── Menu/
│   └── Rodape/
├── img/              # Imagens e ícones utilizados no projeto
├── routes/           # Componentes que representam as páginas da aplicação
│   ├── Ajuda/
│   ├── Cadastro/
│   ├── ClienteDetalhe/
│   ├── Error/
│   ├── FaleConosco/
│   ├── Home/
│   ├── Login/
│   └── Participantes/
├── types/            # Definições de tipos do TypeScript
└── main.tsx          # Ponto de entrada da aplicação e configuração das rotas
```

---

### ▶️ Como Rodar o Projeto

Para executar este projeto, você precisará de dois terminais rodando simultaneamente (um para o front-end e outro para o back-end simulado).

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/reabilita-mais.git](https://github.com/seu-usuario/reabilita-mais.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd reabilita-mais
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de back-end (API):**
    *Abra um terminal e execute:*
    ```bash
    npm run backend
    ```
    *O servidor estará rodando em `http://localhost:5000`.*

5.  **Inicie o servidor de front-end (Aplicação React):**
    *Abra um **novo** terminal e execute:*
    ```bash
    npm run dev
    ```
    *A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).*

---

### 👥 Integrantes

| Nome                  | GitHub                                      | LinkedIn                                                      |
| --------------------- | ------------------------------------------- | ------------------------------------------------------------- |
| **Pedro Ferreira Gomes** | [Ferreira2120](https://github.com/Ferreira2120) | [Pedro Ferreira](https://www.linkedin.com/in/pedro-ferreira-a762532bb) |
| **Gabriel Bebé Silva** | [Gabriel24701](https://github.com/Gabriel24701) | [Gabriel Bebé](https://www.linkedin.com/in/gabriel-bebé-298815238)     |

---

### 🔗 Links Importantes

* **Repositório GitHub:** `[COLOQUE O LINK DO SEU REPOSITÓRIO AQUI]`
* **Vídeo de Apresentação (YouTube):** `[LINK DO VÍDEO AQUI]`