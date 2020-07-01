import React from 'react';
import './img/App.css';
import PortalMesero from './PortalMesero';



function App() {

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;
  let day  = today.getDate();
  day = (day < 10 ? "0" : "") + day;
  let hour = today.getHours();
   hour = (hour < 10 ? "0" : "") + hour;
  let  min  = today.getMinutes();
    min = (min < 10 ? "0" : "") + min;
 // let sec  = today.getSeconds();
    //sec = (sec < 10 ? "0" : "") + sec;

  return (
    <div className="App">

      <div className='fondo'>
        <div id='contenedorLogin'>
          <div id='dia'>
  <p className='dia'> { year + '-' + month + '-' + day }</p>
  <p className='hora'>{ hour + ':' + min }</p>
          </div>
          <input id='usuarioLogin' type='text' placeholder='Usuario'></input>
          <input id='contraseñaLogin' type='text' placeholder='Contraseña'></input>
          <button id='iniciar'>Iniciar</button>
        </div>
      </div>
      <section>
        <PortalMesero />
      </section>

    </div>
  );
}
export default App;
