import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch']);

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

        { categories.map( category =>
            (
                <GifGrid key={ category } category = { category } />
            )
          )}

    </>
  )
}
