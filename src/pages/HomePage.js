import React from 'react';
import { CounterApp } from '../CounterApp';

export const HomePage = () =>{
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;
  let day  = today.getDate();
  day = (day < 10 ? "0" : "") + day;
  let hour = today.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
  let  min  = today.getMinutes();
    min = (min < 10 ? "0" : "") + min;
  let sec  = today.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
  return(
    <div>
      <p className='dia'> {'Fecha:' + year + '-' + month + '-' + day }</p>
      <p className='hora'>{'Hora:' + hour + ':' + min + ':' + sec }</p>

      <CounterApp/>
      
    </div>
  )
}
