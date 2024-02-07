import { INCREMENT, DECREMENT } from './Actions';
import './App.css'

const initialState = {
  count: 0,
};

const likeCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default likeCounterReducer;