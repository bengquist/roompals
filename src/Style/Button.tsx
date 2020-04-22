import React from 'react';
import {Text, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {}

const Button: React.FC<Props> = ({children, ...props}) => {
  return (
    <Container {...props}>
      <Text style={{fontWeight: 'bold'}}>{children}</Text>
    </Container>
  );
};

export default Button;

const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  padding: 16px;
  align-items: center;
`;
