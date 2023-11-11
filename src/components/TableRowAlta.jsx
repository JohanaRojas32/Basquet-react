import React, { useContext } from 'react'
import ProductosContext from '../context/ProductosContext'
import Swal from 'sweetalert2'



const TableRowAlta = ( { producto, setProductoAEditar } ) => {

  const { eliminarProducto } = useContext(ProductosContext)


  const handleAlertaEliminar = (id) => {

    const alertaEliminarPRod = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    alertaEliminarPRod.fire({
      title: "¿Seguro que quiere eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       // console.log('se esta eliminando el producto')
       eliminarProducto(producto.id)

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        return
        //console.log('esta retornando')
     
      }
    });





  }




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
      <button className='btn btn-dark' onClick={handleAlertaEliminar}>eliminar</button>
    </td>
  </tr>
  )
}

export default TableRowAlta