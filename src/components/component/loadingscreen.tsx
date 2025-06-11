import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../views/RootStack';

type LoadingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Loading'>;

const { width, height } = Dimensions.get('window');

export default function LoadingScreen() {
  const navigation = useNavigation<LoadingScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      //navigation.replace('Login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.speechBubble}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
      
      {/* 캐릭터 영역 - 실제 이미지로 교체 예정 */}
      <View style={styles.characterContainer}>
        <View style={styles.character}>
          <Text style={styles.characterEmoji}>🍊</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  speechBubble: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginBottom: 50,
    position: 'relative',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  characterContainer: {
    alignItems: 'center',
  },
  character: {
    width: 150,
    height: 150,
    backgroundColor: '#FF8C00',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#333',
  },
  characterEmoji: {
    fontSize: 60,
  },
});