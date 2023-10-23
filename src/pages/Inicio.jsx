import Card from '../components/Card'
import Carousel from '../components/Carousel'
import './Inicio.css'
import React from 'react'

const Inicio = () => {
  return (
    <>
     <section className="row my-5 d-flex justify-content-center">
    
    <Carousel />
    <Card />
  
    </section>
    </>
  )
}

export default Inicio