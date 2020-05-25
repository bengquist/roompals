import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CreateUserGroup from 'src/UserGroup/CreateUserGroup';
import JoinUserGroup from 'src/UserGroup/JoinUserGroup';

interface UserGroupRoutesProps {}

const Stack = createStackNavigator();

const UserGroupRoutes: React.FC<UserGroupRoutesProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        options={{header: () => null}}
        name="JoinUserGroup"
        component={JoinUserGroup}
      />
      <Stack.Screen
        options={{headerTitle: 'Create Group'}}
        name="CreateUserGroup"
        component={CreateUserGroup}
      />
    </Stack.Navigator>
  );
};

export default UserGroupRoutes;
