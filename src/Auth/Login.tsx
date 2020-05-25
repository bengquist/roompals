import React, {useContext, useState} from 'react';
import {Text} from 'react-native';
import {useLogInMutation} from 'src/generated/graphql';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
import styled from 'styled-components/native';
import {AuthContext} from './AuthProvider';
import {AuthNavProps} from './types';

const Login: React.FC<AuthNavProps<'Login'>> = ({navigation}) => {
  const {setUser} = useContext(AuthContext);
  const [login] = useLogInMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    try {
      const {data} = await login({
        variables: {user: username, password: password},
      });

      if (data?.login.accessToken) {
        setUser(data?.login.accessToken);
      }
    } catch (err) {
      setErrorMessage(err.graphQLErrors[0].message);
    }
  };

  return (
    <Container>
      <Banner>
        <BannerText>roompals</BannerText>
      </Banner>

      <Padding>
        <Text>{errorMessage}</Text>
        <Input
          textContentType="username"
          placeholder="Email or username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Input
          textContentType="password"
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button onPress={loginHandler}>Log In</Button>
      </Padding>
      {/* 
      TODO: Add social login
      <Center>
        <SocialContainer>
          <CircleIconButton icon="facebook" />
          <CircleIconButton icon="twitter" />
          <CircleIconButton icon="google" />
        </SocialContainer>
      </Center> */}

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

const Banner = styled.View`
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  padding-top: 72px;
  padding-bottom: 16px;
`;

const BannerText = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: white;
`;
