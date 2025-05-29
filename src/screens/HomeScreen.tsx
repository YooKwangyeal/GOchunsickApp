import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../navigation/RootStack';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={() => navigation.navigate('Detail', {id: 1})} />
    </View>
  );
};

export default HomeScreen;
