import React from 'react';

const GifGridItem = ({ id, title, url }) => (
  <div>
    <img src={url} alt={title}/>
  </div>
);
 
export default GifGridItem;