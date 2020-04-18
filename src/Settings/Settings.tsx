import {TabNavigationProp} from '@react-navigation/tab';
import React from 'react';
import {Button} from 'react-native';
import {RootStackParamList} from 'src/App';

type SettingsScreenNavProp = TabNavigationProp<RootStackParamList, 'Settings'>;

type Props = {
  navigation: SettingsScreenNavProp;
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
