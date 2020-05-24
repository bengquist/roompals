import React from 'react';
import styled from 'styled-components/native';

interface PaddedViewProps {}

const PaddedView: React.FC<PaddedViewProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default PaddedView;

const Container = styled.View`
  padding: 16px;
`;
