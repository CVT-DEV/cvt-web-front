import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";

import "@govbr-ds/core/dist/core.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="inicio" element={<Inicio />}/>
        <Route path="galeria" element={<Galeria />}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);