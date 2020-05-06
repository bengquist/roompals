/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {ApolloProvider} from '@apollo/react-hooks';
import {NavigationContainer} from '@react-navigation/native';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink, Observable} from 'apollo-link';
import {onError} from 'apollo-link-error';
import {HttpLink} from 'apollo-link-http';
import {TokenRefreshLink} from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import {default as React, useContext, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {AuthContext} from './Auth/AuthProvider';
import Routes from './Navigation/Routes';
import theme from './Style/theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {accessToken, setUser} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const cache = new InMemoryCache({});

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: any;
        Promise.resolve(operation)
          .then((oper) => {
            if (accessToken) {
              oper.setContext({
                headers: {
                  authorization: `bearer ${accessToken}`,
                },
              });
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      }),
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
          if (!accessToken) {
            return true;
          }

          try {
            const {exp} = jwtDecode(accessToken);
            if (Date.now() >= exp * 1000) {
              return false;
            } else {
              return true;
            }
          } catch {
            return false;
          }
        },
        fetchAccessToken: () => {
          setIsLoading(false);
          return fetch('http://localhost:8163/refresh_token', {
            method: 'POST',
            credentials: 'include',
          });
        },
        handleFetch: (token) => {
          setUser(token);
        },
        handleError: (err) => {
          console.warn('Your refresh token is invalid. Try to relogin');
          console.error(err);
        },
      }),
      onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors) console.log(graphQLErrors);
        if (networkError) console.log(networkError);
      }),
      requestLink,
      new HttpLink({
        uri: 'http://localhost:8163/graphql',
        credentials: 'include',
      }),
    ]),
    cache,
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
