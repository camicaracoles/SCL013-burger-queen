import React from 'react';
import '../img/PortalMesero.css'
import ComponentsDataHours from '../ComponentsDataHours';
import TomarPedido from '../pages/TomarPedido';
import { getUserFromLocalStorage } from "../helpers/session-service";
import { logout } from './cerrarSesion'
//import MenuDelDia from '../componentes/MenuDelDia'

export const PortalMesero = () => {
  const userData = getUserFromLocalStorage();

  return (
    <div>
      <div className='franja'>
        <p id='nombreMesero'>{userData.name}</p>
        <div id='diaPortalMesero'>
          <ComponentsDataHours />
        </div>
      </div>
      <div className='fondoPortalMesero'>
        <button onClick={logout}>
          Cerrar sesión
        </button>
        <TomarPedido />
      </div>
    </div>
  )
}
