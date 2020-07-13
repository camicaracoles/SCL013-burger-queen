import React from 'react';
import borrar from '../img/borrar.png';

const EntradaPedido = () => {

    return (
     
        <React.Fragment>
            <p className='textoDetalleCompra'>{`${productos[19].name}`}</p>
            <p className='valorProducto'>{`${productos[19].name}`}</p>
            <button className='borrar'>
                <img class='imgBorrar' src={borrar} alt='borrar' />
            </button>
        </React.Fragment>
    )
}
export default EntradaPedido;

// En la linea 15, debo agregar ese div al css que no está declaro (pendiente)
// En la linea 11, debo agregar al imput estilo en el css que no está declarado



