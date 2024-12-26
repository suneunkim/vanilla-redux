import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../routes/Home'
import TodoList from '../routes/TodoList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
