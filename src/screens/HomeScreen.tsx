import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../views/RootStack';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>{t('HOME')}</Text>
      <Button
        title={t('Gologin')}
        onPress={() => navigation.navigate('Login')}
      />

      <Button
        title="메인 화면"
        onPress={() => navigation.navigate('Mainpage')}
      />

      <Button
        title="카카오 로그인"
        onPress={() => navigation.navigate('Kakaopage')}
      />

    </View>
  );
};

export default HomeScreen;