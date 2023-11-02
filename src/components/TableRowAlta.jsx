import React from 'react'



const TableRowAlta = () => {



  return (
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      {/* Lo hicimos asi para poder reutilizar este boton despues en form */}
      <button className='btn btn-warning me-2'>Modificar</button>
      <button className='btn btn-dark'>eliminar</button>
    </td>
  </tr>
  )
}

export default TableRowAlta