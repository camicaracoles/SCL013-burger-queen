import React from "react";

// si items es undefined, le asignamos el valor [] por defecto
export const ListaPlatillos = ({ selectedItems = [] }) => {
  return (
    <ul>
      {
        selectedItems.map(platillo => {
          return(<li>{platillo.name}</li>);
        })
      }
    </ul>
  );
};

