import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Activity from '../Activity/Activity';
import Money from '../Money/Money';
import Responsibility from '../Responsibility/Responsibility';
import Settings from '../Settings/Settings';

export type RootParamList = {
  Responsibility: undefined;
  Money: undefined;
  Activity: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
