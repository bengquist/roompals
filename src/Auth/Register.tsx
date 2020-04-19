import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from './AuthProvider';
import {AuthNavProps} from './types';

const Register: React.FC<AuthNavProps<'Register'>> = ({navigation}) => {
  const {login} = useContext(AuthContext);

  return (
    <View>
      <Text onPress={() => navigation.navigate('Login')}>Go to login</Text>
      <Text>or</Text>
      <Button title="Register" onPress={() => login('blake')} />
    </View>
  );
};

export default Register;
