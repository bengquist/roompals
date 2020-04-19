import React from 'react';
import styled from 'styled-components/native';

interface CenterProps {}

const Center: React.FC<CenterProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default Center;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
