import React from 'react';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container-servicios">
            <h1 className="Introduccion">Experiencia</h1>
            <hr/>
            <div className="row">
                {/* Primer elemento */}
                <div className="col-lg-4">
                <img className="bd-placeholder-img1 " width="140" height="240" src="/img/ffm.jpg" />
                    <h2>Árbitro de Fútbol</h2>
                    <div className="parrafos">
                        <p>-Hacer que el juego se lleve a cabo con la menor cantidad posibles de interferencias.</p>
                        <p>-Cuidar la integridad física de los jugadores.</p>
                        <p>-Aplicar las reglas del fútbol en un partido.</p>
                        <p>-Dar constancia de lo sucedido en el mismo.</p>
                        <p>-Conseguir que los jugadores jueguen limpio y sancionar a los que no.</p>
                    <p><a className="btn btn-secondary" href="https://www.rfef.es/comites/comite-tecnico-de-arbitros" role="button">Más Info &raquo;</a></p>
                    </div>
                </div>
                 {/* Segundo elemento */}
                <div className="col-lg-4">
                <img className="bd-placeholder-img2 " width="340" height="190" src="/img/ymca_logo.png" /> 
                    <h2 className= "edu"><br/>Educador</h2>
                      <div className="parrafos">
                        <p>-Diseñar y ejecutar las actividades de refuerzo escolar a desarrollar con los participantes del programa.</p>
                        <p>-Realizar la intervención directa con los destinatarios.</p>
                        <p>-Desarrollar un seguimiento individualizado de cada beneficiario, informando de los avances a las familias, tutores, y a CaixaProInfancia, el cuál es el principal fuente de financiamiento de estos programas.</p>
                        <p>-Evaluar el impacto y funcionamiento del programa.</p>
                        <p>-Coordinar su trabajo con su responsable.</p>
                    <p><a className="btn btn-secondary" href="https://www.ymca.es/" role="button">Más Info &raquo;</a></p>
                    </div>
                </div>
                 {/* Tercer elemento */}
                <div className="col-lg-4">
                <img className="bd-placeholder-img3" width="240" height="240" src="/img/WorldAlliance.png"/>
                    <h2>Agente de Cambio</h2>
                    <div className="parrafos">
                        <p>-Gobernanza Global.</p>
                        <p>-Agenda 2030 & Desarrollo sostenible.</p>
                        <p>-Liderazgo.</p>
                        <p>-Asuntos globales.</p>
                        <p>-Compromiso Cívico.</p>
                        <p>-Refugiados.</p>
                        <p>-Salud Mental.</p>
                        <p>-Medio Ambiente.</p>
                        <p>-Planeamiento Estratégico.</p>
                        <p>-Gestíón de Proyectos</p>
                        <p>-Proyecto final Agente de Cambio:<br/>"La prevención de la ludopatía" </p>
                    <p><a className="btn btn-secondary" href="https://www.ymca.int/" role="button">Más Info &raquo;</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
    
  }
 
}
 
export default Servicios;