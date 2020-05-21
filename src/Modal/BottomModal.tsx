import React from 'react';
import {Alert, Modal, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CenterBottom from 'src/Style/CenterBottom';
import colors from 'src/Style/colors';
import HeaderText from 'src/Style/HeaderText';
import styled from 'styled-components/native';

interface BottomModalProps {
  headerText: string;
  isVisible?: boolean;
  onDismiss: () => void;
}

const BottomModal: React.FC<BottomModalProps> = ({
  headerText,
  isVisible,
  onDismiss,
  children,
}) => {
  return (
    <CenterBottom>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <CenterBottom>
          <ModalView>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <IconContainer onPress={() => onDismiss()}>
                <FontAwesomeIcon name="times" size={28} color={colors.white} />
              </IconContainer>
            </Header>

            <View>{children}</View>
          </ModalView>
        </CenterBottom>
      </Modal>
    </CenterBottom>
  );
};

const ModalView = styled.View`
  width: 100%;
  background: white;
  align-items: center;
`;

const Header = styled.View`
  position: relative;
  background: ${colors.blueGreen};
  padding: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 14px;
`;

export default BottomModal;
