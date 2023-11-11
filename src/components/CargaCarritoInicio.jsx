import './CargaCarritoInicio.css'
import React from 'react'
import { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'

const CargaCarritoInicio = ( {item}) => {
  const { eliminarProductoCarritoContext } = useContext(CarritoContext)
  
  const handleEliminar = (id) => {
    eliminarProductoCarritoContext(id)
  }


    return (
    
    <tr>
   <td className='fondo-carrito joha'>
    <img src={`/img/${item.foto}`} alt={item.nombre} width="100"/>
</td>
<td className='fondo-carrito joha'>{item.nombre}</td>
<td className='fondo-carrito joha'>{item.precio}</td>
<td className='fondo-carrito joha'>
    <button className="borrar-producto fas fa-times-circle btn-borrar" onClick={() => handleEliminar(item.id)} ></button>
</td>
</tr>
    
  )
}

export default CargaCarritoInicio