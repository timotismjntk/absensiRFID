/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import {StatusBar, StyleSheet, Text, View, FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {
  windowWidth,
  windowHeight,
  verticalScale,
  moderateScale,
} from '../../utils';

import {getLogAbsen} from '../../redux/reducer/logAbsen';

export default function Notifikasi({navigation}) {
  const dispatch = useDispatch();
  const {pengguna} = useSelector(state => state.auth);
  const {
    logAbsen: {result: logAbsen},
    isLoadingLogAbsen,
  } = useSelector(state => state.logAbsen);

  useEffect(() => {
    if (pengguna?.result?.siswa_id?.length > 0) {
      dispatch(getLogAbsen(pengguna?.result?.siswa_id));
    }
  }, [pengguna]);

  const memoizedValue = useMemo(() => {
    if (logAbsen?.length > 0) {
      return logAbsen;
    } else {
      return [1, 1, 1, 1, 1, 1];
    }
  }, [logAbsen]);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={memoizedValue}
          ListEmptyComponent={
            <Text style={styles.emptyData}>Log Absen tidak ditemukan...</Text>
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshing={isLoadingLogAbsen}
          onRefresh={() => {
            dispatch(getLogAbsen(pengguna?.result?.siswa_id));
          }}
          renderItem={({item, index}) => (
            <View
              style={[
                styles.item,
                {
                  minHeight: moderateScale(55 + Math.floor(Math.random() * 20)),
                },
              ]}
            />
          )}
          contentContainerStyle={[
            styles.flatlist,
            {paddingBottom: memoizedValue?.length > 28 ? '40%' : '25%'},
          ]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  emptyData: {
    fontSize: moderateScale(13),
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    backgroundColor: 'white',
    padding: '4%',
    borderRadius: moderateScale(10),
  },
  flatlist: {
    padding: '4%',
    paddingTop: '7%',
    minHeight: windowHeight,
  },
  separator: {
    height: '0.2%',
    marginVertical: '2%',
  },
  item: {
    minHeight: moderateScale(55),
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    paddingHorizontal: '3%',
    marginBottom: '3%',
    elevation: moderateScale(100),
  },
  itemHari: {
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  itemMasukPulangWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemMasukPulang: {
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
});
