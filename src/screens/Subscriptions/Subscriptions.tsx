import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Box, Button, Plan, ScreenHeader, Text} from '@components';
interface SubscriptionsProps {}

const Subscriptions = (props: SubscriptionsProps) => {
  const [id, setId] = React.useState(-1);
  return (
    <Box flex={1} backgroundColor="textOnPrimary">
      <ScreenHeader
        title="Subscriptions"
        backgroundColor="textOnPrimary"
        titleColor="black"
        titleCenter={true}
        fontSize={16}
        variant="buttonLabel"
      />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Text
          marginTop="xs"
          adjustsFontSizeToFit
          fontSize={22}
          textAlign="center"
          variant="buttonLabel"
          color="black">
          {'Choose Your Plan'}
        </Text>
        <Text
          marginTop="s"
          fontSize={13}
          color="tabBarInvactive"
          textAlign="center"
          style={styles.smallText}>
          {'We have compared the plans to make it easier for you to choose'}
        </Text>
        <Box
          flexDirection="row"
          marginTop="l"
          justifyContent="space-around"
          marginHorizontal="s">
          <Plan
            onPress={() => {
              setId(0);
            }}
            id={id}
            index={0}
            type={'Basic'}
            value={'$10'}
            period={'1 Month'}
            watchlists={'5 items'}
            changePlan={'No'}
            paymentPeriod={'1 Month'}
          />
          <Plan
            onPress={() => {
              setId(1);
            }}
            index={1}
            id={id}
            popular
            type={'Standard'}
            value={'$20'}
            period={'3 Month'}
            watchlists={'10 items'}
            changePlan={'Yes'}
            paymentPeriod={'3 Month'}
          />
          <Plan
            onPress={() => {
              setId(2);
            }}
            id={id}
            index={2}
            type={'Premium'}
            value={'$30'}
            period={'6 Month'}
            watchlists={'15 items'}
            changePlan={'No'}
            paymentPeriod={'6 Month'}
          />
        </Box>
        <Button
          label="Subscribe"
          marginTop="l"
          width={'95%'}
          alignSelf="center"
          backgroundColor="headerBackground"
          style={{
            borderRadius: 13,
          }}
        />
      </ScrollView>
    </Box>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {},
  smallText: {width: '75%', alignSelf: 'center'},
});
