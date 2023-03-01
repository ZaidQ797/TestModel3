import {AppPressable, Box, Text} from '@components';
import {useAppTheme} from '@hooks';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from 'theme';
import data from '../../../assets/data.json';
import ListMarket from './ListMarket';
const Gainers = () => {
  const {colors} = useAppTheme();
  const [pressed, setPressed] = useState(0);
  const [marketData, setMarketData] = useState(data.times['52 weeks']);
  const [duration, setDuration] = useState(
    Object.keys(data.times).map(function (key) {
      return key;
    }),
  );
  return (
    <Box flex={1}>
      <Box
        marginTop="l"
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal="m">
        <Text
          variant="buttonLabel"
          numberOfLines={1}
          fontSize={18}
          color={'black'}>
          Top Gainers
        </Text>
        <Entypo name="align-top" size={20} />
      </Box>
      <View style={{marginTop: 20}}>
        <FlatList
          scrollEnabled={false}
          data={duration}
          numColumns={3}
          keyExtractor={item => item}
          renderItem={({item, index}) => {
            return (
              <AppPressable
                onPress={() => {
                  setPressed(index);
                  setMarketData(data?.times[item]);
                }}
                containerStyle={[
                  {
                    borderWidth: 1,
                    borderColor:
                      index === pressed
                        ? theme.colors.green
                        : theme.colors.border,
                  },
                  styles.durationContainer,
                ]}>
                <Text
                  fontWeight="500"
                  color={index === pressed ? 'green' : 'inputText'}>
                  {item}
                </Text>
              </AppPressable>
            );
          }}
        />
        <Box
          flexDirection="row"
          marginTop="m"
          marginLeft="l"
          width={'90%'}
          justifyContent="space-between">
          <Text fontWeight="500" color={'inputText'} fontSize={12}>
            Symbol
          </Text>
          <Text fontWeight="500" color={'inputText'} fontSize={12}>
            Pre-market %Change
          </Text>
          <Text fontWeight="500" color={'inputText'} fontSize={12}>
            Pre-market
          </Text>
        </Box>
        <FlatList
          contentContainerStyle={{
            borderWidth: 1,
            borderColor: theme.colors.textOnPrimary,
            borderRadius: 15,
            margin: 10,
            shadowColor: 'border',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 4,
          }}
          data={marketData}
          keyExtractor={item => item.ticker}
          renderItem={({item, index}) => {
            return <ListMarket item={item} index={index} />;
          }}
        />
      </View>
    </Box>
  );
};

export default Gainers;

const styles = StyleSheet.create({
  durationContainer: {
    padding: 8,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 3,
    width: '28%',
    borderRadius: 10,
    alignItems: 'center',
  },
});
