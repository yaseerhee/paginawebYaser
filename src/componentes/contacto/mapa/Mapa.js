import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
            <iframe className= "embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48682.91464989383!2d-3.76942139070923!3d40.305015527464995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42209a1ebb8201%3A0x20c3fa90b7e442fc!2sGetafe%2C%20Madrid!5e0!3m2!1ses!2ses!4v1601239367067!5m2!1ses!2ses"></iframe>
        </div>
 
    )
    
  }
 
}
 
export default Mapa;