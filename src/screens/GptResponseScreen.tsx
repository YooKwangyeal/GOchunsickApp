import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../views/RootStack';

type GptResponseScreenRouteProp = RouteProp<RootStackParamList, 'GptResponseScreen'>;

const GptResponseScreen = ({ route }: { route: GptResponseScreenRouteProp }) => {
  const { duration, companions, styles, moreInfoInput } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>춘식이가 선택한 여행 취향</Text>
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>
            <Text style={styles.label}>여행 기간:</Text> {duration || '선택 안함'}
            {'\n\n'}
            <Text style={styles.label}>동행:</Text>{' '}
            {companions.length > 0 ? companions.join(', ') : '선택 안함'}
            {'\n\n'}
            <Text style={styles.label}>여행 스타일:</Text>{' '}
            {styles.length > 0 ? styles.join(', ') : '선택 안함'}
            {'\n\n'}
            <Text style={styles.label}>추가 정보:</Text> {moreInfoInput || '없음'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE600',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  responseContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  responseText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default GptResponseScreen;
