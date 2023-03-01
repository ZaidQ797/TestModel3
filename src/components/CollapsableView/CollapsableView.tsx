import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Pressable,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedRef,
  useDerivedValue,
  withSpring,
  measure,
  runOnUI,
  Extrapolate,
  interpolateColor,
} from 'react-native-reanimated';

import Box from '../Box';
import Text from '../Text';
import theme from 'theme';

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
type Props = {
  header: string | (() => JSX.Element);
  content: () => JSX.Element;
  opened?: boolean;
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  chevonOpenColor?: string;
  chevonClosedColor?: string;
  headerItem?: string;
};

/**
 *
 * NOTE: This component will work only if colapsable part is of absolute height,
 * Dynamic size components will not work as expected
 */
const CollapsableView = ({
  header,
  content,
  style = {},
  headerStyle,
  titleStyle,
  chevonOpenColor = 'black',
  chevonClosedColor = 'black',
  headerItem,
}: Props) => {
  const aref = useAnimatedRef<View>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0),
  );
  const height = useSharedValue(0);
  const aStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      progress.value,
      [0, 1],
      [-180, 0],
      Extrapolate.CLAMP,
    );
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [chevonClosedColor, chevonOpenColor],
    );
    return {
      transform: [{rotate: `${rotation}deg`}],
      color,
      marginLeft: 10,
    };
  }, []);

  const aContStyle = useAnimatedStyle(() => {
    return {
      height: height.value * progress.value + 1,
      opacity: progress.value === 0 ? 0 : 1,
    };
  });
  return (
    <Box style={style} flex={1}>
      <Pressable
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              'worklet';
              height.value = measure(aref).height;
            })();
          }
          open.value = !open.value;
        }}>
        <AnimatedBox
          flexDirection="row"
          alignItems="center"
          style={headerStyle}>
          <Box>
            {typeof header === 'string' ? (
              <Box flexDirection="row">
                <Text style={[styles.title, titleStyle]} numberOfLines={1}>
                  {header}
                </Text>
                <Text
                  style={[
                    styles.title,
                    titleStyle,
                    {color: theme.colors.lightBlue},
                  ]}
                  numberOfLines={1}>
                  {headerItem}
                </Text>
              </Box>
            ) : header ? (
              header()
            ) : null}
          </Box>
          {/*@ts-ignore*/}
          <AnimatedIcon style={aStyle} name="chevron-up" size={24} />
        </AnimatedBox>
      </Pressable>
      <Animated.View style={[{overflow: 'hidden'}, aContStyle]}>
        <View ref={aref} onLayout={() => {}}>
          {content()}
        </View>
      </Animated.View>
    </Box>
  );
};

export default CollapsableView;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
