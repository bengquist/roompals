import React from 'react';
import CircleIconButton from 'src/Style/CircleIconButton';
import styled from 'styled-components/native';
import {Chore} from './types';

interface ChoreCardProps {
  chore: Chore;
}

const ChoreCard: React.FC<ChoreCardProps> = ({chore}) => {
  return (
    <Container>
      <Emoji>{chore.emoji}</Emoji>
      <Inner>
        <Username>{chore.owner}</Username>
        <Title>{chore.title}</Title>
      </Inner>
      <CircleIconButton icon={chore.isCompleted ? 'check' : 'bell'} />
    </Container>
  );
};

export default ChoreCard;

const Container = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  background: white;
  border-radius: 5px;
`;

const Inner = styled.View`
  flex: 1;
  margin-right: 8px;
`;

const Username = styled.Text`
  font-size: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
`;

const Emoji = styled.Text`
  font-size: 30px;
  margin-right: 8px;
`;
