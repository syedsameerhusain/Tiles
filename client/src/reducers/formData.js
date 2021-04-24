import { FORM_SUBMIT_FAIL, FORM_SUBMIT_SUCCESS } from '../actions/types';
const initialState = [];

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case FORM_SUBMIT_SUCCESS:
      return [...state, payload];
    //case REMOVE_ALERT:
    //  return state.filter((data) => data.id !== payload);
    case FORM_SUBMIT_FAIL:
    default:
      return state;
  }
}
