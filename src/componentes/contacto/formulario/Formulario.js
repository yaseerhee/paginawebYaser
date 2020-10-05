import React from 'react';
import '../../../App.css';
 
class Formulario extends React.Component {
 
  render() {
 
    return (
 
        <form className="mb-5" id="contact-form" action="enviar.php" method="post">
 
          <div className="form-group">
            <label htmlFor="nya" className="negrita">Nombres y Apellidos</label>
            <input type="text" name="nombre" className="form-control name-field" required />            
          </div>
 
          <div className="form-group">
            <label htmlFor="email" className="negrita">Email</label>
            <input type="email" name="email" className="form-control mail-field" id="mail" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje" className="negrita">Mensaje</label>
            <textarea name="mensaje" className="form-control" id="message" rows="8" required></textarea>
          </div>
 
          <button type="submit" className="btn btn-primary">Enviar</button>
 
        </form>
 
    )
    
  }
 
}
 
export default Formulario;