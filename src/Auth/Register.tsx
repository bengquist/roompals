import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSignUpMutation} from 'src/generated/graphql';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import CircleIconButton from 'src/Style/CircleIconButton';
import Padding from 'src/Style/Padding';
import {LoginInput, SocialContainer} from './styles';
import {AuthNavProps} from './types';

const Register: React.FC<AuthNavProps<'Register'>> = () => {
  const [signup] = useSignUpMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signupHandler = async () => {
    try {
      await signup({variables: {username, email, password}});
    } catch (err) {
      setErrorMessage(err.graphQLErrors[0].message);
    }
  };

  return (
    <View>
      <Padding>
        <Text>{errorMessage}</Text>
        <LoginInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
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
        <Button onPress={signupHandler}>Sign Up</Button>
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
