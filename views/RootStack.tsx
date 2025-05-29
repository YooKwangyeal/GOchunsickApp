import React from 'react';
import {createNativeStackNavigator,
       NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation , RouteProp , useRoute} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const onPress = () => {
    navigation.navigate('Detail', { id: 1 });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
};


type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
const DetailScreen = () => {
  const {params} = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <Text>Detail {params.id}</Text>
    </View>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;