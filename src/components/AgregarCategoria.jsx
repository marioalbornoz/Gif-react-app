import React, { useState } from 'react';

const AgregarCategoria = ({actualizarCategoria, categorias}) => {
    const [valor, agregarValor] = useState('Hola Mundo');
    const [Error, actualzarError] = useState(false);

    // Toma el valor ingresado en el input y actuañiza el state
    const cambioInput = (e) => {
        agregarValor(e.target.value);
    } 

    // Actualiza componente principal
    const eventoSubmit = (e) => {
      e.preventDefault();
      if(valor.trim()===''){
        actualzarError(true);
      } else {
        actualizarCategoria([...categorias, valor]);
        actualzarError(false);
      }
      
    };
    
    return (
      <form
        onSubmit = {eventoSubmit}
      >
        { Error ? 'Error campo de entrada vacio' : null}  
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