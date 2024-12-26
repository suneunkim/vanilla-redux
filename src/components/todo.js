import { legacy_createStore } from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('.input')
const ul = document.querySelector('ul')

// 액션 타입 상수 정의
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

// 액션 생성자 함수
const addToDoAction = (text) => {
  return { type: ADD_TODO, text, id: Date.now() }
}

const deleteToDoAction = (id) => {
  return { type: DELETE_TODO, id }
}

// 리듀서 정의하기 (리듀서: 상태 변화를 정의하는 함수)
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }]
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id)
    default:
      return state
  }
}

// 스토어 생성
const store = legacy_createStore(reducer)

// 디스패치 함수들
const dispatchAddToDo = (text) => {
  store.dispatch(addToDoAction(text))
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteToDoAction(id))
}

// UI 렌더링 함수
const paintToDos = () => {
  const toDos = store.getState()
  ul.innerHTML = ''
  toDos.forEach((toDo) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.addEventListener('click', dispatchDeleteToDo)
    btn.innerText = '삭제'
    li.innerText = toDo.text
    li.id = toDo.id
    li.appendChild(btn)
    ul.appendChild(li)
  })
}

// Form 제출 이벤트 핸들러
const onSubmit = (e) => {
  e.preventDefault()
  const toDo = input.value
  dispatchAddToDo(toDo)
  input.value = ''
}

// 상태 변화 구독: 상태가 변경될 때 마다 paintToDos 실행
store.subscribe(paintToDos)

form.addEventListener('submit', onSubmit)
