import React from 'react'
import { useContext } from 'react'

const CargaCarritoInicio = ( {item}) => {
 // const first = useContext(second)
  
    return (
    
    <tr>
   <td>
    <img src={item.img} alt={item.nombre} width="100"/>
</td>
<td>{item.nombre}</td>
<td>{item.precio}</td>
<td>
    <button className="borrar-producto fas fa-times-circle btn-borrar" ></button>
</td>
</tr>
    
  )
}

export default CargaCarritoInicio