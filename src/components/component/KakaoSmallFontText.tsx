import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SmallFontProps {
  children: React.ReactNode,
  style?: any,
}

const CustomSmallFontText: React.FC<SmallFontProps> = ({
  children,
  style
}) => {
  return (
    <Text style={[styles.defaultFont , style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily : 'KakaoSmallFont',
  },
  
});

export default CustomSmallFontText;