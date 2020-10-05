import React from "react";

class Slider extends React.Component{
    render(){

        return(
            <div id="slider" className="carrousel slide" data-ride="carrousel">
            <div className="carrousel-inner">
                <h1 className="Introduccion">Presentación</h1>
                    <div className="carrousel-item active">
                        <div className="img-fluid">
                            <img src="/img/IMG_7153.jpg" height="500px" width="400px"/>
                            <img src="/img/Cit.jpg.jpg" height="370px" width="400px"/>
                            <img src="/img/HiddenHollowCamp.jpg.jpg" height="340px" width="400px"/>
                            <img src="/img/YouthWorkers.jpg" height="340px" width="400px"/>
                            <img src="/img/LeyEducaciónUNICEFEspaña.jpg" height="340px" width="400px"/>    
                        </div>
                        <p>
                        🙋🏽‍♂️Hola! Soy Yaser Haddad, tengo 20 años y estoy buscando
                         mi primera experiencia profesional como programador/desarrollador web.
                          Para que me conozcan un poco, me gustaría contarles acerca de algunas 
                          de las experiencias que he tenido a lo largo de mi vida.
                        <br/>
                        <br/>
                        En 2016, recibí una Beca Erasmus+ para irme a Micheltstadt (Alemania)
                         a participar en el Programa Youth Worker, basándose en la puesta en práctica
                         de habilidades, capacidades y competencias en liderazgo. Además, abordamos
                         distintas dificultades que afectan a los jóvenes en la actualidad y cómo
                         actúan ante esta situación los distintos países.
                         <br/>
                         <br/>
                         En 2017, trabajé con la Plataforma de Infancia de España como representante
                         juvenil frente al Comité de los Derechos de los niños/as y jóvenes de las
                         Naciones Unidas en Ginebra (Suiza). Mi función era defender el informe
                         mencionado en el apartado de “Proyectos”. Los temas que preparé para mi
                         intervención fueron principalmente discapacidad, salud y bienestar.
                         <br/>
                         <br/>
                        Después de la Defensa de los Derechos de los niños/as y jóvenes,
                        obtuve una beca por parte de YMCA para el programa CIT en Pensylvannia
                        (Estados Unidos). Tuvimos una formación durante dos semanas en la que
                        tratamos HHSS, liderazgo y trabajo en equipo. Tras esta formación, me
                        enviaron a un Campamento en OHIO llamado Hidden Hollow Camp durante un
                         mes donde potencié mis habilidades y destrezas sociales trabajando como
                        junior counselor.
                        <br/>
                        <br/>
                        En 2018, entré a formar parte de la Escuela de Liderazgo de Madrid,
                        donde nos proporcionar las herramientas necesarias para favorecer un cambio
                        en nuestro entorno.
                        <br/>
                        <br/>
                        En 2019, opté por presentarme como candidato a representante de los jóvenes
                        en el Consejo Asesor de YMCA. Finalmente obtuve dicho puesto y tuve la 
                        oportunidad de aportar y colaborar en la toma de decisiones de la entidad.
                        <br/>
                        <br/>
                        En 2019, participé en la cumbre climática de Madrid en representación
                        de la World Alliance of YMCAS. (COP25 Naciones Unidas)
                        <br/>
                        <br/>
                        En la actualidad he optado por centrarme en mi formación como programador
                        y continuar mi aprendizaje en los diferentes lenguajes de programación,
                        frameworks y servidores, entre ellos los más demandados en los últimos años. 
                        <br/>
                        </p>
                    </div>
                    
                    <div className="carrousel-item">
                        <div className="img-fluid2">
                            <img src="/img/Cop25.jpg" height="370px" width="500px"/>
                            <img src="/img/EscuelaLideresMadrid.jpg" height="370px" width="500px"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;