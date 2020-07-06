import React from 'react';
import '../img/Menu.css'
import CalcularCuenta from '../componentes/CalcularCuenta';


class MenuDesayuno extends React.Component {

    render() {
        return (
            <div className='contenedorMenu'>
                <p className='tituloMenu'>Menú Desayuno</p>
                <div id='btnsMenuPedido'>
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Café</p>
                        <button className='liquidoCaliente'>Café americano <br />$3.000</button>
                        <button className='liquidoCaliente'>Café con leche <br />$4.000</button>
                        <button className='liquidoCaliente'>Capuchino <br />$4.000</button>
                        <button className='liquidoCaliente'>Café mocca<br />$5.000</button>
                        <p className='categoria'>Té</p>
                        <button className='liquidoCaliente'>Té negro <br />$3.000</button>
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Jugos Naturales</p>
                        <button className='liquidosFrios'>Jugo natural piña <br />$3.500</button>
                        <button className='liquidosFrios'>Jugo natural frambuesa <br />$3.500</button>
                        <button className='liquidosFrios'>Jugo natural frutilla <br />$3.500</button>
                        <button className='liquidosFrios'>jugo natural naranja<br />$3.500</button>
                        <p className='categoria'>Limonada</p>
                        <button className='liquidosFrios'>Limonada dulce <br />$3.000</button>
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Sandwich</p>
                        <button className='sandwich'>Sandwich de<br /> jamón y queso<br />$4.000</button>
                        <button className='sandwich'>Sandwich de<br />huevo cibullete<br />$4.000</button>
                        <button className='sandwich'>Sandwich de<br />pollo pimentón<br />$5.000</button>
                        <p className='categoria'>Vegetariano</p>
                        <button className='sandwich'>Sandwich de<br />verduras asadas<br />$5.000</button>
                    </div>


                </div>
                <div className='espacioCalculadora'>
                    <CalcularCuenta />
                </div>    
            </div>

        );
    }
}

export default MenuDesayuno;