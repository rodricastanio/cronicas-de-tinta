function Contacto() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Contacto
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            ¿Tenés alguna consulta? Escribinos y te respondemos pronto
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-surface">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Envianos un mensaje</h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-5" action="" method="post">
                <div>
                  <label className="form-label" htmlFor="nombre">Nombre</label>
                  <input className="input-field" type="text" id="nombre" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="form-label" htmlFor="apellido">Apellido</label>
                  <input className="input-field" type="text" id="apellido" placeholder="Tu apellido" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="input-field" type="email" id="email" placeholder="tu@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="asunto">Asunto</label>
                  <input className="input-field" type="text" id="asunto" placeholder="¿En qué te podemos ayudar?" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label" htmlFor="mensaje">Mensaje</label>
                  <textarea className="input-field" id="mensaje" placeholder="Escribí tu mensaje acá..." />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary">
                    Enviar mensaje
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: '✉', title: 'Email', lines: ['cronicasdeTinta@gmail.com'] },
              { icon: '☎', title: 'Teléfono', lines: ['1122334455'] },
              { icon: '◉', title: 'Dirección', lines: ['av SiempreViva 123'] },
              { icon: '⏱', title: 'Horario', lines: ['Lun a Vie: 9 - 18hs', 'Sáb: 10 - 14hs'] },
            ].map(card => (
              <div key={card.title} className="card-surface flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-tinta-50 flex items-center justify-center text-tinta-600 text-lg shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">{card.title}</h3>
                  {card.lines.map((line, i) => (
                    <p key={i} className="text-sm text-gray-500">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="card-surface">
              <h3 className="font-semibold text-sm text-gray-900 mb-3">Seguinos</h3>
              <div className="flex gap-2">
                {['Facebook', 'Instagram', 'Twitter'].map(s => (
                  <a key={s} href="#" className="flex-1 text-center py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:border-tinta-300 hover:text-tinta-600 hover:bg-tinta-50 transition-all">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
