import React from 'react';
import '../img/App.css';
import '../img/Inicio.css';
import ComponentsDataHours from '../ComponentsDataHours';
import {Link} from 'react-router-dom';


export const HomePage = () => {

  return (
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div id='dia'>

            <ComponentsDataHours />

          </div>
          <button className='btnHome' >Administrador</button>

          <button className='btnHome' >Cocina</button>

          <Link to='/portalmesero'><button className='btnHome'>Mesonero</button></Link>

        </div>
      </div>

    </div>
  );
}
