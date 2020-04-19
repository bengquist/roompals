import {format} from 'date-fns';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import colors from 'src/Style/colors';
import ChoreCard from './ChoreCard';

interface ChoreProps {}

const chores = [
  {
    emoji: '🚽',
    owner: 'Blacob',
    title: 'Clean Bathroom',
    isCompleted: false,
    cycleDate: '2020-04-20',
  },
  {
    emoji: '🐈',
    owner: 'Jessicat',
    title: 'Clean Kitty Litter',
    isCompleted: true,
    cycleDate: '2020-04-21',
  },
];

const Chore: React.FC<ChoreProps> = ({}) => {
  const [date, setDate] = useState(format(Date.now(), 'yyyy-MM-dd'));

  const onDateSelect = ({dateString}: {dateString: string}) => {
    setDate(dateString);
  };

  const markedDates = {
    '2020-04-16': {marked: true},
    '2020-04-17': {marked: true},
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

      <FlatList
        data={chores}
        renderItem={({item}) => <ChoreCard chore={item} />}
      />
    </View>
  );
};

export default Chore;
