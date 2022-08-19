/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import {
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  Linking,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {windowWidth, windowHeight} from '../../utils';

import {getBeritaSekolah} from '../../store/reducer/beritaSekolah';

export default function BeritaSekolah({navigation}) {
  const dispatch = useDispatch();
  const {pengguna} = useSelector(state => state.auth);
  const {
    beritaSekolah: {result: berita},
    isLoadingBeritaSekolah,
  } = useSelector(state => state.beritaSekolah);

  useEffect(() => {
    if (pengguna?.result?.website_id?.length > 0) {
      dispatch(getBeritaSekolah(pengguna?.result?.website_id));
    }
  }, [pengguna]);

  const memoizedValue = useMemo(() => {
    if (berita?.length > 0) {
      return berita;
    } else {
      return [];
    }
  }, [berita]);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={memoizedValue}
            ListEmptyComponent={
              <Text style={styles.emptyData}>Berita tidak ditemukan...</Text>
            }
            progressViewOffset={-windowHeight * 0.03}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            onRefresh={() => {
              dispatch(getBeritaSekolah(pengguna?.result?.website_id));
            }}
            refreshing={isLoadingBeritaSekolah}
            renderItem={({item}) => {
              return (
                <RectButton
                  onPress={() => {
                    if (item?.url?.length > 0) {
                      Linking.openURL(item?.url);
                    }
                  }}
                  style={styles.item}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={styles.itemJudul}>
                    {item?.judul}
                  </Text>
                  <Text style={styles.itemHari}>
                    {item?.haritanggal_formated}
                  </Text>
                  <Text style={styles.itemKonten}>{item?.cuplikan}</Text>
                </RectButton>
              );
            }}
            contentContainerStyle={styles.flatlist}
          />
        </View>
        <RectButton onPress={() => navigation.goBack()} style={styles.button}>
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
  flatlist: {
    backgroundColor: 'white',
    padding: '2%',
    paddingTop: '5%',
    paddingBottom: '15%',
    minHeight: windowHeight * 0.8,
  },
  emptyData: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
  item: {
    minHeight: windowWidth * 0.12,
    paddingHorizontal: '2%',
  },
  separator: {
    height: '0.2%',
    backgroundColor: 'black',
    marginVertical: '2%',
  },
  itemJudul: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
    marginBottom: '1%',
  },
  itemHari: {
    fontSize: windowWidth * 0.028,
    fontFamily: 'OpenSans-Italic',
    color: 'black',
    marginBottom: '1%',
  },
  itemKonten: {
    fontSize: windowWidth * 0.03,
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
