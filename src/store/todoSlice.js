import { createSlice } from '@reduxjs/toolkit'

const loadLocalStorage = () => {
  const savedToDos = localStorage.getItem('toDos')
  return savedToDos ? JSON.parse(savedToDos) : []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadLocalStorage(),
  reducers: {
    addToDo: (state, action) => {
      const newToDos = [...state, { text: action.payload, id: Date.now() }]
      localStorage.setItem('toDos', JSON.stringify(newToDos))

      return newToDos
    },
    deleteToDo: (state, action) => {
      const filterdToDos = state.filter((todo) => todo.id !== action.payload)
      localStorage.setItem('toDos', JSON.stringify(filterdToDos))

      return filterdToDos
    },
  },
})

export const { addToDo, deleteToDo } = todoSlice.actions
export default todoSlice.reducer
