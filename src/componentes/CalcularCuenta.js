import React from 'react';
import '../img/CalcularCuenta.css'

const CalcularCuenta = () => {

    return (
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
    )
}

export default CalcularCuenta;
