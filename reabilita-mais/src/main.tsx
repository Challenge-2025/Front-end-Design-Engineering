// src/main.tsx

import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Layouts/PublicLayout/Home/index.tsx";
import Error from "./routes/Error/index.tsx";
import Participantes from "./routes/Layouts/PublicLayout/Participantes/index.tsx";
import Login from "./routes/Layouts/PublicLayout/Login/index.tsx";
import Cadastro from "./routes/Layouts/PublicLayout/Cadastro/index.tsx";
import Ajuda from "./routes/Layouts/PublicLayout/Ajuda/index.tsx";
import ClienteDetalhe from "./routes/Layouts/PublicLayout/ClienteDetalhe/index.tsx";
import "./globals.css";
import LayoutPrivado from "./routes/Layouts/PrivateLayout/LayoutPrivado/index.tsx";
import Consulta from "./routes/Layouts/PrivateLayout/PacienteRoutes/Consulta/index.tsx";
import PaginaInicial from "./routes/Layouts/PrivateLayout/PacienteRoutes/PaginaInicial/index.tsx";

// 👇 import do contexto
import { AuthProvider } from "../src/routes/Layouts/TemporaryBox/AuthProvider.tsx";
import Configuracoes from "./routes/Layouts/PrivateLayout/PacienteRoutes/Configuracoes/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/participantes", element: <Participantes /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/ajuda", element: <Ajuda /> },
      { path: "/cliente/:id", element: <ClienteDetalhe /> },
    ],
  },
  {
    path: "/",
    element: <LayoutPrivado />,
    errorElement: <Error />,
    children: [
      { path: "/pagina-inicial", element: <PaginaInicial /> },
      { path: "/consulta", element: <Consulta /> },
      {path: "/configuracao", element: <Configuracoes/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
