import React, { useState } from "react";
import menu from '../menu.json';
import 'firebase/auth';
import { db, auth } from '../firebaseConfig';
import '../img/tomarPedido.css'
import borrar from '../img/borrar.png'


export default function TomarPedido() {
  const [menuType, setMenuType] = useState("Café");
  const [selectedItems, setSelectedItems] = useState([]);
  const  [cliente, setCliente] = useState('');
  const  [mesa, setMesa] = useState('');

  const resetState =  () => {
    setSelectedItems([]);
  };

  const saveOrder = async (item = {}) => {
    try {
      const userId = auth.currentUser.uid;
      const userRef = await db.collection("usuario").doc(userId)
      const user = await userRef.get();
      if (user.exists) {
         const mesoneroName =  user.data().name;

         await db.collection('pedido').doc().set({
          ...item,
          mesonero: mesoneroName,
          status: 'Pendiente',
          date: new Date(),
        })
      } else {
        alert("Usuario no encontrado");
      }
      resetState();
      alert("Orden enviada");
    } catch (error) {
      console.error(`Ocurrió un error ${error.message}`)
    }
  };

  const handleSendOrder = () => {
    const order = {
      menuType,
      selectedItems,
      mesa,
      cliente
    }
    saveOrder(order)
    alert("enviando orden...")
  };

 const handleDeleteClick = (deleteID)=>{
   const filterItem = selectedItems.filter(({ id }) => id !== deleteID)
   setSelectedItems (filterItem)
 }
 const handleItemClick = item => {

  setSelectedItems([...selectedItems, item]);
};
  return (
    <div className="App">

    <div className="App-menu">
    <input className='inputRegistro' placeholder='Ingrese nombre de cliente' type='text'id='nombre' value ={cliente} onChange={(ev)=> setCliente(ev.target.value)}></input>
    <input className='inputRegistro' placeholder='Ingrese numero de mesa' type='text'id='mesa' value ={mesa} onChange={(ev)=> setMesa(ev.target.value)}></input>
    <br />

      <br />
      {Object.keys(menu).map(item => (
        <button className='categoria' onClick={() => setMenuType(item)}>
          {item}
        </button>
      ))}
      <br />
      <br />

      {menu[menuType].map(item => (
        <button className='hamburguesa' onClick={() => handleItemClick(item)}>
          {item.name} <span className='prueba'>${item.valor}</span>
        </button>
      ))}
    </div>
    <div className="calcularCompra">
      PEDIDO
      {selectedItems &&
        selectedItems.map(item => (
          <div className="textoDetalleCompra">
           {item.name} <div className="valor"> {item.valor}</div>
           <div className="borrar"><img className="imgBorrar" alt="" src={ borrar } onClick={()=>handleDeleteClick(item.id)}/></div>


          </div>
        ))}
       <div className="totalPagar">
         <hr/>
          <h4 className="total"> Total {" "}</h4>
          <span className='montoAPagar'>
            $
            {selectedItems
              .reduce((acc, curr) => acc + curr.valor, 0)
              .toFixed(2)}
          </span>
        </div>
        {selectedItems.length > 0 && (
        <button className="enviarCocina" type="button" title='Enviar a Cocina'
        onClick={handleSendOrder}
        >Enviar a cocina</button>
        )}

    </div>
  </div>
);
}
