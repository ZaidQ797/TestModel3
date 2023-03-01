import {View, Pressable} from 'react-native';
import React from 'react';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {useAppTheme} from '@hooks';

const TabBarButton = ({children, style, ...props}: BottomTabBarButtonProps) => {
  const {colors} = useAppTheme();
  console.log(props);
  return (
    <Pressable {...props} style={[style, {justifyContent: 'center'}]}>
      {props.accessibilityState?.selected ? (
        <View
          style={{
            width: 70,
            height: 70,
          }}>
          {children}
        </View>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default TabBarButton;
