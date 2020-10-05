import React from "react";

class Detalles extends React.Component{

    render(){

        return(
            <div className="container-det">
                <h1 className="Introduccion">Trabajo</h1>
                <div className="row">
                    <div className="col-md-4">
                        <strong><h2>Objetivo</h2></strong>
                        <p>
                            <ul>
                                <li>Desarrollar mi potencial como programador.</li>
                                <li>Trabajar en un equipo con metodología ágil.</li>
                                <li>Identificar y solucionar problemas en los proyectos.</li>
                                <li>Hacer la vida más fácil a los usuarios.</li>
                                <li>Motivar y apoyar al equipo de trabajo.</li>
                                <li>Ayudar en la toma de decisiones, siempre y cuando me lo permitan.</li>
                                <li>Participar de forma activa y positiva en los proyectos.</li>
                                <li>Evaluar los pros y contras del proyecto, tras la finalización de este, buscando soluciones a los fallos que hayamos tenido.</li>
                            </ul>    
                        </p>
                    </div>
                    
                    <div className="col-md-4">
                        <strong><h2>Aportar</h2></strong>
                        <p>
                        <ul>
                                <li>Aprendizaje constante.</li>
                                <li>Experiencia en equipos de trabajo con metodología ágil (SCRUM).</li>
                                <li>Desarrollo en Back-End (Java, nodeJs, PHP , mySql y Python).</li>
                                <li>Desarrollo en Front-End (JavaScript, html5, css3, ReactJs, express, BootStrap, JQuery, Ajax, Sass/less y wordpress).</li>
                                <li>Análisis de datos (PowerBi y Editor de PowerQuery).</li>
                                <li>Manejo de control de versiones Git (github).</li>
                        </ul>
                        </p>
                    </div>
                    

                    <div className="col-md-4">
                        <strong><h2>Aptitudes</h2></strong>
                        <p>
                            <ul>
                                <li>Capacidad para desarrollar ideas.</li>
                                <li>Productividad.</li>
                                <li>Capacidad de análisis.</li>
                                <li>Buena comunicación.</li>
                                <li>Compromiso hacia la compañía.</li>
                                <li>Capacidad de trabajar en equipo.</li>
                                <li>Gran gestión del estrés.</li>
                                <li>Capacidad de adaptación a equipos de trabajo.</li>
                                <li>Consigo los objetivos que me propongo.</li>
                                <li>Sé identificar y resolvar problemas.</li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        )
    }


}

export default Detalles;