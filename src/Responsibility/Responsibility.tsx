import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Chore from 'src/Chore/Chore';
import Grocery from 'src/Grocery/Grocery';

const Tab = createMaterialTopTabNavigator();

function Responsibility() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chores" component={Chore} />
      <Tab.Screen name="Groceries" component={Grocery} />
    </Tab.Navigator>
  );
}

export default Responsibility;
