import React from 'react'
import './InputField.css'


const InputFieled = ({ title, setTitle, addTask, error }) => {



   return (
      <div className='InputField'>
         <input type='text'
            placeholder='Введите задачу'
            value={title}
            onChange={e => setTitle(e.target.value)}></input>

         <button onClick={addTask}>Добавить</button>
      </div>
   )
}


export default InputFieled