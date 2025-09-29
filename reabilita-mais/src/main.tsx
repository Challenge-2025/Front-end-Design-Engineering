
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./routes/Home/index.tsx";
import Error from "./routes/Error/index.tsx";
import Participantes from "./routes/Participantes/index.tsx";
import Login from "./routes/Login/index.tsx";
import Cadastro from "./routes/Cadastro/index.tsx";
import "./globals.css";
import Ajuda from "./routes/Ajuda/index.tsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
