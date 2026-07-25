const TarjetaGenero = ({ genero }) => {
  return (
    <a
      href={`secciones#${genero.id}`}
      className="group relative block rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
    >
      <img
        src={genero.destacado.imagen}
        alt={genero.nombre}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <span className="badge badge-rose w-fit mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explorar
        </span>
        <h3 className="font-display text-2xl font-bold text-white mb-1">
          {genero.nombre}
        </h3>
        <p className="text-white/50 text-sm">
          {genero.destacado.titulo}
        </p>
      </div>
    </a>
  );
};

export default TarjetaGenero;
