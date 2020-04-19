import React from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

interface ChoreProps {}

const Chore: React.FC<ChoreProps> = ({}) => {
  return (
    <View>
      <Calendar
        current={'2020-04-18'}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat={'MMMM yyyy'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        disableMonthChange={true}
      />
      <Text>Chore</Text>
    </View>
  );
};

export default Chore;
