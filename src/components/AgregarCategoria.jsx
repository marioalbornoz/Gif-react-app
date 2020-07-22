import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AgregarCategoria = ({actualizarCategoria, categorias}) => {
    const [valor, agregarValor] = useState('');
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
        actualizarCategoria([valor, ...categorias]);
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
         <input className="button" type="submit" value="Buscar"/>
      </form>
    );
}

AgregarCategoria.propTypes = {
    actualizarCategoria : PropTypes.func.isRequired,
    categorias : PropTypes.array.isRequired
}

export default AgregarCategoria;