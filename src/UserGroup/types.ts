import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type UserGroupParamList = {
  CreateUserGroup: undefined;
  JoinUserGroup: undefined;
};

export type UserGroupProps<T extends keyof UserGroupParamList> = {
  navigation: StackNavigationProp<UserGroupParamList, T>;
  route: RouteProp<UserGroupParamList, T>;
};
