import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useMeQuery} from 'src/generated/graphql';
import colors from 'src/Style/colors';
import Activity from '../Activity/Activity';
import Money from '../Money/Money';
import Responsibility from '../Responsibility/Responsibility';
import Settings from '../Settings/Settings';
import {RootParamList} from './types';
import UserGroupRoutes from './UserGroupRoutes';

interface AppRoutesProps {}

const Tab = createBottomTabNavigator<RootParamList>();

const AppRoutes: React.FC<AppRoutesProps> = ({}) => {
  const {data} = useMeQuery();

  if (!data?.me?.group?.id) {
    return <UserGroupRoutes />;
  }

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}: {color: string; size: number}) => {
          let iconName = '';

          if (route.name === 'Responsibility') {
            iconName = 'calendar';
          } else if (route.name === 'Money') {
            iconName = 'money';
          } else if (route.name === 'Activity') {
            iconName = 'bell';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }

          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: colors.blueGreen,
        activeBackgroundColor: colors.blueGreen,
      }}>
      <Tab.Screen name="Responsibility" component={Responsibility} />
      <Tab.Screen name="Money" component={Money} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default AppRoutes;
