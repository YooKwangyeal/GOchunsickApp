/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/views/RootStack.tsx';
import i18n from "./src/i18n";
import { I18nextProvider } from "react-i18next";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
    </I18nextProvider>  
  );
};

export default App;