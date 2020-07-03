import React from 'react';
import '../img/PortalMesero.css'
import ComponentsDataHours from '../ComponentsDataHours';
import MenuDesayuno from '../componentes/MenuDesayuno';

export const PortalMesero = () => {
  return (
    <div>
      <div className='franja'>
        <p id='nombreMesero'>Camila García Brito</p>
        <div id='diaPortalMesero'>

          <ComponentsDataHours />

        </div>
      </div>
      <div className='fondoPortalMesero'>
        <MenuDesayuno />
      </div>
    </div>
  )
}
