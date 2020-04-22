import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {}

const Button: React.FC<Props> = ({children, ...props}) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
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

const ButtonText = styled.Text`
  font-weight: bold;
  color: white;
`;
