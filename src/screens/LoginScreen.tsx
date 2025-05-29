import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput style={styles.input} placeholder="아이디 입력" />
      <TextInput style={styles.input} placeholder="비밀번호 입력" secureTextEntry />
      <Button title="로그인" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  }
});
