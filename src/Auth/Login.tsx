import React, {useContext, useState} from 'react';
import {Text} from 'react-native';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import CircleIconButton from 'src/Style/CircleIconButton';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
import styled from 'styled-components/native';
import {AuthContext} from './AuthProvider';
import {AuthNavProps} from './types';

const Login: React.FC<AuthNavProps<'Login'>> = ({navigation}) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);

  return (
    <Container>
      <Padding>
        <Center>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>roompals</Text>
        </Center>
      </Padding>

      <Padding>
        <LoginInput
          style={{marginBottom: 16}}
          placeholder="Email or username"
          onChange={(text) => setUser(text)}
          value={user}
        />
        <LoginInput
          placeholder="Password"
          onChange={(text) => setPassword(text)}
          value={password}
        />
        <Button onPress={() => login('blake')}>Log In</Button>
      </Padding>

      <Center>
        <SocialContainer>
          <CircleIconButton icon="facebook" />
          <CircleIconButton icon="twitter" />
          <CircleIconButton icon="google" />
        </SocialContainer>
      </Center>

      <Center>
        <Text style={{marginBottom: 24}}>Don't have an account?</Text>
        <Button onPress={() => navigation.navigate('Register')}>Sign Up</Button>
      </Center>
    </Container>
  );
};

export default Login;

const Container = styled.View`
  height: 100%;
  justify-content: space-between;
`;

const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
`;

const LoginInput = styled(Input)`
  margin-bottom: 24px;
`;
