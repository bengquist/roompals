import React, {useState} from 'react';
import {Text} from 'react-native';
import {useJoinUserGroupMutation, useMeQuery} from 'src/generated/graphql';
import Button from 'src/Style/Button';
import Center from 'src/Style/Center';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
import {UserGroupProps} from './types';

const JoinUserGroup: React.FC<UserGroupProps<'JoinUserGroup'>> = ({
  navigation,
}) => {
  const [groupName, setGroupName] = useState('');
  const {data: meData} = useMeQuery();
  const [joinUserGroup] = useJoinUserGroupMutation();

  const joinGroupHandler = async () => {
    if (groupName && meData?.me.id) {
      const what = await joinUserGroup({
        variables: {groupName, userId: meData?.me.id},
      });

      console.log(what.data?.joinUserGroup.id);
    }
  };

  return (
    <Center flex={1}>
      <Padding>
        <Input
          value={groupName}
          onChangeText={(value) => setGroupName(value)}
          placeholder="Group name"
        />
        <Button onPress={joinGroupHandler}>Join Group</Button>
        <Text>or</Text>
        <Button onPress={() => navigation.navigate('CreateUserGroup')}>
          Create Group
        </Button>
      </Padding>
    </Center>
  );
};

export default JoinUserGroup;
