import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { buscarGif } from '../helpers/BuscarGif';

const GifGrid = ({categoria}) => {

    const [ images, setImages ] = useState([]);

    useEffect(() => {
      buscarGif(categoria)
        .then(setImages)
    }, [categoria]);

    return (
      <div className="grid-card">
        <h2>{categoria}</h2>
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </div>
    );
}
 
export default GifGrid;