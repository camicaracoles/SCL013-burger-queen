import React from 'react';
import '../img/MenuDesayuno.css'
import borrar from '../img/borrar.png';


class MenuDesayuno extends React.Component {

    render() {
        return (
            <div className='contenedorMenuDesayuno'>
                <p id='tituloMenuDesayuno'>Menú Desayuno</p>
                <div id='btnsDesayuno'>
                    <div className='contenedorBtnsDesayuno'>
                        <p className='categoria'>Café</p>
                        <button className='liquidoCaliente'>Café americano <br />$3.000</button>
                        <button className='liquidoCaliente'>Café con leche <br />$4.000</button>
                        <button className='liquidoCaliente'>Capuchino <br />$4.000</button>
                        <button className='liquidoCaliente'>Café mocca<br />$5.000</button>
                        <p className='categoria'>Té</p>
                        <button className='liquidoCaliente'>Té negro <br />$3.000</button>
                    </div>

                    <div className='contenedorBtnsDesayuno'>
                        <p className='categoria'>Jugos Naturales</p>
                        <button className='jugos'>Jugo natural piña <br />$3.500</button>
                        <button className='jugos'>Jugo natural frambuesa <br />$3.500</button>
                        <button className='jugos'>Jugo natural frutilla <br />$3.500</button>
                        <button className='jugos'>jugo natural naranja<br />$3.500</button>
                        <p className='categoria'>Limonada</p>
                        <button className='jugos'>Limonada dulce <br />$3.000</button>
                    </div>

                    <div className='contenedorBtnsDesayuno'>
                        <p className='categoria'>Sandwich</p>
                        <button className='sandwich'>Sandwich de<br /> jamón y queso<br />$4.000</button>
                        <button className='sandwich'>Sandwich de<br />huevo cibullete<br />$4.000</button>
                        <button className='sandwich'>Sandwich de<br />pollo pimentón<br />$5.000</button>
                        <p className='categoria'>Vegetariano</p>
                        <button className='sandwich'>Sandwich de<br />verduras asadas<br />$5.000</button>
                    </div>


                </div>
                <div className='calcularCompra'>
                    <div className='primeraLinea'>
                        <input className='nombreCliente' type='text' placeholder='Nombre Cliente'></input>
                        <input className='mesa' type='text' placeholder='Mesa'></input>
                    </div>

                    <div className='detalleCompra'>
                        <p className='textoDetalleCompra'> Café mocca</p>
                        <p className='valorProducto'>$5.000</p>
                        <button className='borrar'>
                            <img class='imgBorrar' src={borrar} alt='borrar' />
                        </button>

                    </div>

                    <div className='confirmarCompra'>
                        <button className='enviarCocina'>Enviar a la cocina</button>
                        <p className='totalPagar'>Total $5.000</p>
                    </div>

                </div>
            </div>

        );
    }
}

export default MenuDesayuno;