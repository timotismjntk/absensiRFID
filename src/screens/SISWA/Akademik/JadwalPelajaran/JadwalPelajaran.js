/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import Dropdown from '../../../../components/DropDown';

import {windowWidth, windowHeight} from '../../../../utils';

import {getDataSiswa} from '../../../../redux/reducer/GURU/dataSiswa';

export default function AnggotaKelas({navigation}) {
  const dispatch = useDispatch();
  const [tahunAjaran, setTahunAjaran] = useState('');
  const [kelas, setKelas] = useState('');
  const [hari, setHari] = useState('');

  const {authGuru} = useSelector(state => state.authGuru);

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

  const memoizedData = useMemo(
    () => [
      {
        hari: 'Senin Jam 1',
        mapel: 'Bahasa Indonesia',
        kelas: 'XII MIA 1',
        pengajar: 'Adam Kurniawan Margolang, S.Kom',
      },
      {
        hari: 'Senin Jam 2',
        mapel: 'Bahasa Indonesia',
        kelas: 'XII MIA 1',
        pengajar: 'Adam Kurniawan Margolang, S.Kom',
      },
      {
        hari: 'Senin Jam 3',
        mapel: 'Matematika',
        kelas: 'XII MIA 1',
        pengajar: 'Budi Santoso, S.Pd',
      },
      {
        hari: 'Senin Jam 4',
        mapel: 'Matematika',
        kelas: 'XII MIA 1',
        pengajar: 'Budi Santoso, S.Pd',
      },
      {
        hari: 'Senin Jam 5',
        mapel: 'Biologi',
        kelas: 'XII MIA 1',
        pengajar: 'Mardiana Napitupulu, S.Pd',
      },
      {
        hari: 'Senin Jam 6',
        mapel: 'Kimia',
        kelas: 'XII MIA 1',
        pengajar: 'Sudirman Jatmiko, S.Pd',
      },
    ],
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        data={memoizedData}
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
              <Text style={styles.inputTitle}>Hari</Text>
              <Dropdown
                type="day"
                selectedValue={hari}
                setValue={setHari}
                placeholder="- Pilih Hari -"
              />
              <RectButton
                style={
                  tahunAjaran && kelas && hari
                    ? styles.button
                    : styles.disabledButton
                }
                enabled={tahunAjaran && kelas && hari ? true : false}
                onPress={lihatData}>
                <Text style={styles.buttonTitle}>Lihat</Text>
              </RectButton>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Data Siswa kosong...</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <RectButton style={styles.item}>
            <View style={styles.hariWrapper}>
              <Text style={styles.hari}>{item.hari}</Text>
            </View>
            <View style={styles.mapelWrapper}>
              <Text style={styles.mapel}>{item?.mapel}</Text>
              <Text style={styles.kelas}>Kelas: {item?.kelas}</Text>
              <Text numberOfLines={1} style={styles.pengajar}>
                Pengajar: {item?.pengajar}
              </Text>
            </View>
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
    paddingHorizontal: windowWidth * 0.01,
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
    padding: '7%',
    paddingVertical: '7%',
    minHeight: windowHeight,
    paddingTop: '25%',
  },
  separator: {
    height: '0.2%',
    marginVertical: '2%',
  },
  item: {
    minHeight: windowWidth * 0.18,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: windowWidth * 0.02,
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  hariWrapper: {
    backgroundColor: '#009A0F',
    width: '23%',
    minHeight: windowWidth * 0.18,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '4%',
  },
  hari: {
    color: 'white',
    textAlign: 'center',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Bold',
  },
  mapelWrapper: {
    padding: '2%',
    flex: 1,
  },
  mapel: {
    fontSize: windowWidth * 0.042,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
  },
  kelas: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
  pengajar: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
});
