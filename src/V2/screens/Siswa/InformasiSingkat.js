/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react';
import {
  Linking,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
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

import {getInformasiSingkat} from '../../redux/reducer/informasiSingkat';

export default function InformasiSingkat({navigation}) {
  const dispatch = useDispatch();
  const {pengguna} = useSelector(state => state.auth);
  const {
    informasiSingkat: {result: informasiSingkat},
    isLoadingInformasiSingkat,
  } = useSelector(state => state.informasiSingkat);

  useEffect(() => {
    if (pengguna?.result?.website_id?.length > 0) {
      dispatch(getInformasiSingkat(pengguna?.result?.website_id));
    }
  }, [pengguna]);

  const memoizedValue = useMemo(() => {
    if (informasiSingkat?.length > 0) {
      return informasiSingkat;
    } else {
      return [1, 1, 1, 1, 1, 1];
    }
  }, [informasiSingkat]);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <FlatList
          data={memoizedValue}
          ListEmptyComponent={
            <Text style={styles.emptyData}>Informasi tidak ditemukan...</Text>
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          onRefresh={() => {
            dispatch(getInformasiSingkat(pengguna?.result?.website_id));
          }}
          refreshing={isLoadingInformasiSingkat}
          progressViewOffset={-windowHeight * 0.03}
          renderItem={({item}) => {
            return (
              <RectButton
                onPress={() => {
                  if (item?.url?.length > 0) {
                    Linking.openURL(item?.url);
                  }
                }}
                style={styles.item}>
                <Text style={styles.itemHari}>
                  {item?.haritanggal_formated}
                </Text>
                <Text style={styles.itemKonten}>{item?.informasi}</Text>
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
    paddingVertical: '7%',
    minHeight: windowHeight,
  },
  item: {
    minHeight: moderateScale(80),
    backgroundColor: 'white',
    borderRadius: moderateScale(13),
    paddingHorizontal: '3%',
    marginBottom: '3%',
  },
  separator: {
    height: '0.2%',
    marginVertical: '2%',
  },
  itemHari: {
    fontSize: moderateScale(14),
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  itemKonten: {
    fontSize: moderateScale(13),
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
});
