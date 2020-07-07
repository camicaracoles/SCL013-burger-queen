import React from 'react';
import '../img/PortalMesero.css'


class EntradaMesero extends React.Component {
        
    render() {
        return (
            <div className='contenedorEntradaMesero'>
                <p id='titutloEntradaMesero'>Ingrasar pedido</p>
                <div id='tipoMenu'>
                <button onClick={this.navegarMenuDesayuno} className='btnsMenu'>Menú Del Desayuno</button>
                    <button onClick={this.navegarMenuDia} className='btnsMenu'>Menú Del Día</button>
                </div>
                <div className='pedidosParaServir'>
                <button onClick={this.navegarPedidosListos} className='opcionesMesero'>Pedidos listos para servir</button>
                    <div id='alerta'></div>
                </div>
                <button onClick={this.navegarPedidosServidos} className='opcionesMesero'>Lista pedidos servidos</button>
                <button onClick={this.navegarPedidosPagados} className='opcionesMesero'>Lista pedidos pagados</button>
                <button className='cerrardia'>Cerrar día</button>
            </div>

        );
    }
}

export default EntradaMesero;