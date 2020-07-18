import React from 'react';
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import '../img/PortalCocina.css';

export class Cocina extends React.Component {
  render() {
    return (
      <div>
        <div className='franjaCocina'>
          <p className='nombreTrabajador'>Catalina Retamal</p>
          <div className='diaVistas'>

            <ComponentsDataHours />

          </div>
        </div>
        <div className='fondoCocina'>

          <div className='contenedorPedidos'>
            <p className='subTitulo'>Pedidos por hacer</p>
            <div className='formatoPedido'>
              <p className='1'>Nombre Cliente</p>
              <p className='1'> Hora de entrada</p>
              <p className='2'>Nombre Mesero</p>
              <p className='2'>Tipo menú</p>
              <p className='3'>Detalle Menú</p>
              <button className='listo'>Listo</button>
            </div>

          </div>

          <div className='listaEntregados'>
            <p className='subTitulo'>Pedidos por hacer</p>
            <div id='lineaEntregados'>
              <p>Nombre del cleinte</p>
              <p>Hora entrada pedido</p>
              <p>Hora salida pedido</p>
            </div>


          </div>

        </div>
      </div>
    )
  }
};

