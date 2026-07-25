import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navegacion = () => {
  const [abierto, setAbierto] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/secciones', label: 'Catálogo' },
    { to: '/colaboracion', label: 'Colaborá' },
    { to: '/registro', label: 'Registrate' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/imagenes/Logo.png" alt="Logo" className="h-8 w-8 rounded-lg" />
            <span className="font-display font-bold text-lg text-tinta-800 hidden sm:block">Crónicas de Tinta</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'bg-tinta-50 text-tinta-700'
                      : 'text-gray-600 hover:text-tinta-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="secciones" className="inline-flex items-center gap-1.5 bg-tinta-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-tinta-700 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Buscar libros
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setAbierto(!abierto)}
            aria-label="Menú"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {abierto
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {abierto && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <ul className="flex flex-col gap-1">
              {links.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setAbierto(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.to)
                        ? 'bg-tinta-50 text-tinta-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navegacion;
