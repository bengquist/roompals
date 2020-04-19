import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Activity from '../Activity/Activity';
import {AuthContext} from '../Auth/AuthProvider';
import Money from '../Money/Money';
import Responsibility from '../Responsibility/Responsibility';
import Settings from '../Settings/Settings';
import Center from '../Style/Center';
import AuthRoutes from './AuthRoutes';
import {RootParamList} from './types';

const Tab = createBottomTabNavigator<RootParamList>();

export default function Routes() {
  const {user, getUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await getUser();
      setLoading(false);
    })();
  }, [getUser]);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  if (!user) {
    return <AuthRoutes />;
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

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Responsibility" component={Responsibility} />
      <Tab.Screen name="Money" component={Money} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
