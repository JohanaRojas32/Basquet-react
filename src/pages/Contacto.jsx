import './Contacto.css'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import PrincipioContacto from '../components/PrincipioContacto'
import { useEffect } from 'react'

const Contacto = () => {

  useEffect(() => {
    document.title = 'NBA STORE - CONTACTO'
  }, [])

  return (

    <>
     
      <PrincipioContacto />

    
     <Form />
     

    </>


  )
}

export default Contacto