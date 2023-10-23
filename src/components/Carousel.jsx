import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide joha-carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/img/carousel/cancha1.jpg " className="d-block w-100" alt="hombre y pelota"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Todos los Martes y viernes</h5>
          <p>Hasta 12 cuotas s/ interes con tarjetas seleccionadas</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/img/carousel/carouselpelota3.jpg " className="d-block w-100" alt="chicos jugando en cancha"/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Sábados y Domingos</h5>
          <p>15% off con transferencia o débito</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/img/carousel/laker1.jpg" className="d-block w-100" alt="pelota molten"/>
        <div className="carousel-caption d-none d-md-block">
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousel