import React from 'react';
import styled from 'styled-components/native';

interface CenterProps {
  flex?: number;
}

const Center: React.FC<CenterProps> = ({flex, children}) => {
  return <Container style={{flex}}>{children}</Container>;
};

export default Center;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
