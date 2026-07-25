import { useState } from "react";
import TarjetaLibro from "../componentes/TarjetaLibro";
import { Toaster, toast } from "sonner";

function Colaboracion({ agregarLibro }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const [librosNuevos, setLibrosNuevos] = useState([]);

  const enviarFormulario = (e) => {
    e.preventDefault();

    const libroNuevo = {
      titulo,
      autor,
      genero,
      descripcion,
      imagen: "/imagenes/PortadaGenerica.jpg",
    };

    agregarLibro(libroNuevo);
    setLibrosNuevos([libroNuevo]);
    toast.success("Libro agregado al catálogo");

    setTitulo("");
    setAutor("");
    setGenero("");
    setDescripcion("");
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-tinta-700 to-tinta-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 text-center">
          <span className="badge badge-rose mb-4">Comunidad</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Colaborá con nosotros
          </h1>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Sumá tus libros favoritos y ayudá a otros lectores a descubrir historias increíbles
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="card-surface">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-8">Datos del libro</h2>
          <form className="space-y-1" onSubmit={enviarFormulario}>
            <div>
              <label className="form-label">Título</label>
              <input
                required
                className="input-field"
                type="text"
                placeholder="Título del libro"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Autor</label>
              <input
                required
                className="input-field"
                type="text"
                placeholder="Nombre del autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Género</label>
              <select
                required
                name="gen"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                className="input-field"
              >
                <option value="">Seleccioná género</option>
                <option value="Romance">Romance</option>
                <option value="Psicología">Psicología</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Terror">Terror</option>
              </select>
            </div>
            <div>
              <label className="form-label">Descripción</label>
              <input
                required
                className="input-field"
                type="text"
                placeholder="Breve descripción del libro"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <Toaster position="top-center" richColors />

            <button type="submit" className="btn-primary w-full mt-6">
              Agregar libro
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
          </form>
        </div>

        {librosNuevos.length !== 0 && (
          <div className="mt-14">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-1">¡Libro agregado!</h3>
              <p className="text-gray-500 text-sm">Ya podés verlo en el catálogo</p>
            </div>
            <TarjetaLibro libros={librosNuevos} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Colaboracion;
