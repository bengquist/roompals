/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Activity from './Activity/Activity';
import Money from './Money/Money';
import Responsibility from './Responsibility/Responsibility';
import Settings from './Settings/Settings';

declare const global: {HermesInternal: null | {}};

export type RootStackParamList = {
  Responsibility: undefined;
  Money: undefined;
  Activity: undefined;
  Preference: undefined;
};

const Tab = createBottomTabNavigator();

const App = () => {
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
};

export default App;
