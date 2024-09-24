import "./App.css";
import "@govbr-ds/core/dist/core.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import MateriaisDidaticos from "./pages/MateriaisDidaticos";
import Noticias from "./pages/Noticias";
import PaginasUteis from "./pages/PaginasUteis";
import DiaEspacial from "./pages/DiaEspacial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="login" element={<Login />}/>
        <Route path="inicio" element={<Inicio />}/>
        <Route path="galeria" element={<Galeria />}/>
        <Route path="materiaisDidaticos" element={(<MateriaisDidaticos/>)}/>
        <Route path="noticias" element={(<Noticias/>)}/>
        <Route path="paginasUteis" element={(<PaginasUteis/>)}/>
        <Route path="diaEspacial" element={(<DiaEspacial/>)}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);