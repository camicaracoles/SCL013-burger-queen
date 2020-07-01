import React from 'react';


import ComponentsDataHours from '../ComponentsDataHours';

export const HomePage = () =>{

  return(
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div id='dia'>

      <ComponentsDataHours/>

          </div>
          <input id='usuarioLogin' type='text' placeholder='Usuario'></input>
          <input id='contraseñaLogin' type='text' placeholder='Contraseña'></input>
          <button id='iniciar'>Iniciar</button>
        </div>
      </div>

    </div>
  );
}
