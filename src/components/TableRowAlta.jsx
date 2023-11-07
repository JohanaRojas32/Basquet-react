import React, { useContext } from 'react'
import ProductosContext from '../context/ProductosContext'



const TableRowAlta = ( { producto, setProductoAEditar } ) => {

  const { eliminarProducto } = useContext(ProductosContext)





  return (
    <tr>
    <td>{producto.nombre}</td>
    <td>{producto.tipo}</td>
    <td>{producto.calidad}</td>
    <td>{producto.precio}</td>
    <td>{producto.foto}</td>
    <td>
      {/* Lo hicimos asi para poder reutilizar este boton despues en form */}
      <button className='btn btn-warning me-2'onClick={() => setProductoAEditar(producto)} >Modificar</button>
      <button className='btn btn-dark' onClick={() => eliminarProducto(producto.id)}>eliminar</button>
    </td>
  </tr>
  )
}

export default TableRowAlta