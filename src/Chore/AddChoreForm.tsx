import React, {ReactText, useState} from 'react';
import DateInput from 'src/Style/DateInput';
import Input from 'src/Style/Input';
import Padding from 'src/Style/Padding';
import PickerWithLabel from 'src/Style/PickerWithLabel';
import Button from '../Style/Button';

interface AddChoreFormProps {}

const AddChoreForm: React.FC<AddChoreFormProps> = ({}) => {
  const [choreName, setChoreName] = useState('');
  const [roommateStart, setRoommateStart] = useState<ReactText>('userid1');
  const [dateCycle, setDateCycle] = useState<ReactText>('month');
  const [date, setDate] = useState(new Date());

  return (
    <Padding>
      <Input
        labelText="Title"
        placeholder="Clean Bathroom"
        onChangeText={(text) => setChoreName(text)}
        value={choreName}
      />
      <DateInput
        labelText="Start Date"
        date={date}
        onDateChange={(selectedDate) => setDate(selectedDate)}
      />
      <PickerWithLabel
        labelText="Roommate"
        onValueChange={(value) => setRoommateStart(value)}
        selectedValue={roommateStart}
        pickerOptions={[
          {label: 'Blake', value: 'userid1'},
          {label: 'Jacob', value: 'userid2'},
          {label: 'Jessica', value: 'userid3'},
        ]}
      />
      <PickerWithLabel
        labelText="Cycle"
        onValueChange={(value) => setDateCycle(value)}
        selectedValue={dateCycle}
        pickerOptions={[
          {label: 'Daily', value: 'daily'},
          {label: 'Weekly', value: 'weekly'},
          {label: 'Monthly', value: 'monthly'},
        ]}
      />
      <Button>Add</Button>
    </Padding>
  );
};

export default AddChoreForm;
