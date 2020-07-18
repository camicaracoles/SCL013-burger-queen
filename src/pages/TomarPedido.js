import React, { useState } from "react";
import menu from '../menu.json';
import 'firebase/auth';
import { db, auth } from '../firebase-Config';

export default function TomarPedido() {
  const [menuType, setMenuType] = useState("Café");
  const [selectedItems, setSelectedItems] = useState([]);
  const  [cliente, setCliente] = useState('');
  const  [mesa, setMesa] = useState('');
 // let [producto, setProducto] = useState('');
 // let  [valor, setValor] = useState('');



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
  // Incluye la logica para saber cuando el elemento
  // ya existe en el arreglo.
  setSelectedItems([...selectedItems, item]);
/*  db.collection('pedido').doc().set({
    cliente:cliente,
    mesa:mesa,
    producto:producto,
    valor:valor,
  })*/
};
  return (
    <div className="App">

    <div className="App-menu">
    <input className='inputRegistro' placeholder='Ingrese nombre de cliente' type='text'id='nombre' value ={cliente} onChange={(ev)=> setCliente(ev.target.value)}></input>
    <input className='inputRegistro' placeholder='Ingrese numero de mesa' type='text'id='mesa' value ={mesa} onChange={(ev)=> setMesa(ev.target.value)}></input>
    <br />

      <br />
      {Object.keys(menu).map(item => (
        <button className="btnEntr" onClick={() => setMenuType(item)}>
          {item}
        </button>
      ))}
      <br />
      <br />

      {menu[menuType].map(item => (
        <div className="App-menu__item" onClick={() => handleItemClick(item)}>
          {item.name} <span className='prueba'>${item.valor}</span>
        </div>
      ))}
    </div>
    <div className="App-list">
      PEDIDO
      {selectedItems &&
        selectedItems.map(item => (
          <div className="App-list__item">
           {item.name} <span> {item.valor}</span>
           <button onClick={()=> handleDeleteClick(item.id)}>Eliminar</button>
          </div>
        ))}
       <div className="App-list__item App-list__total">
         <hr/>
          Total {" "}
          <span>
            $
            {selectedItems
              .reduce((acc, curr) => acc + curr.valor, 0)
              .toFixed(2)}
          </span>
        </div>
        {selectedItems.length > 0 && (
        <button type="button" title='Enviar a Cocina'
        onClick={handleSendOrder}
          color="danger">Enviar a cocina</button>
        )}

    </div>
  </div>
);
}
