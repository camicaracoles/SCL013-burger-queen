import React from 'react';
import '../img/Menu.css'
import CalcularCuenta from '../componentes/CalcularCuenta';
import BotonMenu from './BotonMenu.componente';


class MenuDesayuno extends React.Component {

    render() {
        return (
            <div className='contenedorMenu'>
                <p className='tituloMenu'>Menú Desayuno</p>
                <div className='btnsMenuPedido'>
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Café</p>
                        <BotonMenu className='liquidoCaliente'>Café americano <br />$3.000</BotonMenu>
                        <BotonMenu className='liquidoCaliente'>Café con leche <br />$4.000</BotonMenu>
                        <BotonMenu className='liquidoCaliente'>Capuchino <br />$4.000</BotonMenu>
                        <BotonMenu className='liquidoCaliente'>Café mocca<br />$5.000</BotonMenu>
                        <p className='categoria'>Té</p>
                        <BotonMenu className='liquidoCaliente'>Té negro <br />$3.000</BotonMenu>
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Jugos Naturales</p>
                        <BotonMenu className='liquidosFrios'>Jugo natural piña <br />$3.500</BotonMenu>
                        <BotonMenu className='liquidosFrios'>Jugo natural frambuesa <br />$3.500</BotonMenu>
                        <BotonMenu className='liquidosFrios'>Jugo natural frutilla <br />$3.500</BotonMenu>
                        <BotonMenu className='liquidosFrios'>jugo natural naranja<br />$3.500</BotonMenu>
                        <p className='categoria'>Limonada</p>
                        <BotonMenu className='liquidosFrios'>Limonada dulce <br />$3.000</BotonMenu>
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Sandwich</p>
                        <BotonMenu className='sandwich'>Sandwich de<br /> jamón y queso<br />$4.000</BotonMenu>
                        <BotonMenu className='sandwich'>Sandwich de<br />huevo cibullete<br />$4.000</BotonMenu>
                        <BotonMenu className='sandwich'>Sandwich de<br />pollo pimentón<br />$5.000</BotonMenu>
                        <p className='categoria'>Vegetariano</p>
                        <BotonMenu className='sandwich'>Sandwich de<br />verduras asadas<br />$5.000</BotonMenu>
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