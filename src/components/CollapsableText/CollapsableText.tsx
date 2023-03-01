import {StyleProp, TextStyle, Pressable, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppTheme} from '@hooks';
import Box from '../Box';
import Text from '../Text';
type Props = {
  text: string;
  minNumberOfLines: number;
  style?: StyleProp<TextStyle>;
};
const CollapsableText = ({text, style, minNumberOfLines}: Props) => {
  const {colors} = useAppTheme();
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(
    undefined,
  );
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const onTextLayout = useCallback(
    e => {
      if (e.nativeEvent.lines.length > minNumberOfLines && !expanded) {
        setNumberOfLines(minNumberOfLines);
        setShowMore(true);
      }
    },
    [expanded],
  );
  return (
    <Box>
      <Box>
        <Text
          numberOfLines={numberOfLines}
          onTextLayout={onTextLayout}
          style={style}>
          {text}
        </Text>
      </Box>

      {showMore && (
        <Pressable
          onPress={() => {
            setExpanded(true);
            setShowMore(false);
            setNumberOfLines(undefined);
          }}>
          <Box
            padding={'xs'}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end">
            <Icon name="chevron-down" size={14} color={colors.secondary} />
          </Box>
        </Pressable>
      )}
    </Box>
  );
};

export default CollapsableText;

const styles = StyleSheet.create({
  viewMoreText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginLeft: 2,
  },
});
