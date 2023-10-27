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
   <td>
    <img src={item.img} alt={item.nombre} width="100"/>
</td>
<td>{item.nombre}</td>
<td>{item.precio}</td>
<td>
    <button className="borrar-producto fas fa-times-circle btn-borrar" onClick={() => handleEliminar(item.id)} ></button>
</td>
</tr>
    
  )
}

export default CargaCarritoInicio