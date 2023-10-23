import React from 'react'

const Card = () => {
  return (
  
   
    <div className="card col-3 m-2 shadow-sm joha-card">
      <img src="/img/wilson-evolution2.webp" className="card-img-top" alt="pelota wilson"/>
      <div className="card-body">
        <h5 className="card-title">Pelota Wilson Evolution</h5>
        <ul className="list-unstyled mt-3 mb-4">
          <li className="list-group-item tipo">Cuero - Interiores</li>
          <li className="list-group-item calidad">Original</li>
          <li className="list-group-item precio">35.000</li>
        </ul>
        <a href="#" className="btn agregar-carrito" data-id="1">Comprar</a>
      </div>
    </div>


  )
}

export default Card