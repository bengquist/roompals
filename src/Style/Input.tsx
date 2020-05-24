import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  labelText?: string;
}

const Input: React.FC<InputProps> = ({labelText, ...props}) => {
  return (
    <Container>
      {labelText && <Label>{labelText}</Label>}
      <TextInput autoCapitalize="none" {...props} />
    </Container>
  );
};

export default Input;

const Container = styled.View`
  position: relative;
`;

const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  background: white;
  z-index: 1;
`;

const TextInput = styled.TextInput`
  border-radius: 5px;
  border-color: gray;
  border-width: 2px;
  padding: 16px;
`;
