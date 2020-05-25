import React from 'react';
import {TouchableHighlightProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableHighlightProps {}

const Button: React.FC<Props> = ({children, ...props}) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;

const Container = styled.TouchableHighlight`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  padding: 16px;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  color: white;
`;
