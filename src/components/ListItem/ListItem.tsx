import {StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppTheme} from '@hooks';
import {AppPressable, Button} from '@components';

import Box from '../Box';
import Text from '../Text';

const BOX_SIZE = 60;
const MARGIN = 2;

type Props = {
  year: string;
  text: string;
};

const ListItem = ({year, text}: Props) => {
  const {colors, spacing} = useAppTheme();
  return (
    <Box style={{height: BOX_SIZE + 1 * MARGIN}} justifyContent="center">
      <Box flexDirection="row" style={styles.boxWrapper} alignItems="center">
        <Text paddingHorizontal="s" color="black" style={styles.itemRightText}>
          {year + ' ' + text}
        </Text>
      </Box>
    </Box>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 3,
    zIndex: 10,
  },
  boxWrapper: {
    marginTop: MARGIN * 2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRight: {
    flex: 1,
    height: BOX_SIZE - 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
    zIndex: 1,
    borderWidth: 1,
  },
  itemRightText: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1,
    lineHeight: 18,
    textAlign: 'center',
  },
  boxText: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    lineHeight: 18,
    textAlign: 'center',
  },
});
