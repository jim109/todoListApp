import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import '../styles/styles.css'

const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
const [ todos, dispatch ] = useReducer(todoReducer, [], init)

useEffect( () =>{
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos]);

const handleDelete = (todoId) => {
 const action = {
   type: 'delete',
   payload: todoId
 };
  
  dispatch(action);
}

const handleToggle = (todoId) =>{
  
  dispatch({
    type: 'toggle',
    payload: todoId
  });
}

const handleAddTodo = ( newTodo ) =>{
  dispatch({
    type: 'add',
    payload: newTodo
  })
}

  return (
    <div className='main'>
        
        <div className='title'>
          <h1> ListApp </h1>          
        </div>          
        <div className='todos'>
          <h3 className='title-todos'> Todo's pendientes ( { todos.length } )</h3>          
          <div className='todos-item' >
            <TodoList 
              todos = { todos }
              handleDelete =  { handleDelete }
              handleToggle = { handleToggle }
            />
          </div>
          <div className='todoadd'>
            <TodoAdd 
              handleAddTodo={handleAddTodo}
            />
          </div>
        </div>


    </div>
  )
}
