import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import colors from './colors';

interface CircleIconButtonProps {
  icon: string;
}

const CircleIconButton: React.FC<CircleIconButtonProps> = ({icon}) => {
  return (
    <Container>
      <FontAwesomeIcon name={icon} size={20} color="white" />
    </Container>
  );
};

export default CircleIconButton;

const Container = styled.TouchableOpacity`
  padding: 15px;
  background: ${colors.purple};
  border-radius: 100px;
`;
