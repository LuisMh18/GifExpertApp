import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

  const onAddCategory = (value) => {
    // console.log(value);
    if(categories.includes(value)) return;
    setCategories([value, ...categories]);
  }

  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory 
        //  agregarCategoria={ setCategories } 
            onNewCategory={ (value) => onAddCategory(value) }
       />

      <button onClick={ onAddCategory }>Agregar</button>

        { categories.map( category =>
            (
                <GifGrid key={ category } category = { category } />
            )
          )}

    </>
  )
}
