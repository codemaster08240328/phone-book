import { combineReducers } from 'redux';
import PhoneBookReducer from './phoneBookSlice';

export default combineReducers(
  {
    phoneBook: PhoneBookReducer
  }
);