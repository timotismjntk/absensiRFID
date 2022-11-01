/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  windowWidth,
  windowHeight,
  moderateScale,
  verticalScale,
  scale,
} from '../utils';

export default function Menu({
  data = 15,
  header = null,
  stickyHeader = false,
  theme = null,
  rightIconBackgroundColor = null,
  numColumn = null,
}) {
  const gridItemStyle = useMemo(() => {
    if (Number(numColumn) > 1) {
      return {
        backgroundColor: theme || 'white',
        width: (windowWidth / numColumn) * 0.7,
        height: (windowWidth / numColumn) * 0.6,
        elevation: 2,
        borderWidth: 0.4,
        borderColor: '#C9C9C9',
        borderRadius: windowWidth * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',
      };
    }
  }, [numColumn, theme]);

  const renderItem = useCallback(
    ({item, index}) => {
      if (Number(numColumn) === 0 || Number(numColumn) === 1) {
        return (
          <View
            style={[styles.defaultItem, {backgroundColor: theme || 'white'}]}>
            <View
              style={
                item?.icon
                  ? styles.customIconWrapper
                  : styles.defaultIconWrapper
              }>
              <Image
                style={styles.icon}
                source={
                  item?.icon || {
                    uri: `https://picsum.photos/200/300?random=${
                      new Date().getMilliseconds() * (index + 1)
                    }`,
                  }
                }
              />
            </View>
            <View style={styles.itemCenterContent}>
              <Text
                numberOfLines={1}
                style={[
                  styles.itemCenterContentTitle,
                  {color: theme ? 'white' : '#3281ff'},
                ]}>
                {item?.title || 'Math'}
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  styles.itemCenterContentSubTitle,
                  {color: theme ? 'white' : '#3281ff'},
                ]}>
                {item?.subtitle || '7 Chapter'}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: rightIconBackgroundColor || 'transparent',
                height: windowWidth * 0.16,
                flex: 1 / 3.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons
                name="arrow-forward"
                size={30}
                color={theme ? 'white' : '#3281ff'}
              />
            </View>
            <RectButton
              rippleColor={theme ? 'grey' : 'white'}
              style={styles.button}
              onPress={item.fn}
            />
          </View>
        );
      } else {
        if (item) {
          return (
            <View
              style={[
                styles.gridItemContainer,
                {width: (windowWidth / numColumn) * 0.7},
              ]}>
              <View style={gridItemStyle}>
                <View
                  style={{
                    width: (windowWidth / numColumn) * 0.45,
                    height: (windowWidth / numColumn) * 0.45,
                  }}>
                  <Image
                    style={styles.icon}
                    source={
                      item?.icon || {
                        uri: `https://picsum.photos/200/300?random=${
                          new Date().getMilliseconds() * (index + 1)
                        }`,
                      }
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  width: (windowWidth / numColumn) * 0.7,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles.gridItemCenterContentTitle,
                    {
                      fontSize: (windowWidth / numColumn) * 0.11,
                    },
                  ]}>
                  {item?.title || 'Math'}
                </Text>
              </View>
              <RectButton
                rippleColor={theme ? 'grey' : 'white'}
                style={styles.button}
                onPress={item.fn}
              />
            </View>
          );
        } else {
          return (
            <View
              style={[
                gridItemStyle,
                {backgroundColor: 'transparent', elevation: 0, borderWidth: 0},
              ]}
            />
          );
        }
      }
    },
    [rightIconBackgroundColor, theme, numColumn, gridItemStyle],
  );

  const memoizedData = useMemo(() => {
    if (Array.isArray(data)) {
      if (data.length % Number(numColumn) === 0) {
        return data;
      } else {
        if (Number(numColumn) === 0 || Number(numColumn) === 1) {
          return data;
        } else {
          return data.concat(
            Array(Number(numColumn) - (data.length % Number(numColumn))).fill(
              '',
            ),
          );
        }
      }
    } else {
      if (data % Number(numColumn) === 0) {
        return data;
      } else {
        return Array(data + Number(numColumn) - (data % Number(numColumn)));
      }
    }
  }, [data, numColumn]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        stickyHeaderIndices={stickyHeader ? [0] : null}
        numColumns={numColumn}
        columnWrapperStyle={numColumn > 1 && styles.columnWrapperStyle}
        ListHeaderComponent={
          header || (
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>Semua Pelajaran</Text>
              <Text style={styles.headerSubTitle}>Kelas 12 - IPA</Text>
            </View>
          )
        }
        data={memoizedData}
        nestedScrollEnabled
        style={{height: windowHeight * 0.3}} // to make it can scroll when nested vertical
        renderItem={renderItem}
        contentContainerStyle={styles.menuContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    marginBottom: '3%',
  },
  headerTitle: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Bold',
    paddingBottom: '1%',
  },
  headerSubTitle: {
    color: 'grey',
    fontSize: windowWidth * 0.032,
    fontFamily: 'OpenSans-Regular',
    paddingBottom: '2%',
  },
  menuContainer: {
    paddingVertical: '2%',
    paddingBottom: '8%',
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: '3%',
  },
  gridItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItemCenterContentTitle: {
    color: 'black',
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    marginTop: '3%',
  },
  defaultItem: {
    alignSelf: 'center',
    padding: '5%',
    paddingRight: 0,
    marginBottom: '4%',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.85,
    height: windowWidth * 0.16,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultIconWrapper: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: windowWidth * 0.12,
    overflow: 'hidden',
  },
  customIconWrapper: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemCenterContent: {
    flex: 1,
    paddingLeft: '4%',
    paddingRight: '2%',
  },
  itemCenterContentTitle: {
    color: 'black',
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-Bold',
  },
  itemCenterContentSubTitle: {
    color: 'grey',
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    position: 'absolute',
    borderRadius: windowWidth * 0.02,
    width: '100%',
    height: '100%',
  },
});
