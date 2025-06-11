import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import LanguageModal from '../components/component/DropDown/languageDropDown';

export default function MainScreen() {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  const closeLanguageModal = () => {
    setLanguageModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Content */}
      <View style={styles.content}>
        <View style={styles.speechBubble}>
          <Text style={styles.speechText}>
            본격 음식에 이어{'\n'}
            오세요라는 제주식 인사어!
          </Text>
        </View>

        {/* 캐릭터 영역 */}
        <View style={styles.characterContainer}>
          <View style={styles.character}>
            <Image source={require('../../assets/images/chunMain.png')} style={styles.bear} />
          </View>
        </View>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Language Modal */}
      <LanguageModal
        visible={isLanguageModalVisible}
        onClose={closeLanguageModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 15,
    padding: 5,
  },
  headerButtonText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  speechBubble: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    marginBottom: 10,
    position: 'relative',
  },
  speechText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  characterContainer: {
    alignItems: 'center',
  },
  character: {
    width: 180,
    height: 300,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterEmoji: {
    fontSize: 60,
  },
  bottomControls: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    bottom: 32,
  },
  bear: {
    width: 180,
    height: 300,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    width: '70%',
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});