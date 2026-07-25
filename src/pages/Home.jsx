import generos from '../utils/generos';
import { useState } from 'react';
import CatalogoGeneros from '../componentes/CatalogoGeneros';
import { Link } from 'react-router-dom';

const Home = () => {
  const [gen] = useState(generos);

  return (
    <div>
      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="badge badge-rose mb-3">Catálogo</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
              Explorá por categoría
            </h2>
          </div>
          <Link to="secciones" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-tinta-600 hover:text-tinta-700 transition-colors">
            Ver todo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
        <CatalogoGeneros generos={gen} />
      </section>

      {/* Stats strip */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { number: '24+', label: 'Libros disponibles' },
            { number: '4', label: 'Categorías' },
            { number: '100%', label: 'Gratuito' },
            { number: '24/7', label: 'Acceso online' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">{stat.number}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-br from-tinta-700 to-tinta-900 rounded-3xl overflow-hidden px-8 sm:px-14 py-14 sm:py-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="relative z-10 max-w-lg">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              ¿Tenés un libro favorito?
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Compartilo con nuestra comunidad. Sumá tu libro y ayudá a otros lectores a descubrir nuevas historias.
            </p>
            <Link to="colaboracion" className="inline-flex items-center gap-2 bg-white text-tinta-800 font-semibold px-7 py-3.5 rounded-xl hover:bg-crema-100 transition-colors text-sm">
              Colaborá ahora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
