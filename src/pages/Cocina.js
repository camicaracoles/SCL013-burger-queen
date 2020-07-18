import React, {useState} from 'react';
import { Cronometro } from './Cronometro';
import BtnCronometro from './BtnCronometro';
import PedidoCocina from './PedidoCocina';

export const Cocina = () =>{
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStatus(1);
  };

  let updateMs = time.ms,
  updateS = time.s,
  updateM = time.m,
  updateH = time.h;

  const run = () => {
    if (updateM === 60){
      updateH++;
      updateM =0;
    }
    if (updateS === 60){
      updateM++;
      updateS =0;
    }
    if (updateMs === 100){
      updateS++;
      updateMs =0;
    }
    updateMs++;
    return setTime({ms:updateMs,
       s:updateS,
        m:updateM,
         h:updateH})
  }
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();

  return(
    <div className='main-section'>
      PORTAL DE COCINERO
    <div className='clock-holder'>
      <div className='stopwath'>
     <Cronometro time={time}/>
     <BtnCronometro status={status} resume={resume} reset={reset} stop={stop} start={start}/>
     <PedidoCocina/>
          </div>
    </div>


</div>
);
}
