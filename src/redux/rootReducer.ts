import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './user/user';
import appStateReducer from './state/appState';

const rootReducer = combineReducers({
  appState: appStateReducer,
  user: userReducer,
});

export default rootReducer;
