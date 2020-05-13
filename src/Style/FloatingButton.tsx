import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import colors from './colors';

interface FloatingButtonProps {}

const FloatingButton: React.FC<FloatingButtonProps> = ({}) => {
  return (
    <Container>
      <FontAwesomeIcon name="plus" size={24} color="white" />
    </Container>
  );
};

export default FloatingButton;

const Container = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  background: ${colors.purple};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
