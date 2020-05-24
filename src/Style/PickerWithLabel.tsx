import {Picker} from '@react-native-community/picker';
import {PickerProps} from '@react-native-community/picker/typings/Picker';
import React from 'react';
import styled from 'styled-components/native';

interface PickerWithLabelProps extends PickerProps {
  labelText: string;
  pickerOptions: {label: string; value: string}[];
}

const PickerWithLabel: React.FC<PickerWithLabelProps> = ({
  labelText,
  pickerOptions,
  ...props
}) => {
  const renderOptions = () => {
    return pickerOptions.map(({label, value}) => (
      <Picker.Item label={label} value={value} />
    ));
  };

  return (
    <Container>
      <Label>{labelText}</Label>
      <Picker {...props}>{renderOptions()}</Picker>
    </Container>
  );
};

export default PickerWithLabel;

const Container = styled.View`
  position: relative;
  border-radius: 5px;
  border-color: gray;
  border-width: 2px;
  padding: 4px 16px;
  margin-bottom: 16px;
`;

const Label = styled.Text`
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 5px;
  background: white;
  z-index: 1;
`;
