import React from 'react';
import { ActivityIndicator, Pressable, PressableProps } from 'react-native';
import { ColorProps, createBox, useTheme } from '@shopify/restyle';

import Text from '../Text';
import type { Theme } from '../../theme';

const BaseButton = createBox<Theme, PressableProps>(Pressable);

type Props = React.ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & {
    label: string;
    isLoading?: boolean;
  };

const Button = ({
  label,
  isLoading,
  backgroundColor = 'primary',
  bg,
  disabled,
  onPress,
  ...rest
}: Props): JSX.Element => {
  const theme = useTheme<Theme>();
  const bgColor =
    disabled || isLoading ? 'buttonDisabled' : bg || backgroundColor;
  return (
    <BaseButton
      paddingVertical="m"
      paddingHorizontal="m"
      borderRadius="s"
      disabled={disabled}
      backgroundColor={bgColor}
      onPress={onPress}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors['buttonDisabledText']} />
      ) : (
        <Text
          variant="buttonLabel"
          numberOfLines={1}
          adjustsFontSizeToFit
          color={disabled ? 'buttonDisabledText' : 'textOnPrimary'}
        >
          {label}
        </Text>
      )}
    </BaseButton>
  );
};

BaseButton.defaultProps = BaseButton.defaultProps || {};
BaseButton.defaultProps.backgroundColor = 'primary';

export default Button;
