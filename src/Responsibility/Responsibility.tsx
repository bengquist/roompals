import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {AuthContext} from '../Auth/AuthProvider';

function Responsibility() {
  const {logout} = useContext(AuthContext);

  return (
    <>
      <Button title="Logout" onPress={() => logout()} />
      <Text>Responsibilities</Text>
    </>
  );
}

export default Responsibility;
