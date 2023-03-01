import {
  Box,
  Button,
  CollapsableView,
  ScreenHeader,
  ListItem,
} from '@components';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from 'theme';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import {spacing} from '@shopify/restyle';
import {useAppTheme} from '@hooks';
import data from '../../assets/data.json';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
interface MarketProps {}
const ICON_SIZE = 25;
const SHEET_HEIGHT = 500;
const HEIGHT = 300;

const BottomSheet = (props: MarketProps) => {
  const [index, setIndex] = useState(0);
  const tabBarHeight = useBottomTabBarHeight();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {spacing, colors} = useAppTheme();
  const snapPoints = useMemo(() => [SHEET_HEIGHT], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <Box flex={1}>
      <ScreenHeader title="Sheet" fontSize={30} />
      <Box flex={1} style={styles.container}>
        <Button
          label="OPEN SHEET"
          backgroundColor="headerBackground"
          onPress={handlePresentModalPress}
        />
      </Box>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        style={{
          padding: spacing.m,
        }}
        backgroundStyle={{borderRadius: 20}}
        snapPoints={snapPoints}
        handleComponent={props => (
          <Box
            height={3}
            width={'40%'}
            bg="cardBackgroundHighlight"
            alignSelf="center"
          />
        )}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: tabBarHeight + spacing.l,
          }}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            {data.years.length > 0 && (
              <CollapsableView
                style={[
                  styles.collapsableView,
                  {
                    marginTop: 20,
                    marginBottom: spacing.s,
                  },
                ]}
                headerStyle={{
                  paddingVertical: spacing.s,
                }}
                titleStyle={{
                  color: colors.black,
                  letterSpacing: 1,
                }}
                chevonOpenColor={colors.lightBlue}
                chevonClosedColor={colors.lightBlue}
                header={`Anuual: `}
                headerItem={`${data.years[0]?.fy} ${data.years[0]?.year}`}
                content={() => (
                  <Box height={HEIGHT}>
                    <Box style={styles.divider} />

                    {data.years.map((item, index) => {
                      return (
                        <ListItem
                          key={item.id}
                          text={item.fy}
                          year={item.year}
                        />
                      );
                    })}
                    <Button
                      label="Save"
                      marginTop="l"
                      backgroundColor="headerBackground"
                      style={{
                        borderRadius: 13,
                      }}
                      onPress={() => bottomSheetModalRef?.current?.close()}
                    />
                  </Box>
                )}
              />
            )}
          </Box>
          <Box style={styles.divider} />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            {data.years.length > 0 && (
              <CollapsableView
                style={[
                  styles.collapsableView,
                  {
                    marginTop: 10,
                    marginBottom: spacing.m,
                  },
                ]}
                headerStyle={{
                  paddingVertical: spacing.s,
                }}
                titleStyle={{
                  color: colors.black,
                  letterSpacing: 1,
                }}
                chevonOpenColor={colors.lightBlue}
                chevonClosedColor={colors.lightBlue}
                header={`Quarterly: `}
                headerItem={`${data.quarters[0]?.year} ${data.quarters[0]?.quarter}`}
                content={() => (
                  <Box height={HEIGHT}>
                    <Box style={styles.divider} />

                    {data.quarters.map((item, index) => {
                      return (
                        <ListItem
                          key={item.id}
                          year={item.year}
                          text={item.quarter}
                        />
                      );
                    })}
                    <Button
                      label="Save"
                      marginTop="l"
                      backgroundColor="headerBackground"
                      style={{
                        borderRadius: 13,
                      }}
                      onPress={() => bottomSheetModalRef?.current?.close()}
                    />
                  </Box>
                )}
              />
            )}
          </Box>
        </ScrollView>
      </BottomSheetModal>
    </Box>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
  },
  collapsableView: {},
  divider: {
    height: 1,
    width: '110%',
    backgroundColor: theme.colors.border,
    marginTop: 5,
  },
});
