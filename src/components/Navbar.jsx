import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
  <nav className="navbar navbar-expand-lg joha-nav py-0">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        <img  className="img-fluid ms-1" src="/img/6tologoo.png" alt="logo" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="joha nav-link active ms-0 me-5" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="joha nav-link mx-5" to="/nosotros">Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="joha nav-link mx-5" to="/contacto">Contacto</Link>
          </li>
        </ul>

      </div>
    
      <div className="d-flex carrito-index me-2">
      <div className="dropdown dropstart">
        <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fa-solid fa-cart-shopping fa-xl carrito"></i>
        </a>
        <ul id="carrito-ul" className="dropdown-menu mx-2">
          <table id="lista-carrito" className="table">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          <div className="d.grid gap-2 d-md-block justify-content-center ms-1">
            <button id="vaciar-carrito" className="btn btn-primary">Vaciar carrito</button>
            <Link id="procesar-pedido" className="btn btn-danger" to='/carrito'>Procesar compra</Link>

          </div>
        </ul>
      </div>
    </div>
    </div>

    

  </nav>
</header>
  )
}

export default Navbar