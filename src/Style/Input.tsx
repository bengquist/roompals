import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  labelText?: string;
  errorMessage?: string | null;
}

const Input: React.FC<InputProps> = ({labelText, errorMessage, ...props}) => {
  return (
    <Container>
      {labelText && <Label>{labelText}</Label>}
      <TextInput autoCapitalize="none" {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;

const Container = styled.View`
  position: relative;
  margin-top: 16px;
`;

const TextInput = styled.TextInput`
  border-radius: 5px;
  border-color: gray;
  border-width: 2px;
  padding: 16px;
  font-size: 16px;
`;

const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  background: white;
  z-index: 1;
`;

const ErrorMessage = styled.Text`
  color: red;
  padding-top: 4px;
`;
