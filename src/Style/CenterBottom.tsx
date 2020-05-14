import React from 'react';
import styled from 'styled-components/native';

interface CenterBottomProps {}

const CenterBottom: React.FC<CenterBottomProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default CenterBottom;

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
