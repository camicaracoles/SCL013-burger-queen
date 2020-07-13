import React, { useState } from "react";
import '../img/Menu.css'
import menu from '../menu.json';
import 'firebase/auth';
import { db } from '../firebase-Config';

export default function TomarPedido() {
  const [menuType, setMenuType] = useState("cafe");
  const [selectedItems, setSelectedItems] = useState([]);
let  [name, setName] = useState('');
let  [cliente, setCliente] = useState('');
let  [valor, setValor] = useState('');
  const handleItemClick = item => {
    // Incluye la logica para saber cuando el elemento
    // ya existe en el arreglo.
    setSelectedItems([...selectedItems, item]);

  };

  const crearPedido = () =>{
    db.collection('pedido').doc().set({
      cliente:cliente,
      producto:name,
      valor:valor,
    })
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
      <input className='inputRegistro' placeholder='Ingrese nombre de cliente' type='text'id='nombre' value ={cliente} onChange={(ev)=> setCliente(ev.target.value)}></input>
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
           {name= item.name} <span> {valor= item.valor}</span>
          </div>
        ))}
       <div className="App-list__item App-list__total">
          Total{" "}
          <span>
            $
            {selectedItems
              .reduce((acc, curr) => acc + curr.valor, 0)
              .toFixed(2)}
          </span>
        </div>
        {selectedItems.length > 0 && (
        <button type="button" title='Enviar a Cocina'  onClick={crearPedido}
          color="danger">Enviar a cocina</button>
        )}
     
    </div>
  </div>
);
}
