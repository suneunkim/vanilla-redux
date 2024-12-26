# Vanilla Redux

Learning Vanilla-Redux and React-Redux

## Redux의 각 개념

### Store

- Redux의 상태(state)를 보관하는 중앙 저장소
- 애플리케이션의 모든 상태를 하나의 객체 트리에 저장
- createStore() 메서드를 통해 생성되며, reducer를 필수 인자로 받음

### Action

- 상태 변화를 일으키기 위한 객체
- type 속성을 필수로 가지며, 추가 데이터를 포함할 수 있음
- dispatch 메서드를 통해 스토어로 전달됨
- 예시: { type: 'ADD_TODO', text: '리덕스 배우기' }

### Reducer

- 현재 상태와 액션을 받아 새로운 상태를 반환하는 순수 함수
- state를 직접 수정하지 않고 새로운 상태 객체를 반환
- (prevState, action) => newState 형태로 동작

### Store의 주요 메서드

- dispatch: 상태 변경을 위해 액션을 전달하는 메서드
- getState: 현재 애플리케이션의 상태를 반환하는 메서드
- subscribe: 상태 변경을 감지하여 콜백 함수를 실행하는 메서드

## Redux의 세 가지 원칙

### 1. Single Source of Truth

- 애플리케이션의 모든 상태는 하나의 스토어에서 관리됨
- 상태 관리가 에측 가능하고 디버깅이 용이함

### 2. State는 읽기 전용

- 상태를 직접 수정할 수 없음
- 상태 변경은 오직 액션 객체를 통해서만 가능
- 모든 상태 변화가 액션을 통해 발생하므로 변화를 추적하기 쉬움

### 3. 순수 함수로 작성되는 리듀서

- 리듀서는 이전 상태를 직접 수정하지 않고, 새로운 상태 객체를 반환
- 같은 입력(상태와 액션)에는 항상 같은 출력(새로운 상태)이 보장됨
- 예측 가능한 상태 변화

### 참고 링크

- https://ko.redux.js.org/introduction/getting-started
- https://ko.redux.js.org/tutorials/fundamentals/part-1-overview
- https://ko.redux.js.org/tutorials/essentials/part-1-overview-concepts
- https://ko.redux.js.org/understanding/thinking-in-redux/glossary

## React Redux

### Provider

- 리덕스 스토어를 React 애플리케이션 전체에 제공
- 최상위 컴포넌트를 감싸 모든 하위 컴포넌트에서 리덕스 사용 가능

```jsx
<Provider store={store}>
  <App />
</Provider>
```

### useSelector

- store.getState()와 동일한 역할
- 리덕스 스토어의 상태를 선택하고 컴포넌트에 연결

### useDispatch

- store.dispatch()와 동일한 역할
- 컴포넌트에 액션을 스토어에 전달
- 상태 변경을 위한 액션 실행

---

## React와 Vanilla JS의 상태 관리 및 렌더링 차이

### 1. DOM 조작 방식

Vanilla JS는 `createElement()`와 `appendChild()`를 사용하여 DOM을 직접 조작하지만, React는 가상 DOM을 활용해 렌더링을 추상화합니다. 특히 배열의 요소를 화면에 표시할 때, Vanilla JS는 `forEach`로 순회하며 직접 요소를 생성하고 추가하지만, React는 `map()`을 통해 React 엘리먼트를 생성하고 렌더링을 React에 위임합니다.

### 2. 상태 관리

Vanilla JS에서는 배열이나 객체를 직접 `push()`, `splice()` 등으로 변경하지만, React는 상태의 불변성을 유지합니다. 스프레드 연산자나 `map()`, `filter()` 등을 사용해 새로운 상태 객체를 생성하여 상태 변경을 관리합니다.

### 3. 이벤트 처리

Vanilla JS는 `addEventListener()`로 이벤트를 직접 바인딩하는 반면, React는 합성 이벤트(Synthetic Events)를 제공합니다. `onClick`, `onSubmit`과 같은 카멜케이스 이벤트 핸들러를 통해 이벤트를 처리하며, 브라우저 이벤트를 추상화하고 최적화된 이벤트 시스템을 제공합니다.

### 4. 렌더링 방식

Vanilla JS는 상태 변경 시 필요한 DOM 요소를 수동으로 업데이트해야 하지만, React는 상태 변경을 감지하고 가상 DOM을 통해 효율적으로 실제 DOM을 업데이트합니다. 이를 통해 불필요한 DOM 조작을 최소화하고 성능을 최적화합니다.
