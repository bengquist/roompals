import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from './AuthProvider';
import {AuthNavProps} from './types';

const Login: React.FC<AuthNavProps<'Login'>> = ({navigation}) => {
  const {login} = useContext(AuthContext);

  return (
    <View>
      <Text onPress={() => navigation.navigate('Register')}>
        Go to register
      </Text>

      <Text>or</Text>
      <Button title="Login" onPress={() => login('blake')} />
    </View>
  );
};

export default Login;
