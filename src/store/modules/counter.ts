// Ducks 구조 (액션타입, 액션 생성함수, 리듀서를 한 파일에 작성)

import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'couter/INCREMENT';
const DECREMENT = ' counter/DECREMENT';


export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
};

export interface CounterState {
  value: number;
}

const initialSate: CounterState = {
  value: 0,
}

export default handleActions<CounterState>(
  {
    [INCREMENT]: (state) => ({ value: state.value + 1}),
    [DECREMENT]: (state) => ({ value: state.value -1})
  },
  initialSate
)