import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';
 
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
 
// Páginas del Sitio Web
import Home from './componentes/home/Home'; 
import Trabajo from './componentes/trabajo/Trabajo';
import Contacto from './componentes/contacto/Contacto';
 
 
// Configuración de la rutas del Sitio Web 
ReactDOM.render(
    <Router>
     <div>
        <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/trabajo' component={Trabajo} />
         <Route exact path='/contacto' component={Contacto} /> 
       	</Switch>
     </div>
    </Router>,document.getElementById('root')
);
 
serviceWorker.unregister();