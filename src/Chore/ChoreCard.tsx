import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {Chore} from './types';

interface ChoreCardProps {
  chore: Chore;
}

const ChoreCard: React.FC<ChoreCardProps> = ({chore}) => {
  return (
    <Container>
      <Text>{chore.emoji}</Text>
      <Text>{chore.title}</Text>
    </Container>
  );
};

export default ChoreCard;

const Container = styled.TouchableOpacity`
  padding: 8px;
  flex-direction: row;
`;
