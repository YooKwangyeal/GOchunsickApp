import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootStack';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const DetailScreen = () => {
  const {params} = useRoute<DetailScreenRouteProp>();

  return (
    <View>
      <Text>Detail {params.id}</Text>
    </View>
  );
};

export default DetailScreen;
