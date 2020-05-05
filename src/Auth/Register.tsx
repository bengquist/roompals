import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSignUpMutation} from 'src/generated/graphql';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import CircleIconButton from 'src/Style/CircleIconButton';
import Padding from 'src/Style/Padding';
import {LoginInput, SocialContainer} from './styles';
import {AuthNavProps} from './types';

const defaultValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register: React.FC<AuthNavProps<'Register'>> = () => {
  const [signup] = useSignUpMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const signupHandler = async (values) => {
    try {
      await signup({variables: values});
    } catch (err) {
      setErrorMessage(err.graphQLErrors[0].message);
    }
  };

  return (
    <Formik initialValues={defaultValues} onSubmit={signupHandler}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Padding>
            <Text>{errorMessage}</Text>
            <LoginInput
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            <LoginInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <LoginInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <LoginInput
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            <Button onPress={handleSubmit}>Sign Up</Button>
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
      )}
    </Formik>
  );
};

export default Register;
