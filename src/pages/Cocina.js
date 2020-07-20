import React, { useState, useEffect } from 'react';
import ComponentsDataHours from '../componentes/ComponentsDataHours';
import '../img/PortalCocina.css'; import PedidoCocina from './PedidoCocina';
import { db } from '../firebaseConfig';
import { ListaPlatillos } from '../componentes/ListaPlatillos';

export const Cocina = () => {

  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    obtenerPedidosPendientes()
  },
    []);

  const actualizarPedidosPendientes = (data) => {
    if (data) {
      const pedidos = data
        .docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

      const pedidosPendientes = pedidos
        .filter(pedido => pedido.status === 'Pendiente');

      setPedidos(pedidosPendientes)
    }
  };

  const obtenerPedidosPendientes = async () => {
    try {
      db.collection('pedido')
        .orderBy('date', 'asc')
        .onSnapshot(actualizarPedidosPendientes);
    } catch (error) {
      console.log(error)
    }
  }

  const actualizarPedidoAListo = (id) => {
    try {
      db.collection('pedido').doc(id).update({ status: "Listo" })
    } catch (error) {
      console.log(error)
    }
  }
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
          <div className='formatoPedido' >
            {
              pedidos.map((pedido = {}) => {
                return (
                  <div>
                    <div className='lineaUno' key={pedido.id}>
                      <p>{pedido.cliente}</p>
                      <p> Hora de entrada</p>
                    </div>
                    <div className='lineaDos'>
                      <p>{pedido.mesonero}</p>
                      <p>{pedido.menuType}</p>
                    </div>
                    <div className='detalleMenú'>
                      <ListaPlatillos selectedItems={pedido.selectedItems} />
                    </div>
                    <button id='listo' value={pedido.id} onClick={() => actualizarPedidoAListo(pedido.id)}>Listo</button>
                    <div className='lineaSeparacion'></div>
                  </div>
                );
              })
            }
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

export default Cocina;

