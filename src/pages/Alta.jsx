import { useState, useEffect } from 'react'
import FormAlta from '../components/FormAlta'
import TableAlta from '../components/TableAlta'



const Alta = ( ) => {

  const [productoAEditar, setProductoAEditar] = useState(null)       // esto es para el producto a modificar


  useEffect(() => {
    document.title = ' NBA STORE - ALTA'
  }, [])
  


  return (
    <>
    <h1 className='display-2 mt-3 color-titulo'>Alta de productos</h1>

    <FormAlta productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar}/>

    <TableAlta setProductoAEditar={setProductoAEditar} />

    </>
  )
}

export default Alta