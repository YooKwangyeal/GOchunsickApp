import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
} from '@react-native-seoul/kakao-login';
import ResultView from './IntroView';

const SERVER_URL = 'http://10.0.2.2:8000/api/user';

const Intro = () => {
  const [result, setResult] = useState<string>('');
  const [profile, setProfile] = useState<any>(null);

  // 로그인 및 정보 조회 후 서버에 전송
  const signInAndSendInfo = async (): Promise<void> => {
    try {
      const token = await login();
      const profileData = await getKakaoProfile();
      setProfile(profileData); // 프로필 정보 저장

      // 필요한 정보만 추출
      const userData = {
        nickname: profileData.nickname ?? '',
        email: profileData.email ?? '',
        m_gender: profileData.gender ?? '',
        m_sns_key: profileData.id?.toString() ?? '',
        m_sns_type: 'kakao',
      };

      // 서버에 정보 전송 및 DB 저장 요청
      const response = await fetch(`${SERVER_URL}/insertUser`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
      });

      const serverResult = await response.json();
      setResult(`로그인 및 등록 성공: ${JSON.stringify(serverResult)}`);
    } catch (err) {
      console.error('login or server error', err);
      setResult('로그인 및 등록 에러');
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      setResult(message);
      setProfile(null); // 로그아웃 시 프로필 정보 초기화
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {profile && (
        <View style={styles.profileBox}>
          <Text style={styles.profileTitle}>카카오 프로필 정보</Text>
          <Text style={styles.profileJson}>
            {JSON.stringify(profile, null, 2)}
          </Text>
        </View>
      )}
      <ResultView result={result} />
      <Pressable style={styles.button} onPress={signInAndSendInfo}>
        <Text style={styles.text}>카카오 로그인 및 정보 등록</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={signOutWithKakao}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
  },
  profileBox: {
    width: '90%',
    backgroundColor: '#fffbe7',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  profileTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  profileJson: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
  },
});
