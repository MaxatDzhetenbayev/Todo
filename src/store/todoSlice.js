import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: [
         { id: 1, title: 'todo', isCompleted: false },
         { id: 2, title: 'react', isCompleted: false },
         { id: 3, title: 'redux', isCompleted: false },
      ]
   },
   reducers: {
      addTodo(state, action) {
         console.log(state)
         console.log(action.payload)
         state.todos.push({
            id: new Date().getMilliseconds,
            title: action.payload.title,
            isCompleted: false,
         })
      },
      removeTodo(state, action) {
         state.todos = state.todos.filter(todo => todo.id != action.payload.id)
      },

      toggleTodoCompleted(state, action) {
         const current = state.todos.find(todo => todo.id === action.payload.id)
         current.isCompleted = !current.isCompleted
      }
   }
})

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions

export default todoSlice.reducer