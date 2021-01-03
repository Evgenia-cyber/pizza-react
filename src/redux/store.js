import { combineReducers, createStore } from 'redux';
import filterReducer from '../redux/reducers/filterReducer';
import pizzasReducer from '../redux/reducers/pizzasReducer';

const reducers = combineReducers({
  filterReducer,
  pizzasReducer,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
