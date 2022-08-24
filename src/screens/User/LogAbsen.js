/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import {StatusBar, StyleSheet, Text, View, FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {windowWidth, windowHeight} from '../../utils';

import {getLogAbsen} from '../../store/reducer/logAbsen';

export default function LogAbsen({navigation}) {
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
      return [];
    }
  }, [logAbsen]);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={memoizedValue}
            ListEmptyComponent={
              <Text style={styles.emptyData}>Log Absen tidak ditemukan...</Text>
            }
            refreshing={isLoadingLogAbsen}
            onRefresh={() => {
              dispatch(getLogAbsen(pengguna?.result?.siswa_id));
            }}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.itemHari}>
                  {item?.haritanggal_formated}
                </Text>
                <View style={styles.itemMasukPulangWrapper}>
                  <Text style={styles.itemMasukPulang}>
                    masuk: {item?.absen_masuk}
                  </Text>
                  <Text style={styles.itemMasukPulang}>
                    Pulang: {item?.absen_pulang}
                  </Text>
                </View>
              </View>
            )}
            contentContainerStyle={[
              styles.flatlist,
              {paddingBottom: memoizedValue?.length > 28 ? '40%' : '25%'},
            ]}
          />
        </View>
        <RectButton
          onPress={() =>
            navigation.canGoBack()
              ? navigation.goBack()
              : navigation.navigate('HomeUser')
          }
          style={styles.button}>
          <Text style={styles.buttonTitle}>Kembali</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172B36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: windowWidth * 0.05,
    paddingBottom: '8%',
    paddingTop: '3%',
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  flatlistWrapper: {
    height: '85%',
    backgroundColor: 'white',
    borderRadius: windowWidth * 0.05,
    overflow: 'hidden',
  },
  emptyData: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
  flatlist: {
    backgroundColor: 'white',
    padding: '4%',
    paddingVertical: '7%',
    minHeight: windowHeight,
  },
  separator: {
    height: '0.2%',
    backgroundColor: 'white',
    marginVertical: '2%',
  },
  item: {
    minHeight: windowWidth * 0.12,
    backgroundColor: '#D9D9D9',
    borderRadius: windowWidth * 0.03,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    marginBottom: '3%',
  },
  itemHari: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  itemMasukPulangWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemMasukPulang: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
  button: {
    backgroundColor: '#E3A400',
    padding: '3.5%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginTop: '4%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-Bold',
  },
});
