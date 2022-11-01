/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

import Dropdown from '../../../../components/DropDown';

import {windowWidth, windowHeight} from '../../../../utils';

import {getDataSiswa} from '../../../../redux/reducer/GURU/dataSiswa';

export default function AnggotaKelas({navigation}) {
  const dispatch = useDispatch();
  const [tahunAjaran, setTahunAjaran] = useState('');
  const [kelas, setKelas] = useState('');

  const {authGuru} = useSelector(state => state.authGuru);
  const {dataSiswa, isLoadingDataSiswa} = useSelector(state => state.dataSiswa);

  const lihatData = useCallback(() => {
    if (authGuru?.status === 'berhasil') {
      dispatch(
        getDataSiswa({
          tahun_masuk: tahunAjaran,
          website_id: authGuru?.result?.website_id,
        }),
      );
    }
  }, [authGuru?.result?.website_id, authGuru?.status, tahunAjaran]);

  const memoizedData = useMemo(() => {
    if (dataSiswa?.result?.siswas?.length > 0) {
      return dataSiswa?.result?.siswas;
    } else {
      return [];
    }
  }, [dataSiswa]);

  const WaliKelas = useCallback(() => {
    return (
      <RectButton
        style={styles.waliKelasContainer}
        onPress={() => navigation.navigate('ProfilGuruLain', dataSiswa)}>
        <View style={styles.profilPictureWrapper}>
          {dataSiswa?.url_foto && (
            <Image
              style={styles.profilPicture}
              source={{uri: dataSiswa?.url_foto}}
            />
          )}
        </View>
        <View>
          <Text style={styles.waliKelas}>Wali Kelas</Text>
          <Text style={styles.namaWaliKelas}>Budi Sentosa, S.Pd</Text>
        </View>
      </RectButton>
    );
  }, [dataSiswa]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        data={memoizedData}
        refreshing={isLoadingDataSiswa}
        onRefresh={() => {
          if (authGuru?.status === 'berhasil') {
            dispatch(
              getDataSiswa({
                tahun_masuk: tahunAjaran,
                website_id: authGuru?.result?.website_id,
              }),
            );
          }
        }}
        progressViewOffset={windowHeight * 0.15}
        ListHeaderComponent={
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <Text style={styles.inputTitle}>Tahun Ajaran</Text>
              <Dropdown
                type="year"
                selectedValue={tahunAjaran}
                setValue={setTahunAjaran}
                placeholder="- Pilih Tahun -"
              />
              <Text style={styles.inputTitle}>Kelas</Text>
              <Dropdown
                list={['7', '8', '9']}
                selectedValue={kelas}
                setValue={setKelas}
                placeholder="- Pilih Kelas -"
              />
              <RectButton
                style={
                  tahunAjaran && kelas ? styles.button : styles.disabledButton
                }
                enabled={tahunAjaran && kelas ? true : false}
                onPress={lihatData}>
                <Text style={styles.buttonTitle}>Lihat</Text>
              </RectButton>
            </View>
            <WaliKelas />
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Data Siswa kosong...</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <RectButton
            onPress={() => navigation.navigate('ProfilSiswaLain', item)}
            style={styles.item}>
            <Text style={styles.namaSiswa}>{item?.nama}</Text>
            <MaterialIcons
              name="arrow-forward"
              size={windowWidth * 0.06}
              color="black"
            />
          </RectButton>
        )}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    alignItems: 'center',
    width: '100%',
    marginBottom: '6%',
  },
  form: {
    paddingHorizontal: windowWidth * 0.08,
    width: '100%',
  },
  inputTitle: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
  },
  input: {
    fontSize: windowWidth * 0.045,
    color: 'black',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    marginTop: '3%',
    paddingHorizontal: '3%',
    paddingVertical: '2.5%',
    fontFamily: 'OpenSans-Regular',
    marginBottom: '6%',
    borderWidth: 0.8,
  },
  button: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: '#61A2F9',
    elevation: 10,
    marginTop: '3%',
  },
  disabledButton: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: 'grey',
    elevation: 10,
    marginTop: '3%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
  emptyData: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.08,
    borderRadius: windowWidth * 0.01,
  },
  flatlist: {
    padding: '4%',
    paddingVertical: '7%',
    minHeight: windowHeight,
    paddingTop: '25%',
  },
  separator: {
    height: '0.2%',
    marginVertical: '2%',
  },
  item: {
    minHeight: windowWidth * 0.12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.75,
    alignSelf: 'center',
    paddingHorizontal: '3%',
  },
  namaSiswa: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-SemiBold',
    color: 'black',
  },
  waliKelasContainer: {
    minHeight: windowWidth * 0.16,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#009A0F',
    borderRadius: windowWidth * 0.03,
    width: windowWidth * 0.75,
    alignSelf: 'center',
    paddingHorizontal: '3%',
    marginTop: '5%',
  },
  profilPictureWrapper: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: windowWidth * 0.1,
    backgroundColor: 'white',
    marginRight: '4%',
    overflow: 'hidden',
  },
  profilPicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  waliKelas: {
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
  namaWaliKelas: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Regular',
    color: 'white',
  },
});
