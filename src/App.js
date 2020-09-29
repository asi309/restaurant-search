import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { startSetRestaurants } from './actions/restaurants';
import Routes from './routes';

import './App.css';

function App() {
  const store = configureStore();
  store.dispatch(startSetRestaurants());
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
