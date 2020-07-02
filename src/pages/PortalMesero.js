import React from 'react';
import '../img/PortalMesero.css'
import ComponentsDataHours from '../ComponentsDataHours';

export const PortalMesero = () => {
  return (
    <div>
      <div className='franja'>
        <p id='nombreMesero'>Camila García Brito</p>
        <div id='dia'>

          <ComponentsDataHours />

        </div>
      </div>
      
    </div>
  )
}
