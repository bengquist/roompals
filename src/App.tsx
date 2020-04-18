/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Routes from './Navigation/Routes';

declare const global: {HermesInternal: null | {}};

export type RootStackParamList = {
  Responsibility: undefined;
  Money: undefined;
  Activity: undefined;
  Preference: undefined;
};

const App = () => {
  return <Routes />;
};

export default App;
