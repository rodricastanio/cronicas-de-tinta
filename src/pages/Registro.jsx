function Registro() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
            Creá tu cuenta
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Unite a la comunidad de Crónicas de Tinta
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="card-surface">
          <form className="space-y-1" action="" method="post">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
              <div>
                <label className="form-label" htmlFor="nombre">Nombre</label>
                <input className="input-field" type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="form-label" htmlFor="apellido">Apellido</label>
                <input className="input-field" type="text" id="apellido" name="apellido" placeholder="Tu apellido" required />
              </div>
            </div>

            <div>
              <label className="form-label" htmlFor="nacimiento">Fecha de nacimiento</label>
              <input className="input-field" type="date" id="nacimiento" name="nacimiento" required />
            </div>

            <div>
              <label className="form-label" htmlFor="email">Email</label>
              <input className="input-field" type="email" id="email" name="email" placeholder="tu@email.com" required />
            </div>

            <div>
              <label className="form-label" htmlFor="psswd">Contraseña</label>
              <input className="input-field" type="password" id="psswd" name="passwd" placeholder="••••••••" required />
            </div>

            <div>
              <label className="form-label mb-3">Sexo</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input type="radio" name="sexo" value="hombre" />
                  Hombre
                </label>
                <label className="radio-option">
                  <input type="radio" name="sexo" value="mujer" />
                  Mujer
                </label>
                <label className="radio-option">
                  <input type="radio" name="sexo" value="noesp" />
                  No especificado
                </label>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full mt-4">
              Crear cuenta
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
