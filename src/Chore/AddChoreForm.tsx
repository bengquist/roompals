import {Picker} from '@react-native-community/picker';
import React, {useState} from 'react';
import {View} from 'react-native';
import Input from 'src/Style/Input';

interface AddChoreFormProps {}

const AddChoreForm: React.FC<AddChoreFormProps> = ({}) => {
  const [roommateName, setRoommateName] = useState('');
  const [choreCycle, setChoreCycle] = useState('Month');

  return (
    <View>
      <Input
        labelText="Title"
        placeholder="Clean Bathroom"
        onChangeText={(text) => setRoommateName(text)}
        value={roommateName}
      />
      <Picker
        onValueChange={(value) => setChoreCycle(value)}
        selectedValue={choreCycle}>
        <Picker.Item label="Day" value="day" />
        <Picker.Item label="Week" value="week" />
        <Picker.Item label="Month" value="month" />
      </Picker>
    </View>
  );
};

export default AddChoreForm;
