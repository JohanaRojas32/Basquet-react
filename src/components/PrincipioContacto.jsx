import React from 'react'
import { Link } from 'react-router-dom'

const PrincipioContacto = () => {
  return (
<section>
<div className="row my-5 titulo-destacado">
    <h2 className="mb-3">¿En qué podemos ayudarte?</h2>
    <h5>Podés comunicarte con nosotros de Lunes a Sábados de 9 a 18hs</h5>
    <p>Escribiéndonos a nuestro WhatsApp <Link to="https://web.whatsapp.com/">+541128945732</Link>
      <br/>
      o mandando un e-mail a ésta dirección: <Link to="#">joohanarojas96@gmail.com</Link>
    </p>
  </div>


<div className=" col-7  titulo-destacado"  >
  <h5>También podés dejarnos tus datos y un asesor se comunicará contigo:</h5>
</div>

</section>
  )
}

export default PrincipioContacto