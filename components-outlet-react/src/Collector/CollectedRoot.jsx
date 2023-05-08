import { NavLink, Outlet } from 'react-router-dom'

export default function CollectedRoot() {
  return (
    <div className="collected-root">
      <header>
        <nav>
          <h1>New Routers</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="SimpleForm">SimpleForm</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}