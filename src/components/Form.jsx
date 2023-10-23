

const Form = () => {
  return (
 


     <div className="mb-3">
    <form action="https://formspree.io/f/xpzgwgeb" method="post" target="_blank">
    <label  className="form-label">Nombre:</label>
    <input type="text" className="form-control joha-form"  name='name'/>

    <label  className="form-label">Apellido:</label>
    <input type="text" className="form-control joha-form"  name='surname'/>

    <label  className="form-label">E-mail:</label>
    <input type="email" className="form-control joha-form"  name='email'/>
  
    <label  className="form-label">Motivo:</label>
    <textarea className="form-control joha-form"  rows="3"></textarea>

    <button className="mt-2">Enviar</button>
  </form>
  </div>
  

  )
}

export default Form