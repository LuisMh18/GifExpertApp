import { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  //hook personalizado
  const { images, isLoading } = useFetchGifs(category);

  console.log("isLoading: ", isLoading);

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className='card-grid'>
        {
          images.map(( value ) => 
            (
              <GifItem key={ value.id } {...value} />
            )
          )
        }
      </div>
        
    </>
  )
}
