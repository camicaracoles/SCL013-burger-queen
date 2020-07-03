import React from 'react';
import '../img/PortalMesero.css'


class EntradaMesero extends React.Component {

    render() {
        return (
            <div className='contenedorEntradaMesero'>
                <p id='titutloEntradaMesero'>Ingrasar pedido</p>
                <div id='tipoMenu'>
                    <button className='btnsMenu'>Menú Desayuno</button>
                    <button className='btnsMenu'>Menú Del Día</button>
                </div>
                <div className='pedidosParaServir'>
                    <button className='opcionesMesero'>Pedidos listos para servir</button>
                    <div id='alerta'></div>
                </div>
                <button className='opcionesMesero'>Lista pedidos servidos</button>
                <button className='opcionesMesero'>Listta pedidos pagados</button>
                <button id='cerrardia'>Cerrar día</button>
            </div>


        );
    }
}

export default EntradaMesero;