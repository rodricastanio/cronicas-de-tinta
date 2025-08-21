import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Contacto from "./pages/Contacto";
import Secciones from "./pages/Secciones";
import Colaboracion from "./pages/Colaboracion";
import { libros as librosIniciales } from "./utils/libros";
import { useState } from "react";

function App() {
  const [libs, setLibs] = useState(librosIniciales);

  const agregarLibro = (libroNuevo) => {
    setLibs([...libs, libroNuevo]);
  };

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="registro" element={<Registro />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="secciones" element={<Secciones libros={libs} />} />
          <Route path="colaboracion" element={<Colaboracion agregarLibro={agregarLibro} />} />
        </Route>
      </Routes>
  );
}

export default App;
