import React from 'react';
import {Provider} from 'react-redux';
import Movies from './src/screens/Movies';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  );
};

export default App;
