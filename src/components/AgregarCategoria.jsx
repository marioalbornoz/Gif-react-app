import React, { useState } from 'react';

const AgregarCategoria = ({actualizarCategoria, categorias}) => {
    const [valor, agregarValor] = useState('Hola Mundo');

    // Toma el valor ingresado en el input y actuañiza el state
    const cambioInput = (e) => {
        agregarValor(e.target.value);
    } 

    // Actualiza componente principal
    const eventoSubmit = (e) => {
      e.preventDefault();
      actualizarCategoria([...categorias, valor]);
    };
    
    return (
      <form
        onSubmit = {eventoSubmit}
      >
        <input 
            type="text"
            value={valor}
            onChange={cambioInput}
         />
         <input type="submit" value="Agregar"/>
      </form>
    );
}
 
export default AgregarCategoria;