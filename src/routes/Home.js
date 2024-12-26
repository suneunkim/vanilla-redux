import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDoAction, deleteToDoAction, minusCountAction, plusCountAction } from '../store'

export default function Home() {
  const toDos = useSelector((state) => state.toDos || [])
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addToDoAction(text))
    setText('')
  }

  const handleDelete = (id) => {
    dispatch(deleteToDoAction(id))
  }

  // 카운터 핸들러
  const handlePlus = () => {
    dispatch(plusCountAction())
  }

  const handleMinus = () => {
    dispatch(minusCountAction())
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
