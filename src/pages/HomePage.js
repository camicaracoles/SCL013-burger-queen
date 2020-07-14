import React from 'react';
import '../img/App.css';
import '../img/Inicio.css';
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import {Link} from 'react-router-dom';


export const HomePage = () => {

  return (
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div className='dia'>

            <ComponentsDataHours />

          </div>
          <Link to='/administrador'><button className='btnEntrada' >Administrador</button></Link>

          <Link to='/cocina'><button className='btnEntrada' >Cocina</button></Link>

          <Link to='/portalmesero'><button className='btnEntrada'>Mesonero</button></Link>

        </div>
      </div>

    </div>
  );
}
