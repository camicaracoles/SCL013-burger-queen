import React, { useState } from "react";
import '../img/Menu.css'
import menu from '../menu.json';
import 'firebase/auth';
import { db, auth } from '../firebaseConfig';

export default function TomarPedido() {
  const [menuType, setMenuType] = useState("cafe");
  const [selectedItems, setSelectedItems] = useState([]);
  let [name, setName] = useState('');
  let [cliente, setCliente] = useState('');
  let [valor, setValor] = useState('');
  const handleItemClick = item => {
    // Incluye la logica para saber cuando el elemento
    // ya existe en el arreglo.
    setSelectedItems([...selectedItems, item]);

  };

  const resetState = () => {
    setSelectedItems([]);
  };

  const saveOrder = async (item = {}) => {
    try {
      const userId = auth.currentUser.uid;
      const userRef = await db.collection("usuario").doc(userId)
      const user = await userRef.get();
      if (user.exists) {
        const mesoneroName = user.data().name;

        await db.collection('pedido').doc().set({
          ...item,
          mesonero: mesoneroName
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
      
      cliente
    }
    saveOrder(order)
    alert("enviando orden...")
  };

  const handleDeleteClick = (deleteID) => {
    const filterItem = selectedItems.filter(({ id }) => id !== deleteID)
    setSelectedItems(filterItem)
  }

  return (
    <div className="App">
      <div className="App-menu">
        {Object.keys(menu).map(item => (
          <button className="App-menu__type" onClick={() => setMenuType(item)}>
            {item}
          </button>
        ))}
        <br />
        <br />
        <input className='inputRegistro' placeholder='Ingrese nombre de cliente' type='text' id='nombre' value={cliente} onChange={(ev) => setCliente(ev.target.value)}></input>
        {menu[menuType].map(item => (
          <div className="App-menu__item" onClick={() => handleItemClick(item)}>
            {item.name} <span>${item.valor}</span>
          </div>
        ))}
      </div>
      <div className="App-list">
        {selectedItems &&
          selectedItems.map(item => (
            <div className="App-list__item">
              {name = item.name} <span> {valor = item.valor}</span>
            </div>
          ))}
        <div className="App-list__item App-list__total">
          <hr />
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
