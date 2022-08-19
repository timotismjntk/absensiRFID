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

import {windowWidth, windowHeight} from '../../utils';

import {getInformasiSingkat} from '../../store/reducer/informasiSingkat';

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
      return [];
    }
  }, [informasiSingkat]);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.wrapper}>
        <View style={styles.flatlistWrapper}>
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
    padding: '4%',
    paddingVertical: '7%',
  },
  emptyData: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
  item: {
    minHeight: windowWidth * 0.12,
    marginBottom: '4%',
    borderBottomWidth: windowWidth * 0.0012,
    paddingBottom: '3%',
  },
  separator: {
    height: '0.2%',
    backgroundColor: 'black',
    marginVertical: '2%',
  },
  itemHari: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
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
