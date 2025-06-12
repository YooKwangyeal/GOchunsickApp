import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomBigFontText  from './KakaoBigFontText';
import CustomSmallFontText from './KakaoSmallFontText';  

interface SurveySectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const SurveySection: React.FC<SurveySectionProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <View style={styles.section}>
      <CustomBigFontText style={{fontSize: 18,}}>{title}</CustomBigFontText>
      {subtitle && (
        <CustomSmallFontText style={styles.sectionSubtitle}>{subtitle}</CustomSmallFontText>
      )}
      <View style={styles.optionsContainer}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: -4,
  },
});

export default SurveySection;