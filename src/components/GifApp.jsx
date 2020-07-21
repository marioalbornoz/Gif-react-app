import React, { useState } from 'react';

const GifApp = () => {
    // const categorias = ['One Puch', 'Hunter X', 'Dragon Ball']
    const [categorias, actualizarCategoria] = useState(['One Puch', 'Hunter X', 'Dragon Ball']);
    return ( 
        <div>
            <h2>GifApp</h2>
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