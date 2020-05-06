/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from 'src/App';
import AuthProvider from 'src/Auth/AuthProvider';
import {name as appName} from './app.json';

const Root = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
