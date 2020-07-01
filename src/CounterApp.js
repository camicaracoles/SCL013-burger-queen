import React, { useState } from 'react';

export const CounterApp = () => {
 
  const [counter, setCounter] = useState(0);
  const handleAdd = () =>{
   setCounter ( counter + 1); 
 }
  return (
    <div className='container mt-5'>
      <h1>Contador en React</h1>
      <p>Valor: { counter }</p>
      <button
      className='btn btn-primary'
      onClick={ handleAdd}
      >
        +1
      </button>
    </div>
  )
}
