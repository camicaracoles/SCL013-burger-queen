import React from 'react';
import EntradaMesero from './componentes/EntradaMesero';

class PortalMesero extends React.Component {

    render() {
        return (
            <React.Fragment>
               <div className='franja'>
                   <p id='nombreMesero'></p>
                   <p id='fecha'></p>
                   <p id='hora'></p>
               </div>
               <div className='fondo'>
                  <EntradaMesero />
               </div>
            </React.Fragment >

        );
    }
}

export default PortalMesero;