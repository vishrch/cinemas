import {combineReducers} from 'redux';
import MovieReducer from './movieReducer';

export const combinedReducers = combineReducers({
  MovieReducer,
});
