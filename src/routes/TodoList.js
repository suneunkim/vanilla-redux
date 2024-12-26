import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo, deleteToDo } from '../store/todoSlice'
import { plus, minus } from '../store/counterSlice'

export default function TodoList() {
  const toDos = useSelector((state) => state.todos)
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addToDo(text))
    setText('')
  }

  const handleDelete = (id) => {
    dispatch(deleteToDo(id))
  }

  // 카운터 핸들러
  const handlePlus = () => {
    dispatch(plus())
  }

  const handleMinus = () => {
    dispatch(minus())
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => handleDelete(toDo.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <h1>Counter</h1>
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </>
  )
}
