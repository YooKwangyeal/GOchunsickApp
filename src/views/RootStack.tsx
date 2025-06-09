import React from 'react';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Intro from '../screens/Intro';
import mainScreen from '../screens/MainTempScreen';
import AxiosScreen from '../screens/AxiosTet';
import { TextStyle , TouchableOpacity , View , Image } from 'react-native';
import styles from '../../assets/css/styles'; 
import DropDownTrigger from '../components/component/index';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Mainpage: undefined;
  Kakaopage : undefined; // 추가된 페이지
  AxiosScreen: undefined; // Axios 테스트 페이지
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={Intro} />
    <Stack.Screen  name="Mainpage" component={mainScreen} options={headerOption({title : ''})} />
    <Stack.Screen name="AxiosScreen" component={AxiosScreen} />
  </Stack.Navigator>
);

const headerOption = ({title}:{title: string}) => {
    return ({
        headerTitle: title, 
        headerStyle: { 
          backgroundColor: "#FFE600",
        },
        headerTitleStyle: {
          fontSize: 18,
          color: "#000", //"#fff" "black" "red" "blue" "green" 그 외
          fontWeight: "bold" as TextStyle['fontWeight'] //"200", "300", "600", "800" 그 외
        },
        headerRight: () => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <DropDownTrigger />
              <TouchableOpacity>
                <Image source={require('../../assets/images/menu.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>
          );
        },
        headerShadowVisible: false
  })};

export default RootStack;


