import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../../assets/css/styles'; 

const MainTempScreen = () => {
  const { t } = useTranslation();

  return (
    <ScrollView >
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>
            {t('MAIN_TITLE')}
          </Text>
        </View>
        <View style={styles.bubbleTail} />
      </View>
      {/* Character Image */}
      <Image source={require('../../assets/images/chunMain.png')} style={styles.bear} />
      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#aaa"
        />
      </View>
    </ScrollView>
  );
};

export default MainTempScreen;
