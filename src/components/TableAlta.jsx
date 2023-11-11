import React, { useContext } from 'react'
import TableRowAlta from './TableRowAlta'
import ProductosContext from '../context/ProductosContext'

const TableAlta = ( {setProductoAEditar } ) => {

const { productos } = useContext(ProductosContext)


  return (
   <>
   <h2 className='mt-5 color-titulo'>Tabla de productos</h2>

<table className="table table-striped mb-2">
   <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Calidad</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
    {
          productos && productos.map(producto => (
                <TableRowAlta key={`${producto.id}-${producto.nombre}`} producto={producto} setProductoAEditar={setProductoAEditar} />
          ))
    }
                </tbody>
            </table>
   
   </>
  )
}

export default TableAlta