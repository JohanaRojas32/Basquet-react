import React, { useEffect, useState } from 'react'
import { useForms } from '../hooks/useForms'

const ItemCarrito = ({ item }) => {

  const [total, setTotal] = useState(item.precio * item.cantidad)



  const [producto, handleChange] = useForms({
    cantidad: item.cantidad
  })


  useEffect(() => {         // para que se cambie el calculo al mismo tiempo que incremento o decremento el valor del input
    let totalRecalculado = Number(item.precio * producto.cantidad).toFixed(2)
    setTotal(totalRecalculado)
  }, [producto.cantidad])





  return (
    <div className='row py-3 mb-3'>
      <div className="col-4 mb-1">
        <div className="bg-image rounded">
          <img className="w-100" src={`/img/${item.foto}`} alt={item.nombre} />
        </div>
      </div>

      <div className="col-6">
        <p><strong>${item.nombre}</strong></p>
        <p>{item.tipo}</p>
        <p>{item.calidad}</p>
        <p>{item.precio}</p>

        <a type="button" className=" fa-solid fa-trash-can text-danger btn-sm me-1 mb-2 "></a>

      </div>

      <div className="col-2">
        <input
          type="number"
          min="1"
          className="form-control text-center"
          placeholder="Cantidad"
          name="cantidad"
          value={producto.cantidad}        // producto.cantidad -> es el nro que se este generando cunado se cambia el input
          onChange={handleChange} />
        <p className="text-center mt-2">

          <strong className="precio-final">${total}</strong></p>
      </div>

    </div>
  )
}

export default ItemCarrito