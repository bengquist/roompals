import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import CircleIconButton from 'src/Style/CircleIconButton';
import Padding from 'src/Style/Padding';
import {LoginInput, SocialContainer} from './styles';
import {AuthNavProps} from './types';

const Register: React.FC<AuthNavProps<'Register'>> = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View>
      <Padding>
        <LoginInput
          placeholder="Username"
          onChangeText={(text) => setUser(text)}
          value={user}
        />
        <LoginInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <LoginInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <LoginInput
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <Button onPress={() => console.log('yo')}>Sign Up</Button>
      </Padding>

      <Center>
        <Text>or</Text>
      </Center>

      <Padding>
        <Center>
          <SocialContainer>
            <CircleIconButton icon="facebook" />
            <CircleIconButton icon="twitter" />
            <CircleIconButton icon="google" />
          </SocialContainer>
        </Center>
      </Padding>
    </View>
  );
};

export default Register;
