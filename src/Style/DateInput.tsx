import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import Input from './Input';

interface DateInputProps {
  labelText: string;
  date: Date;
  onDateChange: (date: Date) => void;
}

const DateInput: React.FC<DateInputProps> = ({
  labelText,
  date,
  onDateChange,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dateChangeHandler = (_: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    onDateChange(currentDate);
    setShowDatePicker(false);
    Keyboard.dismiss();
  };

  return (
    <View>
      <Input
        labelText={labelText}
        onFocus={(e) => {
          e.preventDefault();
          setShowDatePicker(true);
        }}
        value={format(date, 'MMMM do, yyyy')}
      />
      {showDatePicker && (
        <DateTimePicker value={date} onChange={dateChangeHandler} />
      )}
    </View>
  );
};

export default DateInput;
