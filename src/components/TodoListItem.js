import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export const TodoListItem = ( { todo, handleToggle, handleDelete, index}) => {
  return (
            <li 
                key={todo.id}
                className='list-group'
                > 
                  <p 
                    className={ `${ todo.done  && 'complete' }` }
                    onClick={ () => handleToggle(todo.id) }
                    >{index+1}. { todo.desc }</p> 
                  <button 
                    className='btn-delete'
                    onClick={ () => handleDelete(todo.id) }
                    ><FontAwesomeIcon icon={ faTrashCan } /></button>
            </li>
  )
}
