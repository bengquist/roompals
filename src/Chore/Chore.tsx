import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import colors from 'src/Style/colors';
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

const GET_CHORES = gql`
  query Chores {
    chores {
      id
      title
      cycleDate
      emoji
    }
  }
`;

const Chore: React.FC<ChoreProps> = ({}) => {
  const {error, data} = useQuery(GET_CHORES);
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  console.log(error, data);

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
