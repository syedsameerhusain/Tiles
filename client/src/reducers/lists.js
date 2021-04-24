import { LIST_LOADED, LIST_FAILED } from '../actions/types';
const initialState = [];

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case LIST_LOADED:
      if (state[0] !== undefined) {
        return state;
      }
      return [...state, payload];
    //case REMOVE_ALERT:
    //  return state.filter((data) => data.id !== payload);
    case LIST_FAILED:
    default:
      return state;
  }
}
