import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import columns from './columns';
import cards from './cards';
import card from './card';
import app from './app';

export default combineReducers({
  app,
  columns,
  cards,
  card,
  router: routerReducer,
});
