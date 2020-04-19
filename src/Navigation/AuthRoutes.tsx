import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

interface AuthRoutesProps {}

const Stack = createStackNavigator();

const AuthRoutes: React.FC<AuthRoutesProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
