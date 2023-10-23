import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="container-fluid joha-footer">

  <div className="d-flex justify-content-center">
    <ul className="joha iconos-footer">
      <li><Link to="https://facebook.com" className="text-reset"><i className="fa-brands fa-facebook-square fa-xl fb"></i></Link></li>
      <li><Link to="https://instagram.com"><i className="fa-brands fa-instagram-square fa-xl ig"></i></Link></li>
      <li><Link to="https://twitter.com"><i className="fa-brands fa-twitter-square fa-xl tw"></i></Link></li>
    </ul>
  </div>

  <div className="d-flex justify-content-center titulo-destacado">
<p>2013-2021 All rigth reserved - Anatole France 37800 - Buenos Aires</p>
</div>

<div className="d-flex justify-content-center">
<div className="row titulo-destacado">
  <div className="col-6">
    
    <p><i className="fa-brands fa-whatsapp me-1"></i>1128945732</p>
  </div>
  <div className="col-6">
    <p>joohanarojas@gmail.com</p>
  </div>
</div>
</div>




</footer>

  )
}

export default Footer