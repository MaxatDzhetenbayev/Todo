import React from 'react'
import Check from '../Check/Check'
import './TodoItem.css'
import { BsTrash } from 'react-icons/bs'

import { useDispatch } from 'react-redux'
import { removeTodo } from '../../store/todoSlice'
import { toggleTodoCompleted } from '../../store/todoSlice'

const TodoItem = ({ id, title, isCompleted }) => {
   const dispatch = useDispatch()


   return (
      <div className='todoElement'>
         <button className='todoButton button' onClick={() => dispatch(toggleTodoCompleted({ id }))}>
            <Check isCompleted={isCompleted} />
            <div>{title}</div>
         </button>
         <button className='deleteTodo button' onClick={() => dispatch(removeTodo({ id }))} >
            <BsTrash />
         </button>
      </div>
   )
}

export default TodoItem