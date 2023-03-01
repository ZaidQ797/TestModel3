import {StyleSheet} from 'react-native';
import React from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import Animated, {
  Layout,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import theme from '../../../theme';
import {useAppTheme} from '@hooks';
import {AppPressable, Box, Text} from '@components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
  onPress: (id: number) => void;
  index: number;
  item: {
    img: string;
    ticker: string;
    name: string;
    market_change: string;
    pre_market: string;
  };
};
const IMAGE_SIZE = 30;
const AnimatedBox = Animated.createAnimatedComponent(Box);

const ListMarket = ({item, onPress, index}: Props) => {
  const {colors, spacing, borderRadii} = useAppTheme();

  return (
    <AnimatedBox
      entering={SlideInDown.delay(index < 10 ? index * 100 : 0).duration(500)}
      layout={Layout}
      exiting={SlideOutDown}>
      <AppPressable
        android_ripple={{color: colors.cardBackgroundHighlight}}
        containerStyle={[
          {
            borderTopRightRadius: index == 0 ? 10 : 0,
            borderTopLeftRadius: index == 0 ? 10 : 0,
            borderBottomRightRadius: index == 3 ? 10 : 0,
            borderBottomLeftRadius: index == 3 ? 10 : 0,
            backgroundColor: colors.textOnPrimary,
            paddingVertical: spacing.s,
            paddingRight: spacing.m,
          },
          styles.container,
        ]}>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flexDirection="row" width={'50%'}>
            <FastImage
              source={{uri: item.img}}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.logo}
            />
            <Box marginLeft="m">
              <Text color="black" style={styles.tricker}>
                {item.ticker}
              </Text>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
            </Box>
          </Box>
          <Text style={styles.change} numberOfLines={1}>
            {item.market_change}
          </Text>
          <Text style={styles.market} numberOfLines={1} textAlign="right">
            {item.pre_market}
          </Text>
        </Box>
      </AppPressable>

      {index !== 3 && (
        <Box height={1} width={'100%'} backgroundColor="border" />
      )}
    </AnimatedBox>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: IMAGE_SIZE - 10,
    minHeight: IMAGE_SIZE + 30,
    // shadow
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  change: {
    alignSelf: 'center',
    width: '38%',
    color: theme.colors.green,
    fontWeight: '500',
  },
  market: {
    alignSelf: 'center',
    width: '12%',
    color: theme.colors.black,
    fontWeight: '500',
  },
  logo: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    alignSelf: 'center',
  },
  tricker: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
  },
  name: {
    fontSize: 12,
    fontWeight: '400',
    width: '60%',
    color: theme.colors.tabBarInvactive,
  },
});
export default React.memo(ListMarket);
