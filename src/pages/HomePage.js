import React from 'react';
import '../img/App.css'
import ComponentsDataHours from '../ComponentsDataHours';

export const HomePage = () =>{

  return(
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div id='dia'>

      <ComponentsDataHours/>

          </div>
          <button className='btn btn-outline-warning' >Administrador</button>

          <button className='btn btn-outline-warning' >Cocina</button>

          <button className='btn btn-outline-warning' >Mesonero</button>

        </div>
      </div>

    </div>
  );
}
