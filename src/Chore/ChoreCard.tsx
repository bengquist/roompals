import React from 'react';
import {Text} from 'react-native';
import {Chore} from './types';

interface ChoreCardProps {
  chore: Chore;
}

const ChoreCard: React.FC<ChoreCardProps> = ({chore}) => {
  return <Text>{chore.title}</Text>;
};

export default ChoreCard;
