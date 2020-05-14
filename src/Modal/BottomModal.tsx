import React from 'react';
import {Alert, Modal, StyleSheet, TouchableHighlight, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CenterBottom from 'src/Style/CenterBottom';
import colors from 'src/Style/colors';
import HeaderText from 'src/Style/HeaderText';
import styled from 'styled-components/native';

interface BottomModalProps {
  isVisible?: boolean;
  onDismiss: () => void;
}

const BottomModal: React.FC<BottomModalProps> = ({
  isVisible,
  onDismiss,
  children,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <CenterBottom>
          <View style={styles.modalView}>
            <Header>
              <HeaderText>Create</HeaderText>
              <IconContainer onPress={() => onDismiss()}>
                <FontAwesomeIcon name="times" size={28} color={colors.white} />
              </IconContainer>
            </Header>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}>
              {children}
            </TouchableHighlight>
          </View>
        </CenterBottom>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

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
