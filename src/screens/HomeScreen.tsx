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
    </View>
  );
};

export default HomeScreen;