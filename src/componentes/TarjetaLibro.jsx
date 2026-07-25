function TarjetaLibro({ genero, libros = [] }) {
  const librosAMostrar = genero
    ? libros.filter(libro => libro.genero === genero)
    : libros;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {librosAMostrar.map(libro => (
        <article
          key={libro.titulo}
          className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative overflow-hidden aspect-[3/4] bg-gray-50">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={libro.imagen}
              alt={`Portada de ${libro.titulo}`}
            />
            <div className="absolute top-3 left-3">
              <span className="badge bg-white/90 text-tinta-700 backdrop-blur-sm text-[10px]">
                {libro.genero}
              </span>
            </div>
          </div>
          <div className="p-5">
            <h3 className="font-display font-bold text-base text-gray-900 mb-1 leading-snug">
              {libro.titulo}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{libro.autor}</p>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {libro.descripcion}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default TarjetaLibro;
