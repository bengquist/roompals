import React from 'react';
import {Text, View} from 'react-native';
import CircleIconButton from 'src/Style/CircleIconButton';
import {flex} from 'src/Style/helpers';
import styled from 'styled-components/native';
import {Chore} from './types';

interface ChoreCardProps {
  chore: Chore;
}

const ChoreCard: React.FC<ChoreCardProps> = ({chore}) => {
  return (
    <Container>
      <Text>{chore.emoji}</Text>
      <View style={flex}>
        <Text>{chore.owner}</Text>
        <Text>{chore.title}</Text>
      </View>
      <CircleIconButton icon="bell" />
    </Container>
  );
};

export default ChoreCard;

const Container = styled.TouchableOpacity`
  padding: 8px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
