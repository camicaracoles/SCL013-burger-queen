import React from 'react';
import '../img/Menu.css'
import '../img/CalcularCuenta.css'
import BotonMenu from './BotonMenu.componente';
import { hamburguesas } from './Data';


class MenuDelDia extends React.Component {

    render() {
        return (
            <div className='contenedorMenu'>
                <p className='tituloMenu'>Menú Del Día</p>
                <div className='btnsMenuPedido'>
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Res</p>
                        {
                            data.filter(hamburguesas => hamburguesas.id === 4).map(hamburguesas => {
                                return <BotonMenu name={item.name} valor={}/>;
                            })
                        }
                        <p className='categoria'>Pollo</p>
                        <BotonMenu className='hamburguesa'>Hamburguesa de <br />pollo La Clasica <br />$5.000</BotonMenu>
                        <BotonMenu className='hamburguesa'>Hamburguesa de <br />pollo La Campestre <br />$6.000</BotonMenu>
                    </div>

                    {
                        data.filter( hamburguesas=> hamburguesas.id => 4).map(item => {
                            return <ComponenteBoton name={hamburguesas.name} valor={hamburguesas} />;
                        })
                    }
                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Pollo</p>
                        <BotonMenu className='hamburguesa'>Hamburguesa de <br />pollo La Chapetona <br />$6.500</BotonMenu>
                        <BotonMenu className='hamburguesa'>Hamburguesa de <br />pollo A Caballo <br />$6.500</BotonMenu>
                        <p className='categoria'>Vegetariano</p>
                        <BotonMenu className='hamburguesa'>Hamburguesa <br />vegetariana Coccon <br />$5.000</BotonMenu>
                        <BotonMenu className='hamburguesa'>Hamburguesa <br />vegetariana Burrok <br />$6.000</BotonMenu>
                        <BotonMenu className='hamburguesa'>Hamburguesa <br />vegetariana Mundial <br />$6.500</BotonMenu>
                        <BotonMenu className='hamburguesa'>Hamburguesa <br />vegetariana Colores <br />$6.500</BotonMenu>

                    </div>

                    <div className='contenedorBtnsMenu'>
                        <p className='categoria'>Jugos Naturales</p>
                        <BotonMenu className='liquidosFrios'>Jugo natural piña <br /> $3.500 </BotonMenu>
                        <BotonMenu className='liquidosFrios'>Jugo natural frambuesa <br />$3.500</BotonMenu>
                        <BotonMenu className='liquidosFrios'>Jugo natural frutilla <br />$3.500</BotonMenu>
                        <BotonMenu className='liquidosFrios'>jugo natural naranja <br />$3.500</BotonMenu>
                        <p className='categoria'>Limonada</p>
                        <BotonMenu className='liquidosFrios'>Limonada dulce <br />$3.000</BotonMenu>
                        <p className='categoria'>Bebidas</p>
                        <BotonMenu className='liquidosFrios'>Bebida Coca-cola <br />$2.000</BotonMenu>
                        <BotonMenu className='liquidosFrios'>Bebida Fanta <br />$2.000</BotonMenu>
                        <BotonMenu className='liquidosFrios'>Bebida Sprite<br />$2.000</BotonMenu>
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