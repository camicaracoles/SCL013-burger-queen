import React from 'react';
import '../img/PedidosServidos.css';



class PedidosListos extends React.Component {

    render() {
        return (
            <div className='contenedorListaParaServir'>
                <div className='contenedorAlerta'>
                    <p className='tituloMenu'>Pedidos Listos Para Servir</p>
                    <div id='alerta'></div>
                </div>
                <div className='listaParaServir'>
                    <div className='contenedorTextoParaServir'>
                        <p>Fernanda García</p>
                        <p>10:30</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default PedidosListos;


// 16  sacar div, crear un componente con el y una función que lo haga entrar cada vez que la cocina envie un pedido listo.

//Concatenar la información del nombre del cleinte y la hora de entrega que se almacena en firebase.