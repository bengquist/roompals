import React from 'react';
import {Text} from 'react-native';
import Center from 'src/Style/Center';

interface ChoreProps {}

const Chore: React.FC<ChoreProps> = ({}) => {
  return (
    <Center>
      <Text>Chore</Text>
    </Center>
  );
};

export default Chore;
