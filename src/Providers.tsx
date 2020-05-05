import React from 'react';
import {ThemeProvider} from 'styled-components';
import AuthProvider from './Auth/AuthProvider';
import theme from './Style/theme';

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default Providers;
