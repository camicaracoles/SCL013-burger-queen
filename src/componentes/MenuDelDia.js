import React, { useState } from 'react';
import '../img/Menu.css'
import '../img/CalcularCuenta.css'
import BotonMenu from './BotonMenu.componente';
import { hamburguesas, liquidosFrios, bebidas } from './Data';
import 'firebase/auth';
import { db, auth } from '../firebaseConfig';
import {borrar} from '../img/borrar.png'


export const MenuDelDia = () => {

    const [menuType, setMenuType] = useState("cafe");
    const [selectedItems, setSelectedItems] = useState([]);
    const [cliente, setCliente] = useState('');
    const [mesa, setMesa] = useState('');

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
    const handleDeleteClick = (deleteID) => {
        const filterItem = selectedItems.filter(({ id }) => id !== deleteID)
        setSelectedItems(filterItem)
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
        <div className='contenedorMenu'>
            <p className='tituloMenu'>Menú Del Día</p>
            <div className='btnsMenuPedido'>
                <div className='contenedorBtnsMenu'>
                    <p className='categoria'>Res</p>

                    {
                        hamburguesas.filter(hamburguesa => hamburguesa.id <= 4).map(item => {
                            return <BotonMenu className='hamburguesa' onClick={() => handleItemClick(item)}><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }

                    <p className='categoria'>Pollo</p>
                    {
                        hamburguesas.filter(hamburguesa => hamburguesa.id > 4 && hamburguesa.id <= 6).map(item => {
                            return <BotonMenu className='hamburguesa' onClick={() => handleItemClick(item)}><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }
                </div>


                <div className='contenedorBtnsMenu'>
                    <p className='categoria'>Pollo</p>
                    {
                        hamburguesas.filter(hamburguesa => hamburguesa.id > 6 && hamburguesa.id <= 8).map(item => {
                            return <BotonMenu className='hamburguesa' onClick={() => handleItemClick(item)}><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }
                    <p className='categoria'>Vegetariano</p>
                    {
                        hamburguesas.filter(hamburguesa => hamburguesa.id > 8 && hamburguesa.id <= 12).map(item => {
                            return <BotonMenu className='hamburguesa' onClick={() => handleItemClick(item)}><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }

                </div>

                <div className='contenedorBtnsMenu'>
                    <p className='categoria'>Jugos Naturales</p>
                    {
                        liquidosFrios.filter(liquido => liquido.id <= 4).map(item => {
                            return <BotonMenu className='liquidosFrios' onClick={() => handleItemClick(item)} ><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }
                    <p className='categoria'>Limonada</p>
                    {
                        liquidosFrios.filter(liquido => liquido.id === 5).map(item => {
                            return <BotonMenu className='liquidosFrios' onClick={() => handleItemClick(item)}><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }
                    <p className='categoria'>Bebidas</p>
                    {
                        bebidas.filter(bebida => bebida.id <= 3).map(item => {
                            return <BotonMenu className='liquidosFrios' onClick={() => handleItemClick(item)}><p>{item.name}</p> <p>${item.valor}</p> </BotonMenu>
                        })
                    }
                </div>


            </div>

            <div className='calcularCompra'>
                <div className='primeraLinea'>
                    <input className='nombreCliente' type='text' placeholder='Nombre Cliente' value={cliente} onChange={(ev) => setCliente(ev.target.value)}></input>
                    <input className='mesa' type='text' placeholder='Mesa' value={mesa} onChange={(ev) => setMesa(ev.target.value)}></input>
                </div>
                <input className='nombreCliente' type='text' placeholder='Nota del pedido'></input>
                {selectedItems && selectedItems.map(item => (
                    <div className='detalleCompra'>
                        <p className='textoDetalleCompra'>{item.name}</p>
                        <p className='valorProducto'>{item.valor}</p>
                        <button className='borrar' onClick={() => handleDeleteClick(item.id)}>
                            <img class='imgBorrar' src={borrar} alt='borrar' />
                        </button>
                    </div>
                ))}

                <div className='confirmarCompra'>
                    {selectedItems.length > 0 && (
                        <button className='enviarCocina' onClick={handleSendOrder}>Enviar a la cocina</button>  
                    )}    
                    <p className='totalPagar'>Total {selectedItems
                        .reduce((acc, curr) => acc + curr.valor, 0)
                        .toFixed(2)}
                    </p>
                </div>

            </div>
        </div>

    );

}

export default MenuDelDia;



//sacar los br, cambiarlos por  etiquetas <p> (porque me da un salto de linea).
//mapear para ,mostrar botones automaticamente.
//Crear boleta (array).
