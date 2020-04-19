import React from 'react';
import AuthProvider from './Auth/AuthProvider';

interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
