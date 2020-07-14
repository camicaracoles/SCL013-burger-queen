import React from 'react';
import '../img/Menu.css';
import BotonMenu from './BotonMenu.componente';
import { liquidosCalientes, sandwich, liquidosFrios } from './Data';

class MenuDesayuno extends React.Component {

    render() {
        return (
            <div className='contenedorMenu'>
                <p className='tituloMenu'>Menú Desayuno</p>
                <div className='btnsMenuPedido'>
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Café</p>
                        {
                            liquidosCalientes.filter(liquido => liquido.id <= 4).map(item => {
                                return <BotonMenu className='liquidoCaliente'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Té</p>
                        {
                            liquidosCalientes.filter(liquido => liquido.id === 5).map(item => {
                                return <BotonMenu className='liquidoCaliente'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Jugos Naturales</p>
                        {
                            liquidosFrios.filter(liquido => liquido.id <= 4).map(item => {
                                return <BotonMenu className='liquidosFrios'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Limonada</p>
                        {
                            liquidosFrios.filter(liquido => liquido.id === 5).map(item => {
                                return <BotonMenu className='liquidosFrios'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Sandwich</p>
                        {
                            sandwich.filter(sandwich => sandwich.id <= 3).map(item => {
                                return <BotonMenu className='sandwich'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Vegetariano</p>
                        {
                            sandwich.filter(liquido => liquido.id === 4).map(item => {
                                return <BotonMenu className='sandwich'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                    </div>


                </div>
                <div className='calcularCompra'>
                    <div className='primeraLinea'>
                        <input className='nombreCliente' type='text' placeholder='Nombre Cliente'></input>
                        <input className='mesa' type='text' placeholder='Mesa'></input>
                    </div>
                    <input className='nombreCliente' type='text' placeholder='Nota del pedido'></input>
                    <div className='detalleCompra'>
                    </div>

                    <div className='confirmarCompra'>
                        <button className='enviarCocina'>Enviar a la cocina</button>
                        <p className='totalPagar'>Total $3.000</p>
                    </div>

                </div>
            </div>

        );
    }

}

export default MenuDesayuno;