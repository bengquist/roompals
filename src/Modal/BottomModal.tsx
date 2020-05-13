import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';

interface BottomModalProps {}

const BottomModal: React.FC<BottomModalProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      animated
      animationType="fade"
      visible={isVisible}
      transparent
      onRequestClose={handleDismiss}>
      <View style={styles.overlay}>...</View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
});
