import Card from '../components/Card'
import Carousel from '../components/Carousel'
import ProductosContext from '../context/ProductosContext'
import './Inicio.css'
import React, { useContext, useEffect } from 'react'

const Inicio = () => {
//traigo el context de productos:
const {productos} = useContext(ProductosContext)


useEffect(() => {
  document.title = 'NBA STORE - INICIO'
}, [])



  return (
    <>
     <section className="row my-5 d-flex justify-content-center">
    
    <Carousel />

    <h2 className='my-5 titulo-destacado text-center'> Conocé todos nuestros productos</h2>

   
   { 
   productos && productos.map(producto => (
    <Card key={producto.id} producto={producto}/>
   ))
   }
  
    </section>
    </>
  )
}

export default Inicio