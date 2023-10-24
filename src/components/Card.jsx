

const Card = ( { producto } ) => {

  const handleComprar = (producto) => {
    console.log('comprando->', producto)
  }


  return (
  
    <div className="card col-3 m-2 shadow-sm joha-card">
      <img src={producto.img} className="card-img-top" alt="pelota wilson"/>
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <ul className="list-unstyled mt-3 mb-4">
          <li className="list-group-item tipo">{producto.tipo}</li>
          <li className="list-group-item calidad">{producto.calidad}</li>
          <li className="list-group-item precio">{producto.precio}</li>
        </ul>
        <button className="btn agregar-carrito" onClick={() => handleComprar(producto)}>Comprar</button>
      </div>
    </div>


  )
}

export default Card