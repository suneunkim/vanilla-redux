import { legacy_createStore } from 'redux'
const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

// 1. 리듀서 정의하기
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return count + 1
    case 'MINUS':
      return count - 1
    default:
      return count
  }
}

// 2. 스토어 생성
const countStore = legacy_createStore(countModifier)

// 3. 초기 UI 설정
number.innerText = countStore.getState()

const onChange = () => {
  number.innerText = countStore.getState()
}

// 4. 상태 변화 구독
countStore.subscribe(onChange)

// 5. 액션 디스패치 설정
const handleAdd = () => {
  countStore.dispatch({ type: 'ADD' }) // 액션 객체를 스토어로 전달
}

const handleMinus = () => {
  countStore.dispatch({ type: 'MINUS' })
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)
