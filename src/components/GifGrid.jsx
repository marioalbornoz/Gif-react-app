import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({categoria}) => {

    const [ images, setImages ] = useState([]);

    useEffect(() => {
      buscarGif();
    }, []);

    const buscarGif = async() =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=smVAorhvtUBuaCwgHmOJaCsemKCHfj4t`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifInfo = data.map( img => {
                return {
                    id: img.id,
                    title:img.title,
                    url: img.images?.downsized_medium.url
                }

            })

        console.log(gifInfo);
        setImages(gifInfo);

    }

    return (
      <>
        <h2>{categoria}</h2>
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </>
    );
}
 
export default GifGrid;