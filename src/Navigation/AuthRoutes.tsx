import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../Auth/Login';
import Register from '../Auth/Register';

interface AuthRoutesProps {}

const Stack = createStackNavigator();

const AuthRoutes: React.FC<AuthRoutesProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        options={{header: () => null}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerTitle: 'Sign Up'}}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
