import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = (props) => {
  return <Container autoCapitalize="none" {...props} />;
};

export default Input;

const Container = styled.TextInput`
  border-radius: 5px;
  border-color: gray;
  border-width: 2px;
  padding: 16px;
`;
