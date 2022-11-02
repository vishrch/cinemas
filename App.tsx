import {NavigationContainer} from '@react-navigation/native';
import Routes from '@src/navigation/routes';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
