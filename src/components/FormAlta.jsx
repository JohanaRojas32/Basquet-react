import React, { useContext, useEffect, useState } from 'react'
import ProductosContext from '../context/ProductosContext'



const FormularioInicial = {
    "id": null,
    "nombre": '',
    "tipo": '',
    "calidad": '',
    "precio": '',
    "foto": '',
}


const FormAlta = ({ productoAEditar }) => {

  const [formAlta, setFormAlta] = useState(FormularioInicial)

  const {agregarProducto} = useContext(ProductosContext)



  useEffect(() => {
    productoAEditar ? setFormAlta(productoAEditar) : setFormAlta(FormularioInicial)
  }, [productoAEditar])
  



  const handleChange = (e) => {
    setFormAlta({
      ...formAlta,    //lo que ya tenia mas lo que se esta escribiendo en el input
      [e.target.name]: e.target.value
    })
    console.log(formAlta)
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    if (formAlta.id === null) {
      agregarProducto(formAlta)
    } else {
     console.log('tengo que hacer algo para actualizar')
    }
  }




  return (
    <> 

    <form className='mt-3' onSubmit={handleSubmit} >
    <input
      type="text"
      name='nombre'
      placeholder='Ingrese el nombre'
      onChange={handleChange}
      value={formAlta.nombre}
       />

    <input
      type="text"
      name='tipo'
      placeholder='Ingrese el tipo'
      onChange={handleChange}
      value={formAlta.tipo}
    />

<input
      type="text"
      name='calidad'
      placeholder='Ingrese la calidad'
      onChange={handleChange}
      value={formAlta.calidad}
    />

<input
      type="number"
      name='precio'
      placeholder='Ingrese el precio'
      onChange={handleChange}
      value={formAlta.precio}
    />

<input
      type="text"
      name='foto'
      placeholder='Ingrese la URL de imagen'
      onChange={handleChange}
      value={formAlta.foto}
    />

    <button type='submit' className='btn btn-success mx-3'>Enviar</button>
    <button type='reset' className='btn btn-dark' >Reset</button>
   </form>

   </>

  )
}

export default FormAlta