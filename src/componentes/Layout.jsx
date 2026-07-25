import Encabezado from './Encabezado'
import Navegacion from './Navegacion'
import PiePagina from './PiePagina'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Encabezado />
      <Navegacion />
      <main className="flex-1">
        <Outlet />
      </main>
      <PiePagina />
    </div>
  )
}

export default Layout
