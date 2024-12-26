import { legacy_createStore } from 'redux'

const loadFromLocalStorage = () => {
  const savedToDos = localStorage.getItem('toDos')
  return savedToDos ? JSON.parse(savedToDos) : []
}

const initialState = {
  toDos: loadFromLocalStorage(),
  count: 0,
}

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const PLUS = 'PLUS'
const MINUS = 'MINUS'

export const addToDoAction = (text) => {
  return { type: ADD_TODO, text, id: Date.now() }
}

export const deleteToDoAction = (id) => {
  return { type: DELETE_TODO, id }
}

export const plusCountAction = () => {
  return { type: PLUS }
}

export const minusCountAction = () => {
  return { type: MINUS }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDos = [...state.toDos, { text: action.text, id: action.id }]
      localStorage.setItem('toDos', JSON.stringify(newToDos))

      return { ...state, toDos: newToDos }

    case DELETE_TODO:
      const filteredToDos = state.toDos.filter((toDo) => toDo.id !== action.id)
      localStorage.setItem('toDos', JSON.stringify(filteredToDos))

      return { ...state, toDos: filteredToDos }

    case PLUS:
      return { ...state, count: (state.count += 1) }
    case MINUS:
      return { ...state, count: (state.count -= 1) }
    default:
      return state
  }
}

const store = legacy_createStore(reducer)

export default store
