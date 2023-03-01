import {StatusBar, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppTheme} from '@hooks';
import Animated, {SlideInRight, SlideInUp} from 'react-native-reanimated';

import Box from '../Box';
import Text from '../Text';
import AppPressable from '../AppPressable';
import FastImage from 'react-native-fast-image';
import {backgroundColor, ResponsiveValue} from '@shopify/restyle';
const IMAGE_SIZE = 45;
const SIDE_ITEMS_SIZE = 25;
const ICON_SIZE = 20;
const AnimatedBox = Animated.createAnimatedComponent(Box);

type ScreenHeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackButtonPress?: () => void;
  iconRight?: JSX.Element;
  onRightButtonPress?: () => void;
  isConversation?: boolean;
  avatar?: string;
  isActive?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  titleCenter?: boolean;
  variant?: string;
  fontSize?: ResponsiveValue<number | undefined, {}>;
};
const ScreenHeader = ({
  title,
  showBackButton = false,
  onRightButtonPress,
  iconRight,
  onBackButtonPress,
  fontSize,
  titleCenter,
  variant = 'header',
  titleColor = 'textOnPrimary',
  backgroundColor = 'headerBackground',
}: ScreenHeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useAppTheme();
  const [blur, setBlur] = useState(0);
  const renderRightIcon = useCallback(() => {
    if (typeof iconRight === 'string') {
      return (
        <Icon
          name={iconRight}
          size={ICON_SIZE}
          color={colors.headerForeground}
        />
      );
    } else if (typeof iconRight === 'function') {
      return iconRight;
    } else {
      return null;
    }
  }, [iconRight, onRightButtonPress]);
  return (
    <Box
      backgroundColor={backgroundColor}
      style={{
        paddingTop: top + 10,
        paddingBottom: 38,
        marginBottom: -24,
        paddingHorizontal: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.headerBackground}
        animated
      />
      <Box flex={1}>
        <Text
          fontSize={fontSize}
          numberOfLines={1}
          lineHeight={40}
          style={{alignSelf: titleCenter ? 'center' : 'flex-start'}}
          adjustsFontSizeToFit
          variant={variant}
          color={titleColor}>
          {title}
        </Text>
      </Box>
      {renderRightIcon()}

    {iconRight && (
        <AppPressable
          onPress={onRightButtonPress}
          disabled={onRightButtonPress === undefined}
          containerStyle={styles.sideButton}></AppPressable>
      )}
    </Box>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  sideButton: {
    height: SIDE_ITEMS_SIZE,
    width: SIDE_ITEMS_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginRight: 10,
  },
  avatar: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    marginRight: 10,
  },
});
