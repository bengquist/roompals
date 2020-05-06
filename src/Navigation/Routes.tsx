import React, {useContext} from 'react';
import {AuthContext} from '../Auth/AuthProvider';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  const {accessToken} = useContext(AuthContext);

  return accessToken ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
