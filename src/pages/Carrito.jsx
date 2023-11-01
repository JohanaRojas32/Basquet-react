import ItemCarrito from '../components/ItemCarrito'
import CarritoContext from '../context/CarritoContext'
import './Carrito.css'
import React, { useContext, useEffect } from 'react'

const Carrito = () => {
  const { 
    carrito, 
    cantidadTotalArticulosCarritoContext, 
    precioTotalArticulosCarritoContext,  
    guardarCarritoContext,
    precioTotalSinIvaCarritoContext,
    valorDelIVACarritoContext } = useContext(CarritoContext)



  useEffect(() => {
    document.title = 'NBA STORE - CARRITO'
  }, [])


  return (
    <section className="container my-5">
    <div className="row d-flex-justify-content-center">
      <div className="col-8">
       <div className="card mb-4 joha-carrito">
        <div className="card-header py-4">
          <h5 className="mb-0">Carrito -{cantidadTotalArticulosCarritoContext()}  artículos</h5>
        </div>

        <div className="card-body" id="lista-compra">
    {/*  Aca me traigo lo que tenog en el componente ItemCarrito.jsx (productos para comprar)*/}

      {
        carrito && carrito.map(item => (
          <ItemCarrito key={item.id} itemProducto={item}/>
        ))
      }
          

        </div>        
       </div>

       <div className="card my-4 joha-carrito">
        <div className="card-body tarjetas">
          <p><strong>Métodos de pago aceptados</strong></p>
          <img src="/img/tarjetas/visa.svg" alt="Visa" className="me-2"/>
          <img src="/img/tarjetas/mastercard.svg" alt="Mastercard" className="me-2"/>
          <img src="/img/tarjetas/hsbc.svg" alt="Hsbc" className="me-2"/>
          <img src="/img/tarjetas/paypal.svg" alt="Paypal" className="me-2"/>
        </div>
       </div>

      </div>

   

      <div className="col-4">
        <div className="card joha-carrito mb-4">
          <div className="card-header py-3">
            <div className="mb-0">Resumen carrito</div>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush carrito-lista">
              
              <li className="list-group-item d-flex justify-content-between aling-items-center border-0 ">
                Productos
                <span>{precioTotalSinIvaCarritoContext()} </span>
              </li>

                <li className="list-group-item d-flex justify-content-between aling-items-center border-0">
                  Envio
                  <span>Gratis</span>
                </li>

                
                <li className="list-group-item d-flex justify-content-between aling-items-center border-0">
                  <div>
                      <strong>IVA</strong>
                  </div>
                  <p><strong>{valorDelIVACarritoContext()}</strong></p>
            </li>

                  <li className="list-group-item d-flex justify-content-between aling-items-center border-0 ">
                    <div>
                      <strong>Total de la compra</strong>
                      <strong>IVA incluido</strong>
                    </div>
                    <p><strong>${precioTotalArticulosCarritoContext().toFixed(2)}</strong></p>
                  </li>
            </ul>

            <button type="button" className="btn carrito-boton btn-lg btn-block mt-4" onClick={guardarCarritoContext}>Comprar</button>

          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Carrito