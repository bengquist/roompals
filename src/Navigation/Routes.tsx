import {ApolloProvider} from '@apollo/react-hooks';
import {HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloClient} from 'apollo-client';
import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import {AuthContext} from '../Auth/AuthProvider';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

export default function Routes() {
  const {currentToken, setUser} = useContext(AuthContext);
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

  console.log(currentToken);

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8163/graphql',
      credentials: 'include',
      headers: {
        authorization: `bearer ${currentToken}`,
      },
    }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {currentToken ? <AppRoutes /> : <AuthRoutes />}
    </ApolloProvider>
  );
}
