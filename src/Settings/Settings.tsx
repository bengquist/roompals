import React, {useContext} from 'react';
import {Button} from 'react-native';
import {AuthContext} from 'src/Auth/AuthProvider';

// type SettingsNavProp = BottomTabNavigationProp<RootParamList, 'Settings'>;

// type Props = {
//   navigation: SettingsNavProp;
// };

function Settings() {
  const {removeUser} = useContext(AuthContext);

  return (
    <>
      <Button title="Logout" onPress={removeUser} />
    </>
  );
}

export default Settings;
