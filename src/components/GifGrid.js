import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Mr Robot&api_key=C9S94L0ayPAzoLwbX5GSZdz99ML6h5Rt&limit=10`
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
    setImages(gifs)
  }

  return (
    <div>
      <h3>{category}</h3>
      {
        images.map(img => (
          <GifGridItem
            key={img.id} {...img} />
        ))
      }
    </div>
  )
}
