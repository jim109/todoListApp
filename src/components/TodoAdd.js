import React from 'react'
import { useForm } from '../hooks/useForm';

import '../styles/todoAdd.css';

export const TodoAdd = ( { handleAddTodo } ) => {

    const [{ description }, handleInputChange, reset ] = useForm({
        description: ''
      });

      const handleSubmit = (e) =>{
        e.preventDefault();

        if ( description.trim().length <= 1 ){
            return;
          }
          const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
          };
          handleAddTodo(newTodo);
          reset();
      }

  return (
    <div className='container-add'>
            <form onSubmit={ handleSubmit }>
              <input 
                type="text"
                name="description"
                className='form-control'
                placeholder="New task..."
                autoComplete="off"
                value={ description }
                onChange={ handleInputChange }
              />
              <button 
                type='submit' 
                className='btn-agregar'                
                >
                    Add
                </button>
            </form>
    </div>
  )
}
