import React from 'react';
import {Button, View, Text} from 'react-native';
import KakaoLogins from '@react-native-seoul/kakao-login';
import { useTranslation } from 'react-i18next';

export default function LoginScreen() {
  const { t, i18n } = useTranslation();
  const handleLogin = async () => {
    try {
      const result = await KakaoLogins.login();
      console.log('카카오 로그인 성공:', result);
      // result.accessToken 등을 서버로 보내도 됨
    } catch (err) {
      console.warn('카카오 로그인 실패:', err);
    }
  };

  return (
    <View>
      <Text>{t('Login')}</Text>
      <Button title={t('kakaologin')} onPress={handleLogin} />
    </View>
  );
}
