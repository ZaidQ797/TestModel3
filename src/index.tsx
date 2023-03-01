import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Alert, Linking} from 'react-native';

import theme from './theme';
import {navigationRef} from './services/navigation';
import MainNav from './navigation/MainNavigator';
const App = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <BottomSheetModalProvider>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen component={MainNav} name="MainNav" />
          </RootStack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
