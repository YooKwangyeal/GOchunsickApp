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
  Dimensions,
} from 'react-native';
import LanguageModal from '../components/component/DropDown/languageDropDown';
import {RootStackNavigationProp} from '../views/RootStack';
import {useNavigation} from '@react-navigation/native';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    onMicPress: () => void;
    placeholder?: string;
}

export default function MainScreen({ onSendMessage, onMicPress, placeholder }: ChatInputProps) {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();

  placeholder = "예기고 싶은 속삭가 정해서 있다면 말해봐";

  const closeLanguageModal = () => {
    setLanguageModalVisible(false);
  };

  const handleSubmit = () => {
    navigation.navigate('TourScreen');
  };

  {/* 화면의 가로 길이를 가져온다 */}

  const { width } = Dimensions.get('window');

  const [message, setMessage] = useState('');

  {/* 메세지 전송 클릭시 해당 메세지랑 함께 해서 데이터를 보낸다 */}
  const handleSend = () => {
    if (message.trim()) {
      //onSendMessage(message.trim());
      setMessage('');
      //navigation.navigate('TourScreen', { message: message.trim()??'' });
    }
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

      <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            >
            <Text style={styles.submitButtonText}>다음</Text>
      </TouchableOpacity>

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
  bear: {
    width: 180,
    height: 300,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F8F8F8',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 50,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    lineHeight: 20,
    maxHeight: 100,
    paddingVertical: 8,
    paddingRight: 8,
    color: '#333',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  iconButton: {
    padding: 8,
    marginLeft: 4,
  },
  buttonImage: {
    width: 24,
    height: 24,
  },
  sendButtonActive: {
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
  },
  sendButtonInactive: {
    opacity: 0.5,
  },
  submitButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});