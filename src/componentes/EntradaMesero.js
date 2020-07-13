import React from 'react';
import '../img/PortalMesero.css'


class EntradaMesero extends React.Component {

    render() {
        return (
            <div className='contenedorEntradaMesero'>
                <p id='tituloEntradaMesero'>Ingrasar pedido</p>
                <div id='tipoMenu'>
                    <button onClick={() => this.props.handler('menuDesayuno')} className='btnsMenu'>Menú Del Desayuno</button>
                    <button onClick={() => this.props.handler('menuDia')} className='btnsMenu'>Menú Del Día</button>
                </div>
                <div className='pedidosParaServir'>
                    <button onClick={() => this.props.handler('pedidosListos')} className='opcionesMesero'>Pedidos listos para servir</button>
                    <div id='alerta'></div>
                </div>
                <button onClick={() => this.props.handler('pedidosServidos')} className='opcionesMesero'>Lista pedidos servidos</button>
                <button onClick={() => this.props.handler('pedidosPagados')} className='opcionesMesero'>Lista pedidos pagados</button>
                <button className='cerrardia'>Cerrar día</button>
            </div>

        );
    }
}

export default EntradaMesero;
