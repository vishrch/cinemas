import {NavigationContainer} from '@react-navigation/native';
import Routes from '@src/navigation/routes';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
