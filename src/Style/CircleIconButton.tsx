import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import colors from './colors';

interface CircleIconButtonProps extends TouchableOpacityProps {
  icon: string;
  iconSize?: number;
  iconColor?: string;
  buttonSize?: number;
}

const CircleIconButton: React.FC<CircleIconButtonProps> = ({
  icon,
  buttonSize = 56,
  iconSize = 20,
  iconColor = 'white',
  ...props
}) => {
  return (
    <Container size={buttonSize}>
      <FontAwesomeIcon
        name={icon}
        size={iconSize}
        color={iconColor}
        {...props}
      />
    </Container>
  );
};

export default CircleIconButton;

const Container = styled.TouchableOpacity<{size: number}>`
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;
  background: ${colors.purple};
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
