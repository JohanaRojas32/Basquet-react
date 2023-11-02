import React from 'react'



const FormularioInicial = {
    "id": null,
    "nombre": '',
    "tipo": '',
    "calidad": '',
    "precio": '',
    "foto": ''
}


const FormAlta = () => {
  return (
    <> 

    <form className='mt-3' >
    <input
      type="text"
      name='nombre'
      placeholder='Ingrese el nombre'
       />

    <input
      type="text"
      name='tipo'
      placeholder='Ingrese el tipo'
    />

<input
      type="text"
      name='calidad'
      placeholder='Ingrese la calidad'
    />

<input
      type="number"
      name='precio'
      placeholder='Ingrese el precio'
    />

<input
      type="text"
      name='img'
      placeholder='Ingrese la URL de imagen'
    />

    <button type='submit' className='btn btn-success mx-3'>Enviar</button>
    <button type='reset' className='btn btn-dark' >Reset</button>
   </form>

   </>

  )
}

export default FormAlta