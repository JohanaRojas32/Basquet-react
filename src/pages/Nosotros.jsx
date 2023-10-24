import './Nosotros.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {

  useEffect(() => {
    document.title = 'NBA STORE - NOSOTROS'
  }, [])

  return (
    <div className="row mt-5">

    <div className="col-5">
      <div className="nosotros-imagen">
        <img className="img fluid col-12 pb-4" src="/img/acerca-de-prueba1.webp" alt="Sobre nosotros"/>
      </div>
    </div>


    <div className="col-7" id="card-productos" >
      <h1 className="titulo-destacado">Sobre <span>Nosotros:</span></h1>
      <h3 className="titulo-destacado">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, a.</h3>
      <p className="titulo-destacado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, fuga distinctio! Cumque accusamus fugiat
        expedita in ullam ut temporibus a vel voluptatem nobis. Exercitationem, accusantium?</p>
      <p className="titulo-destacado">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic excepturi molestias, natus dolorem
        explicabo aliquam. Quis.</p>

      <p className="titulo-destacado">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum deleniti illum distinctio eius doloremque?
        Dicta quos voluptas officia, soluta quas iure animi optio perferendis sed nihil, nobis adipisci temporibus,
        inventore omnis impedit culpa aperiam nemo iste praesentium blanditiis! Vel aliquid, tempora quis vitae
        sapiente voluptatum unde assumenda deserunt dolore maiores nostrum velit ut. Aspernatur tenetur laborum
        eveniet enim culpa placeat, aut dolore facilis. Modi commodi sed veniam voluptates consectetur veritatis.
        Dolorum, reprehenderit! Ducimus, nisi alias!</p>

      <div className="d-flex justify-content-center nosotros-iconos">
        <ul>
          <li><Link to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-square fa-3x fb"></i></Link></li>
          <li><Link to="https://instagram.com" target="_blank" className="text-reset"><i
                className="fa-brands fa-instagram-square fa-3x ig"></i></Link></li>
          <li><Link to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter-square fa-3x tw"></i></Link></li>
          <li><Link to="mailto:joohanarojas.96@gmail.com" target="_blank"><i className="fa-regular fa-envelope fa-3x im"></i></Link></li>
        </ul>
      </div>

    </div>


  </div>
  )
}

export default Nosotros