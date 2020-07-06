import React from 'react';
import '../img/CalcularCuenta.css'
import borrar from '../img/borrar.png';

export const CalcularCuenta = () => {
    return (
        <div className='calcularCompra'>
            <div className='primeraLinea'>
                <input className='nombreCliente' type='text' placeholder='Nombre Cliente'></input>
                <input className='mesa' type='text' placeholder='Mesa'></input>
            </div>

            <div className='detalleCompra'>
                <p className='textoDetalleCompra'> Limonada dulce</p>
                <p className='valorProducto'>$3.000</p>
                <button className='borrar'>
                    <img class='imgBorrar' src={borrar} alt='borrar' />
                </button>

            </div>

            <div className='confirmarCompra'>
                <button className='enviarCocina'>Enviar a la cocina</button>
                <p className='totalPagar'>Total $3.000</p>
            </div>

        </div>
    )
}

export default CalcularCuenta;
