import React from 'react';
import './img/App.css';


function App() {
  return (
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div id='dia'>
            <p className='dia'>28-06-2020</p>
            <p className='hora'>09:00</p>
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
