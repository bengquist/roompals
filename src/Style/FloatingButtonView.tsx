import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BottomModal from 'src/Modal/BottomModal';
import styled from 'styled-components/native';
import colors from './colors';

interface FloatingButtonViewProps {}

const FloatingButtonView: React.FC<FloatingButtonViewProps> = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      {children}

      <BottomModal isVisible={isVisible} onDismiss={() => setIsVisible(false)}>
        <Text>yo</Text>
      </BottomModal>

      <ButtonContainer onPress={() => setIsVisible(true)}>
        <FontAwesomeIcon name="plus" size={28} color="white" />
      </ButtonContainer>
    </View>
  );
};

export default FloatingButtonView;

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: 16px;

  height: 56px;
  width: 56px;
  background: ${colors.coral};
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
  elevation: 5;
`;
