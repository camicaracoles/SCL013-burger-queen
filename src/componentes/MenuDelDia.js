import React from 'react';
import '../img/Menu.css'
import '../img/CalcularCuenta.css'
import CalcularCuenta from '../componentes/CalcularCuenta';
import BotonMenu from './BotonMenu.componente';
import productos from './Data';


class MenuDelDia extends React.Component {

    render() {
        return (
            <div className='contenedorMenu'>
                <p className='tituloMenu'>Menú Del Día</p>
                <div className='btnsMenuPedido'>
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Res</p>
                        <BotonMenu className='hamburguesa'>Hamburguesa de <br />res La Clasica<br />$5.000</BotonMenu>
                        <button className='hamburguesa'>Hamburguesa de <br />res Ranchera<br />$6.000</button>
                        <button className='hamburguesa'>Hamburguesa de <br />res Tres Quesos<br />$6.500</button>
                        <button className='hamburguesa'>Hamburguesa de <br />res Mexicana<br />$6.500</button>
                        <p className='categoria'>Pollo</p>
                        <button className='hamburguesa'>Hamburguesa de <br />pollo La Clasica <br />$5.000</button>
                        <button className='hamburguesa'>Hamburguesa de <br />pollo La Campestre <br />$6.000</button>
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Pollo</p>
                        <button className='hamburguesa'>Hamburguesa de <br />pollo La Chapetona <br />$6.500</button>
                        <button className='hamburguesa'>Hamburguesa de <br />pollo A Caballo <br />$6.500</button>
                        <p className='categoria'>Vegetariano</p>
                        <button className='hamburguesa'>Hamburguesa <br />vegetariana Coccon <br />$5.000</button>
                        <button className='hamburguesa'>Hamburguesa <br />vegetariana Burrok <br />$6.000</button>
                        <button className='hamburguesa'>Hamburguesa <br />vegetariana Mundial <br />$6.500</button>
                        <button className='hamburguesa'>Hamburguesa <br />vegetariana Colores <br />$6.500</button>
                        
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Jugos Naturales</p>
                        <button className='liquidosFrios'>Jugo natural piña <br /> $3.500 </button>
                        <button className='liquidosFrios'>Jugo natural frambuesa <br />$3.500</button>
                        <button className='liquidosFrios'>Jugo natural frutilla <br />$3.500</button>
                        <button className='liquidosFrios'>jugo natural naranja <br />$3.500</button>
                        <p className='categoria'>Limonada</p>
                        <button className='liquidosFrios'>Limonada dulce <br />$3.000</button>
                        <p className='categoria'>Bebidas</p>
                        <button className='liquidosFrios'>Bebida Coca-cola <br />$2.000</button>
                        <button className='liquidosFrios'>Bebida Fanta <br />$2.000</button>
                        <button className='liquidosFrios'>Bebida Sprite<br />$2.000</button>
                    </div>


                </div>
                
                <div className='espacioCalculadora'>
                    <CalcularCuenta />
                </div>
            </div>

        );
    }
}

export default MenuDelDia;