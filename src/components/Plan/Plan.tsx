import {AppPressable, Text, Box} from '@components';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import theme from 'theme';

type Props = {
  type: string;
  id: number;
  value: string;
  period: string;
  watchlists: string;
  changePlan: string;
  paymentPeriod: string;
  onPress?: () => void;
  popular?: boolean;
  index: number;
};

const Plan = ({
  onPress,
  value,
  id = 1,
  period,
  watchlists,
  changePlan,
  paymentPeriod,
  popular = false,
  type,
  index = 1,
}: Props) => {
  return (
    <AppPressable
      containerStyle={[
        styles.container,
        {
          borderColor: id === index ? theme.colors.green : theme.colors.border,
        },
      ]}
      onPress={onPress}>
      {popular && (
        <Box backgroundColor="green" style={styles.popular}>
          <Text
            fontSize={12}
            color="textOnPrimary"
            textAlign="center"
            variant="header"
            fontWeight="500">
            {'Popular Plan'}
          </Text>
        </Box>
      )}
      <Text
        marginTop="m"
        fontSize={18}
        color="black"
        textAlign="center"
        fontWeight="500">
        {type}
      </Text>
      <Text
        marginTop="m"
        fontSize={25}
        color="green"
        textAlign="center"
        fontWeight="500">
        {value}
      </Text>
      <Box
        marginTop="m"
        width={'100%'}
        marginBottom="l"
        height={2}
        backgroundColor="border"
        marginVertical="s"
      />
      <Text fontSize={11.5} color="buttonDisabledText" textAlign="center">
        Payment period
      </Text>
      <Text
        marginTop="s"
        fontSize={16.5}
        color="green"
        textAlign="center"
        fontWeight="500">
        {period}
      </Text>
      <Box
        marginTop="m"
        width={'100%'}
        marginBottom="l"
        height={2}
        backgroundColor="border"
        marginVertical="s"
      />
      <Text fontSize={12} color="buttonDisabledText" textAlign="center">
        Watchlists
      </Text>
      <Text
        marginTop="s"
        fontSize={16.5}
        color="black"
        textAlign="center"
        fontWeight="500">
        {watchlists}
      </Text>
      <Box
        marginTop="m"
        width={'100%'}
        marginBottom="l"
        height={2}
        backgroundColor="border"
        marginVertical="s"
      />
      <Text fontSize={12} color="buttonDisabledText" textAlign="center">
        Change the plan
      </Text>
      <Text
        marginTop="s"
        fontSize={16.5}
        color={changePlan === 'Yes' ? 'green' : 'black'}
        textAlign="center"
        fontWeight="500">
        {changePlan}
      </Text>
      <Box
        marginTop="m"
        width={'100%'}
        marginBottom="l"
        height={2}
        backgroundColor="border"
        marginVertical="s"
      />
      <Text fontSize={12} color="buttonDisabledText" textAlign="center">
        Payment period
      </Text>
      <Text
        marginTop="s"
        fontSize={16.5}
        color={paymentPeriod === '6 Month' ? 'green' : 'black'}
        textAlign="center"
        fontWeight="500"
        marginBottom="l">
        {paymentPeriod}
      </Text>
    </AppPressable>
  );
};

export default Plan;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 10,
    width: '30%',
    shadowColor: theme.colors.cardBackground,
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  popular: {
    width: '80%',
    alignSelf: 'center',
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    padding: 2,
  },
});
