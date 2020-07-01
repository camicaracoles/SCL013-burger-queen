import React from 'react';
import './img/App.css';
import ComponentsDataHours from './ComponentsDataHours.js';

function App() {

  return (
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div id='dia'>
            <ComponentsDataHours />

          </div>
          <input id='usuarioLogin' type='text' placeholder='Usuario'></input>
          <input id='contraseñaLogin' type='text' placeholder='Contraseña'></input>
          <button id='iniciar'>Iniciar</button>
        </div>
      </div>

    </div>
  );
}
export default App;
