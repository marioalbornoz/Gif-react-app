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
        <div className="container">
            <h2>Busca tu GIF</h2>
            <AgregarCategoria 
                actualizarCategoria={actualizarCategoria}
                categorias={categorias}
            />
            <hr/>
            {
                categorias.map(categoria => 
                    (<GifGrid 
                        key={categoria}
                        categoria = {categoria}
                    />)
                )
            }
            
        </div>
    );
}
 
export default GifApp;