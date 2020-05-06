import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext} from 'react';
import {Button} from 'react-native';
import {AuthContext} from 'src/Auth/AuthProvider';
import {useLogoutMutation} from 'src/generated/graphql';

// type SettingsNavProp = BottomTabNavigationProp<RootParamList, 'Settings'>;

// type Props = {
//   navigation: SettingsNavProp;
// };

function Settings() {
  const {setUser} = useContext(AuthContext);
  const [logout, {client}] = useLogoutMutation();

  const logoutHandler = async () => {
    await logout();
    await AsyncStorage.removeItem('token');
    setUser('');
    await client?.resetStore();
  };

  return (
    <>
      <Button title="Logout" onPress={logoutHandler} />
    </>
  );
}

export default Settings;
