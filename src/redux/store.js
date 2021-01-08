import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from '../redux/reducers/filterReducer';
import pizzasReducer from '../redux/reducers/pizzasReducer';
import cartReducer from '../redux/reducers/cartReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  filterReducer,
  pizzasReducer,
  cartReducer,
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
