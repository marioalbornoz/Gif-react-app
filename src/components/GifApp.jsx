import React, { useState } from 'react';
import AgregarCategoria from './AgregarCategoria';

const GifApp = () => {
    // const categorias = ['One Puch', 'Hunter X', 'Dragon Ball']
    const [categorias, actualizarCategoria] = useState(['One Puch', 'Hunter X', 'Dragon Ball']);

    // const handleAdd = () => {
    //   actualizarCategoria([...categorias, "Steins Gate"]);
    // };
    return ( 
        <div>
            <h2>GifApp</h2>
            <AgregarCategoria 
                actualizarCategoria={actualizarCategoria}
                categorias={categorias}
            />
            <hr/>
            <ol>
            {
                categorias.map(categoria => {
                    return <li key={categoria}>{categoria}</li>
                })
            }
            </ol>
            
        </div>
    );
}
 
export default GifApp;