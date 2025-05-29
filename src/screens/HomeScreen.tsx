import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../views/RootStack';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="로그인 하러가기"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;