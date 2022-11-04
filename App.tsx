import {NavigationContainer} from '@react-navigation/native';
import Routes from '@src/navigation/routes';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Toast from 'react-native-toast-message';
import {
  WLAuthorizationManager,
  WLResourceRequest,
} from 'react-native-ibm-mobilefirst';

const App = () => {
  WLAuthorizationManager.obtainAccessToken('').then(
    (token: any) => {
      console.log(token);
      var resourceRequest = new WLResourceRequest(
        '/adapters/javaAdapter/resource/greet/',
        WLResourceRequest.GET,
      );
      resourceRequest.setQueryParameters({name: 'world'});
      resourceRequest.send().then(
        (response: any) => {
          console.log('Success: ', response);
        },
        (error: any) => {
          console.log(error);
        },
      );
    },
    (error: any) => {
      console.log(error);
      // alert('Failed to connect to MobileFirst Server');
    },
  );

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
