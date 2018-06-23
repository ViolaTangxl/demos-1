import { PAGE_TWO_ADD_ONE, PAGE_TWO_REDUCE_ONE, LOADING_TWO_CHANGE } from "../actions/twoAction";

const initialState = {
  count: 0,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PAGE_TWO_ADD_ONE:
      return addOne(state);
    case PAGE_TWO_REDUCE_ONE:
      return reduceOne(state);
    case LOADING_TWO_CHANGE:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

function addOne(state) {
  return {
    ...state, count: state.count + 1
  }
}

function reduceOne(state) {
  return {
    ...state, count: state.count - 1
  }
}