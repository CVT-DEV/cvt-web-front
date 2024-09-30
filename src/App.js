import "./App.css";
import "@govbr-ds/core/dist/core.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import Fotos from "./pages/Fotos"
import MateriaisDidaticos from "./pages/MateriaisDidaticos";
import Noticias from "./pages/Noticias";
import PaginasUteis from "./pages/PaginasUteis";
import DiaEspacial from "./pages/DiaEspacial";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout notLoggedIn={true} />}>
          <Route index element={<Login />}/>
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="inicio" element={<Inicio />}/>
          <Route path="galeria" element={<Galeria />}/>
          <Route path="fotos" element={<Fotos />}/>
          <Route path="materiaisDidaticos" element={(<MateriaisDidaticos/>)}/>
          <Route path="noticias" element={(<Noticias/>)}/>
          <Route path="paginasUteis" element={(<PaginasUteis/>)}/>
          <Route path="diaEspacial" element={(<DiaEspacial/>)}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);