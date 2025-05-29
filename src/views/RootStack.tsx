import React from 'react';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import DetailScreen from '../src/screens/DetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default RootStack;
