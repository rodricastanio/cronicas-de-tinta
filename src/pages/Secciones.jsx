import generos from "../utils/generos";
import TarjetaLibro from "../componentes/TarjetaLibro";
import { useState } from "react";

function Secciones({ libros }) {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("");

  const librosFiltrados = libros.filter(libro => {
    const matchBusqueda = libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase());
    const matchGenero = filtro === "" || libro.genero === filtro;
    return matchBusqueda && matchGenero;
  });

  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Catálogo
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Encontrá tu próxima lectura entre todas nuestras categorías
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              placeholder="Buscar por título o autor..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-tinta-400 focus:ring-2 focus:ring-tinta-400/10 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFiltro("")}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filtro === ""
                  ? "bg-tinta-600 text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              Todos
            </button>
            {generos.map(g => (
              <button
                key={g.id}
                onClick={() => setFiltro(g.nombre)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  filtro === g.nombre
                    ? "bg-tinta-600 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {g.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* Results info */}
        {busqueda.trim() !== "" && (
          <div className="mb-8">
            <p className="text-sm text-gray-500">
              Mostrando <span className="font-semibold text-gray-900">{librosFiltrados.length}</span> de {libros.length} libros
              {busqueda && <> para "<span className="text-tinta-600">{busqueda}</span>"</>}
            </p>
          </div>
        )}

        {/* Grid */}
        {busqueda.trim() !== "" || filtro !== "" ? (
          librosFiltrados.length > 0 ? (
            <TarjetaLibro libros={librosFiltrados} />
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-500 text-lg font-medium mb-1">No se encontraron libros</p>
              <p className="text-gray-400 text-sm">Probá con otro término de búsqueda</p>
            </div>
          )
        ) : (
          generos.map(genero => (
            <section key={genero.id} id={genero.id} className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-2xl font-bold text-gray-900">{genero.nombre}</h2>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-400">
                  {libros.filter(l => l.genero === genero.nombre).length} libros
                </span>
              </div>
              <TarjetaLibro genero={genero.nombre} libros={libros} />
            </section>
          ))
        )}
      </div>
    </div>
  );
}

export default Secciones;
