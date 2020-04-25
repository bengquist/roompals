import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {AuthContext} from '../Auth/AuthProvider';
import Center from '../Style/Center';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

export default function Routes() {
  const {user, getUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getUser();

      console.log(data);

      setLoading(false);
    })();
  }, [getUser]);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}
