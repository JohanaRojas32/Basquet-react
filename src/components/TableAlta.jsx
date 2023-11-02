import React from 'react'
import TableRowAlta from './TableRowAlta'

const TableAlta = () => {
  return (
   <>
   <h2 className='mt-5'>Tabla de productos</h2>

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
                <TableRowAlta />
    }
                </tbody>
            </table>
   
   </>
  )
}

export default TableAlta