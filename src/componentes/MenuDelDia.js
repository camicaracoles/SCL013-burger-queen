import React from 'react';
import '../img/Menu.css'
import '../img/CalcularCuenta.css'
import BotonMenu from './BotonMenu.componente';
import { hamburguesas, liquidosFrios, bebidas } from './Data';


class MenuDelDia extends React.Component {

    guardarPedido = () => {

    }

    render() {
        return (
            <div className='contenedorMenu'>
                <p className='tituloMenu'>Menú Del Día</p>
                <div className='btnsMenuPedido'>
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Res</p>
                        {
                            hamburguesas.filter(hamburguesa => hamburguesa.id <= 4 ).map(item => {
                                return <BotonMenu className='hamburguesa'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Pollo</p>
                        {
                            hamburguesas.filter(hamburguesa => hamburguesa.id >4 && hamburguesa.id <= 6 ).map(item => {
                                return <BotonMenu className='hamburguesa'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                    </div>


                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Pollo</p>
                        {
                            hamburguesas.filter(hamburguesa => hamburguesa.id >6 && hamburguesa.id <= 8 ).map(item => {
                                return <BotonMenu className='hamburguesa'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Vegetariano</p>
                        {
                            hamburguesas.filter(hamburguesa => hamburguesa.id >8 && hamburguesa.id <= 12 ).map(item => {
                                return <BotonMenu className='hamburguesa'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }

                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Jugos Naturales</p>
                        {
                            liquidosFrios.filter(liquido => liquido.id <= 4  ).map(item => {
                                return <BotonMenu className='liquidosFrios'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Limonada</p>
                        {
                            liquidosFrios.filter(liquido => liquido.id === 5  ).map(item => {
                                return <BotonMenu className='liquidosFrios'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                            })
                        }
                        <p className='categoria'>Bebidas</p>
                        {
                            bebidas.filter(bebida => bebida.id <= 3  ).map(item => {
                                return <BotonMenu className='liquidosFrios'><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
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

export default MenuDelDia;

//sacar los br, cambiarlos por  etiquetas <p> (porque me da un salto de linea).
//mapear para ,mostrar botones automaticamente.
//Crear boleta (array).