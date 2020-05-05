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
import {default as React, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {AuthContext} from './Auth/AuthProvider';
import Routes from './Navigation/Routes';
import Providers from './Providers';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch('http://localhost:8163/refresh_token', {
        method: 'POST',
        credentials: 'include',
      }).then(async (res) => {
        const {accessToken} = await res.json();
        await setUser(accessToken);

        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  }, [setUser]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Providers>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Providers>
  );
};

export default App;
