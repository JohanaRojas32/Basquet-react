
import { useState } from 'react'
import FormAlta from '../components/FormAlta'
import TableAlta from '../components/TableAlta'



const Alta = ( ) => {

  const [productoAEditar, setProductoAEditar] = useState(null)       // esto es para el producto a modificar


  return (
    <>
    <h1 className='display-2 mt-3'>Alta de productos</h1>

    <FormAlta productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar}/>

    <TableAlta setProductoAEditar={setProductoAEditar} />

    </>
  )
}

export default Alta