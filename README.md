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