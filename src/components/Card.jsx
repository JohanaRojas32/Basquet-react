import { useContext } from "react"
import CarritoContext from "../context/CarritoContext"




const Card = ( { producto } ) => {
//ME TRAIGO EL agregarCarritoContext:
const { agregarCarritoContext } = useContext(CarritoContext)



  const handleComprar = (producto) => {
    console.log('comprando->', producto)
    agregarCarritoContext(producto)
  }


  return (
  
    <div className="card col-3 m-2 shadow-sm joha-card">
      <img src={`/img/${producto.foto}`} className="card-img-top" alt="pelota wilson"/>
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