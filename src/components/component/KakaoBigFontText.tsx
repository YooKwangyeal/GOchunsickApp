import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BigFontProps {
  children: React.ReactNode,
  style?: any,
}

const CustomBigFontText: React.FC<BigFontProps> = ({
  children,
  style
}) => {
  return (
    <Text style={[styles.defaultFont , style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily : 'KakaoBigFont',
  },
  
});

export default CustomBigFontText;