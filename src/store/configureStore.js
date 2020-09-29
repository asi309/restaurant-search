import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import restaurantReducer from '../reducers/restaurantReducer';
import filterReducer from '../reducers/filterReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      restaurants: restaurantReducer,
      filters: filterReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
