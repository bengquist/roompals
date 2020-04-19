import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

interface CircleIconButtonProps {
  icon: string;
}

const CircleIconButton: React.FC<CircleIconButtonProps> = ({icon}) => {
  return (
    <Container>
      <FontAwesomeIcon name={icon} />
    </Container>
  );
};

export default CircleIconButton;

const Container = styled.TouchableOpacity``;
