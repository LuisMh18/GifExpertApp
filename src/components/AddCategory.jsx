import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const submit = ( event ) => {
        event.preventDefault();
        const value = inputValue.trim();
        if(value == ""){ return; }
        //agregarCategoria(categories => [inputValue, ...categories]);
        onNewCategory(value);
        setInputValue('');
    }

  return (
    <form onSubmit={ submit }>
        <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
    </form>
  )
}
