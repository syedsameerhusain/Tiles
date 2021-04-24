import axios from 'axios';
import { loadUser } from './auth';
import { LIST_LOADED, LIST_FAILED } from './types';
export const loadList = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profiles/all');
    dispatch({
      type: LIST_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_FAILED,
    });
  }
};
