import React,{useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation , DrawerActions} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Intro from '../screens/Intro';
import mainScreen from '../screens/MainScreen';
import AxiosScreen from '../screens/AxiosTet';
import MapScreen from '../screens/Map';
import TourScreen from '../screens/TourInfo'
import {TextStyle, TouchableOpacity, View, Image,StyleSheet , useWindowDimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../components/component/drawercomponet';
import LanguageModal from '../components/component/DropDown/languageDropDown';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Mainpage: undefined;
  Map: undefined; // 추가된 페이지
  AxiosScreen: undefined; // Axios 테스트 페이지
  Loading : undefined; // 로딩 페이지
  TourScreen : undefined; // 투어 정보 페이지
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function MainDrawer() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
    >
      <Drawer.Screen name="MainScreen" component={mainScreen} />
    </Drawer.Navigator>
  );
}

const RootStack = () => (
      <Stack.Navigator  screenOptions={headerOption({title: ''})}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mainpage" component={MainDrawer} />
        <Stack.Screen name="Login" component={Intro} />
        <Stack.Screen name="Map"  component={MapScreen} />
        <Stack.Screen name="AxiosScreen" component={AxiosScreen} />
        <Stack.Screen name="TourScreen" component={TourScreen} />
      </Stack.Navigator>
  
);

const headerOption = ({title}: {title: string}) => {
  return {
    headerTitle: title,
    headerStyle: {
      backgroundColor: '#FFE600',
    },
    headerTitleStyle: {
      fontSize: 18,
      color: '#000', //"#fff" "black" "red" "blue" "green" 그 외
      fontWeight: 'bold' as TextStyle['fontWeight'], //"200", "300", "600", "800" 그 외
    },
    headerRight: () => {
      const navigation = useNavigation();
      const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

      const openLanguageModal = () => {
        setLanguageModalVisible(true);
      };

      const closeLanguageModal = () => {
        setLanguageModalVisible(false);
      };
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={openLanguageModal}>
            <Image
              source={require('../../assets/images/globe.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={require('../../assets/images/menu.png')}
              style={styles.icon}
          />
          </TouchableOpacity>
          <LanguageModal
                  visible={isLanguageModalVisible}
                  onClose={closeLanguageModal}
          />
        </View>
        
      );
    },
    headerShadowVisible: false,
  };
};


const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginTop: 14
  }
});

export default RootStack;
