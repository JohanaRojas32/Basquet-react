import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as bootstrap from 'bootstrap'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Carrito from './pages/Carrito'
import NoEncontrada from './pages/NoEncontrada'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <main className='container'>
    <Routes>
        <Route path='/'  element={<Inicio/>} />
        <Route path='/nosotros'  element={<Nosotros/>} />
        <Route path='/contacto'  element={<Contacto/>} />
        <Route path='/carrito'  element={<Carrito/>} />
        <Route path='*'  element={<NoEncontrada/>} />

      </Routes>

    </main>
    </BrowserRouter>

  </React.StrictMode>,
)
