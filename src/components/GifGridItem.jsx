import React from 'react';

const GifGridItem = ({ id, title, url }) => (
  <div className="card">
    <img src={url} alt={title}/>
  </div>
);
 
export default GifGridItem;