

export const buscarGif = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=smVAorhvtUBuaCwgHmOJaCsemKCHfj4t`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifInfo = data.map( img => {
            return {
                id: img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }

        })

    return gifInfo;

}