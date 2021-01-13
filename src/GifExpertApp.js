import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

  const initialState = ['One Punch'];
  const [categories, setCategories] = useState(initialState)


  return (
    <>
    <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
    <hr />
    
    <ol>
      {
        categories.map((category,i) => (
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }
    </ol>
    </>
  )
}


export default GifExpertApp;