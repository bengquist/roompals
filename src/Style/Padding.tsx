import React from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface PaddingProps extends ViewProps {
  padding?: number;
}

const Padding: React.FC<PaddingProps> = ({
  children,
  padding = 16,
  ...props
}) => {
  return (
    <Container style={{padding}} {...props}>
      {children}
    </Container>
  );
};

export default Padding;

const Container = styled.View`
  width: 100%;
  align-items: center;
`;
