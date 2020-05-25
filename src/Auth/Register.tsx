import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useSignUpMutation} from 'src/generated/graphql';
import Button from 'src/Style/Button';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
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
            <Input
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Input
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            <Button onPress={handleSubmit}>Sign Up</Button>
          </Padding>

          {/*
          TODO: Add social sign ups
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
          </Padding> */}
        </View>
      )}
    </Formik>
  );
};

export default Register;
