import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle 
} from 'react-native';

interface SurveyOptionProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  multiSelect?: boolean;
  style?: ViewStyle;
}

const SurveyOption: React.FC<SurveyOptionProps> = ({
  label,
  selected,
  onPress,
  multiSelect = false,
  style
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.option,
        selected ? styles.selectedOption : styles.unselectedOption,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text 
        style={[
          styles.optionText,
          selected ? styles.selectedText : styles.unselectedText
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    marginHorizontal: 4,
    minWidth: 100,
  },
  selectedOption: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#000000',
  },
  unselectedOption: {
    backgroundColor: '#FFFFFF',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedText: {
    color: '#000000',
  },
  unselectedText: {
    color: '#666666',
  },
});

export default SurveyOption;