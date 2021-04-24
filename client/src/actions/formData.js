import { FORM_SUBMIT_FAIL, FORM_SUBMIT_SUCCESS } from './types';
import { setAlert } from './alert';
import axios from 'axios';
import { loadUser } from './auth';
export const formData = (
  name,
  date,
  Organisation_name,
  Rating,
  Phone_no
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    name,
    date,
    Organisation_name,
    Rating,
    Phone_no,
  });
  try {
    const res = await axios.post('/api/profiles', body, config);
    dispatch({
      type: FORM_SUBMIT_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      dispatch({
        type: FORM_SUBMIT_FAIL,
      });
    }
  }
};
