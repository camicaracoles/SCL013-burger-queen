import React from 'react';


class EntradaMesero extends React.Component {

    render() {
        return (
            <React.Fragment>
               <div className='contenedor'>
                   <p id='titutlo'>Ingrasar pedido</p>
                   <div id='tipoMenu'>
                       <button>Menú Desayuno</button>
                       <button>Menú Del Día</button>
                   </div>
                   <div id='pedidosParaServir'>
                       <button>Pedidos listos para servir</button>
                       <div></div>
                   </div>
                   <button></button>
                   <button>Lista pedidos servidos</button>
                   <button>Listta pedidos pagados</button>
                   <button>Cerrar día</button>
               </div>
               
            </React.Fragment >

        );
    }
}

export default EntradaMesero;