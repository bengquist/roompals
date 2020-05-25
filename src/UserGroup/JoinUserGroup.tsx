import React from 'react';
import {Text} from 'react-native';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
import {UserGroupProps} from './types';

const JoinUserGroup: React.FC<UserGroupProps<'JoinUserGroup'>> = ({
  navigation,
}) => {
  return (
    <Center flex={1}>
      <Padding>
        <Input placeholder="Group name" />
        <Button>Join Group</Button>
        <Text>or</Text>
        <Button onPress={() => navigation.navigate('CreateUserGroup')}>
          Create Group
        </Button>
      </Padding>
    </Center>
  );
};

export default JoinUserGroup;
