import React, {useContext} from 'react';
import {AuthContext} from '../Auth/AuthProvider';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

export default function Routes() {
  const {user} = useContext(AuthContext);

  return user ? <AppRoutes /> : <AuthRoutes />;
}
