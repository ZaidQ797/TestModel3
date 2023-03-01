import React from 'react';
import {Platform} from 'react-native';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppTheme} from '@hooks';
import {TabBarButton} from '@components';
import {Market, BottomSheet, Subscriptions} from '@screens';

export type MainTabParamList = {
  Markets: undefined;
  Subscriptions: undefined;
  BottomSheet: undefined;
};
export type MainRootStackParamList = {
  MainTabScreens: NavigatorScreenParams<MainTabParamList>;
};
const MainTab = createBottomTabNavigator<MainTabParamList>();
const MainTabScreens = () => {
  const {colors} = useAppTheme();
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accentText,
        tabBarInactiveTintColor: colors.tabBarInvactive,
        tabBarButton: props => <TabBarButton {...props} />,
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          switch (route.name) {
            case 'Markets':
              iconName = 'chart-line';
              break;
            case 'Subscriptions':
              iconName = 'more';
              break;
            case 'BottomSheet':
              iconName = 'tab';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <MainTab.Screen component={Market} name="Markets" />
      <MainTab.Screen component={Subscriptions} name="Subscriptions" />
      <MainTab.Screen component={BottomSheet} name="BottomSheet" />
    </MainTab.Navigator>
  );
};

const RootStack = createStackNavigator<MainRootStackParamList>();
const RootStackScreens = () => {
  return (
    <RootStack.Navigator
      initialRouteName="MainTabScreens"
      screenOptions={{headerShown: false}}>
      <RootStack.Screen component={MainTabScreens} name={'MainTabScreens'} />
    </RootStack.Navigator>
  );
};

export default RootStackScreens;
