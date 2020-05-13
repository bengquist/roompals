import {format} from 'date-fns';
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import BottomModal from 'src/Modal/BottomModal';
import colors from 'src/Style/colors';
import FloatingButton from 'src/Style/FloatingButton';
import styled from 'styled-components/native';
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
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  const onDateSelect = ({dateString}: {dateString: string}) => {
    const newDate = new Date(dateString);
    const utc = newDate.getTime() + newDate.getTimezoneOffset() * 60000;
    const utcDate = new Date(utc);

    setDate(utcDate);
  };

  const markedDates = {
    '2020-04-16': {marked: true},
    '2020-04-17': {marked: true},
    [format(date, 'yyyy-MM-dd')]: {selected: true},
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

      <ListContainer>
        <ListTitle>{format(date, 'EEEE, MMMM do')}</ListTitle>
        <FlatList
          data={chores}
          renderItem={({item}) => <ChoreCard chore={item} />}
          keyExtractor={(item) => item.title}
        />
      </ListContainer>

      <FloatingButton />
      <BottomModal />
    </View>
  );
};

export default Chore;

const ListContainer = styled.View`
  padding: 16px;
`;

const ListTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary};
`;
