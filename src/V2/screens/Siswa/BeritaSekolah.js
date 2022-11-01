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

import {
  windowWidth,
  windowHeight,
  verticalScale,
  moderateScale,
} from '../../utils';

import {getBeritaSekolah} from '../../redux/reducer/beritaSekolah';

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
      return [1,1,1,1,1,1];
    }
  }, [berita]);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
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
  flatlist: {
    padding: '4%',
    minHeight: windowHeight,
  },
  emptyData: {
    fontSize: moderateScale(13),
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    backgroundColor: 'white',
    padding: '4%',
    borderRadius: moderateScale(10),
  },
  item: {
    minHeight: moderateScale(80),
    paddingHorizontal: '2%',
    backgroundColor: 'white',
    borderRadius: moderateScale(13),
  },
  separator: {
    height: '0.2%',
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
