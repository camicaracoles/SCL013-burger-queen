import React, {useState, useEffect} from 'react';
import {db} from '../firebaseConfig'
import { ListaPlatillos } from './ListaPlatillos';
import '../img/PortalCocina.css';

export const PedidoCocina = () =>{
  const [pedidos, setPedidos]=useState([])

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
    } catch (error){
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
        PEDIDOS PENDIENTES
      <div>
        {
          // si pedido es undefined, le asignamos el valor {} por defecto
          pedidos.map((pedido = {}, indice) => {
            return(
              <div
                className="contenedor-pedido"
                key={pedido.id}>
                <h4> Orden # {indice + 1}</h4>
                <h5 className='lineaUno'>  Cliente: {pedido.cliente} / Mesa:{pedido.mesa}  </h5>
                 <h5 className='lineaDos'>  Mesero:{pedido.mesonero} </h5> <br/>

                  <button
                    value={pedido.id}
                    onClick={() => actualizarPedidoAListo(pedido.id)}>
                    Pedido Listo
                  </button>

                <h5>Items del pedido:</h5>
                <ListaPlatillos
                  selectedItems={pedido.selectedItems} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default PedidoCocina;
