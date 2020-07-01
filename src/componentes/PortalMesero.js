import React from 'react';


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
            
               </div>
            </React.Fragment >

        );
    }
}

export default PortalMesero;