import TarjetaGenero from "./TarjetaGenero";

function CatalogoGeneros({ generos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {generos.map(genero => (
        <TarjetaGenero key={genero.id} genero={genero} />
      ))}
    </div>
  );
}

export default CatalogoGeneros;
