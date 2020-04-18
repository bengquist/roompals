import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button} from 'react-native';
import {RootParamList} from '../Navigation/Routes';

type SettingsNavProp = BottomTabNavigationProp<RootParamList, 'Settings'>;

type Props = {
  navigation: SettingsNavProp;
};

function Settings({navigation}: Props) {
  return (
    <>
      <Button
        title="Go to Activity"
        onPress={() => navigation.navigate('Activity', {name: 'sup'})}
      />
    </>
  );
}

export default Settings;
