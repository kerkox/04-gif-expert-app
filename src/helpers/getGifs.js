
  export const getFetchGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=C9S94L0ayPAzoLwbX5GSZdz99ML6h5Rt&limit=10`
    // const url = `https://api.giphy.com/v1/stickers/search?q=Mr Robot&api_key=C9S94L0ayPAzoLwbX5GSZdz99ML6h5Rt&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
  }