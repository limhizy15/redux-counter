import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  incrementCount,
  decrementCount,
};

export default store;
