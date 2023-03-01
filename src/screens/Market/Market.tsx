import {Box, ScreenHeader} from '@components';
import * as React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from 'theme';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import Gainers from './Components/Gainers';

interface MarketProps {}
const ICON_SIZE = 25;

const renderScene = SceneMap({
  TASI: Gainers,
  NOMU: Gainers,
  TM30: Gainers,
});
const Market = (props: MarketProps) => {
  const layout = useWindowDimensions();

  const renderLabel = ({route, focused}: any) => {
    return (
      <Text
        style={{
          color: focused ? theme.colors.green : theme.colors.text,
          fontSize: 15,
          minWidth: 100,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        {route.title}
      </Text>
    );
  };
  const renderIndicator = ({route, focused}: any) => {
    if (focused) {
      return <Box width={300} height={1} bg={'green'} />;
    }
  };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'TASI', title: 'TASI'},
    {key: 'NOMU', title: 'NOMU'},
    {key: 'TM30', title: 'TM30'},
  ]);
  return (
    <Box flex={1}>
      <ScreenHeader
        title="Markets"
        fontSize={30}
        iconRight={
          <Icon
            name={'ios-search'}
            size={ICON_SIZE}
            color={theme.colors.primary}
          />
        }
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: theme.colors.green, height: 2}}
            renderLabel={renderLabel}
            style={{backgroundColor: theme.colors.headerBackground}}
          />
        )}
        initialLayout={{width: layout.width}}
      />
    </Box>
  );
};

export default Market;

const styles = StyleSheet.create({});
