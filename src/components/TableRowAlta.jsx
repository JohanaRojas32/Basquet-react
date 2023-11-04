import React from 'react'



const TableRowAlta = ( { producto } ) => {



  return (
    <tr>
    <td>{producto.nombre}</td>
    <td>{producto.tipo}</td>
    <td>{producto.calidad}</td>
    <td>{producto.precio}</td>
    <td>{producto.foto}</td>
    <td>
      {/* Lo hicimos asi para poder reutilizar este boton despues en form */}
      <button className='btn btn-warning me-2'>Modificar</button>
      <button className='btn btn-dark'>eliminar</button>
    </td>
  </tr>
  )
}

export default TableRowAlta