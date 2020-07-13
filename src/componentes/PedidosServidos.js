import React from 'react';
import '../img/PedidosListos.css';
import pagar from '../img/pagar.png';
import borrar from '../img/borrar.png';



class PedidosServidos extends React.Component {

    render() {
        return (
            <div className='contenedorServidos'>
                <p className='tituloMenu'>Pedidos Servidos</p>
                <div className='listaServidos'>
                    <div className='infoCliente'>
                        <p>Nombre Cliente</p>
                        <div className='pagar'>
                            <img class='pagarCuenta' src={pagar} alt='pagar' />
                        </div>
                    </div>
                </div>
                <div className='espacioCalculadora'>
                    <div className='calcularCompra'>
                        <p className='nameCliente'>Nombre del cliente </p>
                        <div className='contenedorDetalleCompra'>
                            <div className='detalleBoleta'>
                                <p className='descripcionProducto'>Descripción del producto, info detallada</p>
                                <p className='totalDelProducto'>Total del Producto</p>
                            </div>
                        </div>
                        <div className='propina'>
                            <p>10% propina para mesero</p>
                            <p>total valor</p>
                            <div>
                                <img class='borrarPropina' src={borrar} alt='borrar' />
                            </div>
                        </div>

                        <div className='confirmarCompra'>
                            <button className='pagar'>Pagar</button>
                            <p className='totalCompra'>Total Compra</p>
                        </div>
                    </div>

                </div>



            </div>
        );
    }
}

export default PedidosServidos;

