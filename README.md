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

## 참고 링크

- https://ko.redux.js.org/introduction/getting-started
- https://ko.redux.js.org/tutorials/fundamentals/part-1-overview
- https://ko.redux.js.org/tutorials/essentials/part-1-overview-concepts
- https://ko.redux.js.org/understanding/thinking-in-redux/glossary
