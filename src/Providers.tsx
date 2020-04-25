import {ApolloProvider} from '@apollo/react-hooks';
import {HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloClient} from 'apollo-client';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {getAccessToken} from './Auth/accessToken';
import AuthProvider from './Auth/AuthProvider';
import theme from './Style/theme';

interface ProvidersProps {}

const accessToken = getAccessToken();

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8163/graphql',
    credentials: 'include',
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  }),
  cache: new InMemoryCache(),
});

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default Providers;
