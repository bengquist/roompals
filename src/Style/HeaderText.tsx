import React from 'react';
import styled from 'styled-components/native';
import colors from './colors';

interface HeaderTextProps {}

const HeaderText: React.FC<HeaderTextProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default HeaderText;

const Container = styled.Text`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  color: ${colors.white};
`;
