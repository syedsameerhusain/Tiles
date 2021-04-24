import { combineReducers } from 'redux';
import alerts from './alerts';
import auth from './auth';
import formData from './formData';
import lists from './lists';
export default combineReducers({ lists, formData, alerts, auth });
