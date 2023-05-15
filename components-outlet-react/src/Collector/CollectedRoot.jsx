import { NavLink, Outlet } from 'react-router-dom'

export default function CollectedRoot() {
  return (
    <div className="collected-root">
      <header>
        <nav>
          <h1>Peace and Harmony</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="SimpleForm">SimpleForm</NavLink>
          <NavLink to="Products">Products</NavLink>
          <NavLink to="Category">Category</NavLink>
          <NavLink to="id">Details</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}