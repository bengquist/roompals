/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {default as React} from 'react';
import Routes from './Navigation/Routes';
import Providers from './Providers';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Providers>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
