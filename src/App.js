import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import InputFieled from './components/InputField/InputField';
import TodoItem from './components/TodoItem/TodoItem';
import { useDispatch } from 'react-redux'
import { addTodo } from './store/todoSlice'


function App() {
   const todos = useSelector(state => state.todoReducer.todos)
   const dispatch = useDispatch()



   const [title, setTitle] = useState()
   const addTask = () => {
      if (title.trim().length) {
         dispatch(addTodo({ title }))

      }
      setTitle('')
   }

   return (
      <div className="App">
         <div className='wrapper'>
            <h1 className='title'>Задачи</h1>
            <InputFieled title={title} setTitle={setTitle} addTask={addTask} />
            <div className='todoLists'>
               {todos.map(todo => <TodoItem key={todo.id} title={todo.title} isCompleted={todo.isCompleted} id={todo.id} />)}
            </div>
         </div>
      </div>
   );
}

export default App;
