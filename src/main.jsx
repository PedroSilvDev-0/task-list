import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import Tasks from "./view/Tasks/Tasks";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { TAREFAS_MOCK } from "./mock/tarefas.mock";
import Dados from "./components/Dados/Dados";
import ModalAlterar from "./components/Modal/ModalAlterar";
import ModalExcluir from "./components/Modal/ModalExcluir";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks data={TAREFAS_MOCK}/>,
  },
  {
    path: "/dados",
    element: <Dados data={TAREFAS_MOCK}/>, 
  },
  {
    path: "/modalAlterar",
    element: <ModalAlterar data={TAREFAS_MOCK}/>,
  },
  {
    path: "/modalExcluir",
    element: <ModalExcluir data={TAREFAS_MOCK}/>,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
