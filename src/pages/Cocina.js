import React from 'react';
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import '../img/PortalCocina.css';

export class Cocina extends React.Component {
  render() {
    return (
      <div>
       <div className='franjaCocina'>
          <p className='nombreTrabajadorCocina'>Catalina Retamal</p>
          <div className='diaVistas'>
            
            <ComponentsDataHours />

          </div>
        </div>
       
        <div className='lineaSubtitulo'>
          <p className='subTitulo'>Pedidos por hacer</p>
          <p className='subTituloDos'>Lista Pedidos Entregados</p>
        </div>
        

        <div className='fondoCocina'>
          <div className='contenedorPedidos'>
            <div className='formatoPedido'>
              <div className='lineaUno'>
                <p>Nombre Cliente</p>
                <p> Hora de entrada</p>
              </div>
              <div className='lineaDos'>
                <p>Nombre Mesero</p>
                <p>Tipo menú</p>
              </div>
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

// linea 9 concatenar el nombre del usuario Jefe de cocina