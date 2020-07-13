import React from 'react';

const BotonMenu = (props) => ( <button onClick={props.onClick} className={props.className} valor={props.valor} name={props.name} id={props.id}>{props.children}</button>)

export default BotonMenu;