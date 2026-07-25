import { Link } from 'react-router-dom';

const Encabezado = () => {
  return (
    <div className="relative bg-gradient-to-br from-tinta-800 via-tinta-700 to-tinta-900 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/imagenes/header.png" alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-tinta-900/80 via-tinta-800/60 to-transparent" />

      <header className="relative z-10 max-w-7xl mx-auto px-6 py-14 sm:py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <img src="/imagenes/Logo.png" alt="Logo" className="h-12 w-12 rounded-full border-2 border-white/20" />
            <span className="text-white/50 text-sm font-medium tracking-widest uppercase">Librería</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5">
            Crónicas<br />
            <span className="text-tinta-300">de Tinta</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-md mb-8 leading-relaxed">
            Descubrí historias que te atrapan. Romance, terror, ciencia ficción y más.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="secciones" className="inline-flex items-center gap-2 bg-white text-tinta-800 font-semibold px-7 py-3.5 rounded-xl hover:bg-crema-100 transition-colors text-sm">
              Explorar catálogo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="colaboracion" className="inline-flex items-center gap-2 border border-white/20 text-white font-medium px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
              Colaborá
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Encabezado;
