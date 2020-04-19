import {format} from 'date-fns';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import colors from 'src/Style/colors';

interface ChoreProps {}

const Chore: React.FC<ChoreProps> = ({}) => {
  const [date, setDate] = useState(format(Date.now(), 'yyyy-MM-dd'));

  const onDateSelect = ({dateString}: {dateString: string}) => {
    setDate(dateString);
  };

  const markedDates = {
    [date]: {selected: true},
  };

  return (
    <View>
      <Calendar
        theme={{
          arrowColor: colors.purple,
          selectedDayBackgroundColor: colors.purple,
        }}
        current={date}
        markedDates={markedDates}
        onDayPress={onDateSelect}
      />
      <Text>{date}</Text>
    </View>
  );
};

export default Chore;
