import { Link } from 'react-router-dom';

const PiePagina = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/imagenes/Logo.png" alt="Logo" className="h-8 w-8 rounded-lg" />
              <span className="font-display font-bold text-lg">Crónicas de Tinta</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Tu librería online para descubrir historias que enamoran, asombran y transforman.
            </p>
            <div className="flex gap-2">
              {['fb', 'ig', 'tw'].map(social => (
                <a key={social} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors text-xs font-bold uppercase">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Navegación</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/secciones', label: 'Catálogo' },
                { to: '/colaboracion', label: 'Colaborá' },
                { to: '/registro', label: 'Registrate' },
                { to: '/contacto', label: 'Contacto' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Categorías</h4>
            <ul className="space-y-2.5">
              {['Romance', 'Psicología', 'Terror', 'Ciencia Ficción'].map(cat => (
                <li key={cat}>
                  <Link to="/secciones" className="text-gray-400 hover:text-white text-sm transition-colors">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>cronicasdeTinta@gmail.com</li>
              <li>Tel: 1122334455</li>
              <li>av SiempreViva 123</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>&copy; 2025 Crónicas de Tinta. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="terminos.html" className="hover:text-white transition-colors">Términos</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;
