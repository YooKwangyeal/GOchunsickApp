import React, { useState } from 'react';
import styles from '../../../assets/css/styles';
import { TouchableOpacity, Modal, View, Text ,Image } from 'react-native';
import i18next from 'i18next';

const DropDownTrigger = () => {
  const [visible, setVisible] = useState(false);

  const setLanguage = (lang: string) => {
    
    console.log(`언어 설정: ${lang}`);
    i18next.changeLanguage(lang);
    setVisible(false);
  }

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Image source={require('../../../assets/images/globe.png')} style={styles.icon} />
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity style={{ flex: 1 }} >
          <View style={{
            position: 'absolute', top: 60, right: 45, // 헤더 아래 위치
            backgroundColor: 'white', borderRadius: 8, padding: 10, elevation: 10
          }}>
            <Text onPress={() => setLanguage('kr')}>kr</Text>
            <Text onPress={() => setLanguage('en')}>en</Text>
            <Text onPress={() => setLanguage('jp')}>jp</Text>
            <Text onPress={() => setLanguage('cn')}>cn</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default DropDownTrigger;