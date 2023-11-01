import React, { useContext, useEffect, useState } from 'react'
import { useForms } from '../hooks/useForms'
import CarritoContext from '../context/CarritoContext'

const ItemCarrito = ({ itemProducto }) => {

  const { cambiarCantidadCarritoContext } = useContext(CarritoContext)

  const [total, setTotal] = useState(itemProducto.precio * itemProducto.cantidad)



  const [cantidadInput, handleChange] = useForms({
    cantidad: itemProducto.cantidad
  })

  

  useEffect(() => {            // para que se cambie el calculo al mismo tiempo que incremento o decremento el valor del input
    let totalRecalculado = Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
    setTotal(totalRecalculado)
    itemProducto.cantidad = cantidadInput.cantidad         //al itemProducto le guardamos la nueva cantidad!!
    cambiarCantidadCarritoContext(itemProducto)
  }, [cantidadInput.cantidad])    //referencia





  return (
    <div className='row py-3 mb-3'>
      <div className="col-4 mb-1">
        <div className="bg-image rounded">
          <img className="w-100" src={`/img/${itemProducto.foto}`} alt={itemProducto.nombre} />
        </div>
      </div>

      <div className="col-6">
        <p><strong>{itemProducto.nombre}</strong></p>
        <p>{itemProducto.tipo}</p>
        <p>{itemProducto.calidad}</p>
        <p>{itemProducto.precio}</p>

        <a type="button" className=" fa-solid fa-trash-can text-danger btn-sm me-1 mb-2 "></a>

      </div>

      <div className="col-2">
        <input
          type="number"
          min="1"
          className="form-control text-center"
          placeholder="Cantidad"
          name="cantidad"
          value={cantidadInput.cantidad}        // producto.cantidad -> es el nro que se este generando cunado se cambia el input
          onChange={handleChange} />
        <p className="text-center mt-2">

          <strong>${total}</strong></p>
      </div>

    </div>
  )
}

export default ItemCarrito