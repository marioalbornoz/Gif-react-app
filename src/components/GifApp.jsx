import React, { useState } from 'react';
import AgregarCategoria from './AgregarCategoria';
import GifGrid from './GifGrid';

const GifApp = () => {
    // const categorias = ['One Puch', 'Hunter X', 'Dragon Ball']
    const [categorias, actualizarCategoria] = useState(['Steins Gate']);

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
                categorias.map(categoria => 
                    (<GifGrid 
                        key={categoria}
                        categoria = {categoria}
                    />)
                )
            }
            </ol>
            
        </div>
    );
}
 
export default GifApp;