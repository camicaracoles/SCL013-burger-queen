import React from 'react';
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import '../img/PortalCocina.css';
import PedidoCocina from '../componentes/PedidoCocina';

export class Cocina extends React.Component {
  render() {
    return (
      <div>
       <div className='franjaCocina'>
          <p className='nombreTrabajadorCocina'>Catalina Retamal</p>
          <div className='diaVistas'>

            <ComponentsDataHours />
    <PedidoCocina/>
          </div>
        </div>

        <div className='lineaSubtitulo'>
          <p className='subTitulo'>Pedidos por hacer</p>
          <p className='subTituloDos'>Lista Pedidos Entregados</p>
        </div>


        <div className='fondoCocina'>
          <div className='contenedorPedidos'>
            <div className='formatoPedido'>


              <div className='detalleMenú'>

              </div>
              <button id='listo'>Listo</button>
            </div>
          </div>

          <div className='listaEntregados'>

            <div className='contenedorEntregados'>
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

