import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import i18next from 'i18next';

interface LanguageModalProps {
  visible: boolean;
  onClose: () => void;
}

const languages = [
  { code: 'ko', name: '한국어' },
  { code: 'en', name: 'English' },
  { code: 'jp', name: '日本語' },
  { code: 'cn', name: '中文 (简体)' },
];

const { width, height } = Dimensions.get('window');

export default function LanguageModal({ visible, onClose }: LanguageModalProps) {
  const selectLanguage = (languageCode: string) => {
    console.log('Selected language:', languageCode);
    i18next.changeLanguage(languageCode);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />
        
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>다국어지원</Text>
          </View>
          
          <View style={styles.languageList}>
            {languages.map((language) => (
              <TouchableOpacity
                key={language.code}
                style={styles.languageButton}
                onPress={() => selectLanguage(language.code)}
              >
                <Text style={styles.languageText}>{language.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* 캐릭터 영역 */}
          <View style={styles.characterContainer}>
            <View style={styles.character}>
              <Text style={styles.characterEmoji}>🍊</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    backgroundColor: '#FFD700',
    width: width * 0.8,
    maxHeight: height * 0.7,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  languageList: {
    width: '100%',
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  languageText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  characterContainer: {
    alignItems: 'center',
  },
  character: {
    width: 80,
    height: 80,
    backgroundColor: '#FF8C00',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  characterEmoji: {
    fontSize: 30,
  },
});