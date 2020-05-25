import {Formik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {useSignUpMutation} from 'src/generated/graphql';
import Button from 'src/Style/Button';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
import * as Yup from 'yup';
import {AuthNavProps} from './types';

type RegisterValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

const Register: React.FC<AuthNavProps<'Register'>> = ({navigation}) => {
  const [signup] = useSignUpMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const signupHandler = async (values: RegisterValues) => {
    try {
      await signup({variables: values});
      navigation.navigate('Login');
    } catch (err) {
      setErrorMessage(err.graphQLErrors[0].message);
    }
  };

  return (
    <Formik
      validationSchema={RegisterSchema}
      initialValues={defaultValues}
      onSubmit={signupHandler}>
      {({handleChange, handleBlur, handleSubmit, touched, values, errors}) => (
        <ScrollView>
          <Padding>
            <Text>{errorMessage}</Text>
            <Input
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              errorMessage={touched.username ? errors.username : null}
            />
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorMessage={touched.email ? errors.email : null}
            />
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errorMessage={touched.password ? errors.password : null}
            />
            <Input
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              errorMessage={
                touched.confirmPassword ? errors.confirmPassword : null
              }
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
        </ScrollView>
      )}
    </Formik>
  );
};

export default Register;
