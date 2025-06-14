import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../views/RootStack';
import {useTranslation} from 'react-i18next';
import Config from 'react-native-config'

const API_URL_TYPE = Config.API_URL_TYPE??'none';

const HomeScreen = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View>
      <Text>{API_URL_TYPE}</Text>
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
        title="카카오 지도"
        onPress={() => navigation.navigate('Map')}
      />

      <Button
        title="Axios 테스트"
        onPress={() => navigation.navigate('AxiosScreen')}
      />

    </View>
  );
};

export default HomeScreen;
