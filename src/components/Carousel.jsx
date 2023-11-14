import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide joha-carousel" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">

        <img src="/img/carousel/cancha1.jpg " className="d-block w-100" alt="hombre y pelota"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Todos los Martes y viernes</h5>
          <p>Hasta 12 cuotas s/ interes con tarjetas seleccionadas</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="/img/carousel/carouselpelota3.jpg " className="d-block w-100" alt="chicos jugando en cancha"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Sábados y Domingos</h5>
          <p>15% off con transferencia o débito</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="/img/carousel/laker1.jpg" className="d-block w-100" alt="pelota molten"/>
        <div className="carousel-caption d-none d-md-block">
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel