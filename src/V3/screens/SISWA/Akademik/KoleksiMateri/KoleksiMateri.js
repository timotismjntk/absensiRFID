/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Dropdown from '../../../../components/DropDown';

import {windowWidth, windowHeight} from '../../../../utils';

import {getDataSiswa} from '../../../../redux/reducer/GURU/dataSiswa';

export default function KoleksiMateri({navigation}) {
  const dispatch = useDispatch();
  const [tahunAjaran, setTahunAjaran] = useState('');
  const [kelas, setKelas] = useState('');
  const [mapel, setMapel] = useState('');
  const [pengajar, setPengajar] = useState('');

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
        id: 1,
        nama_file: 'Aljabar : Rumus Perbandingan (PDF)',
        pelajaran: 'Matematika',
        pengajar: 'Budi Santoso, S.Pd',
        pertemuan_ke: 5,
        hari: 'Jumat, 7 Oktober 2022',
      },
      {
        id: 2,
        nama_file: 'Aljabar : Perbandingan Bertingkat (PDF)',
        pelajaran: 'Matematika',
        pengajar: 'Budi Santoso, S.Pd',
        pertemuan_ke: 4,
        hari: 'Kamis, 6 Oktober 2022',
      },
      {
        id: 3,
        nama_file: 'Aljabar : Perbandingan Berbalik Nilai (PDF)',
        pelajaran: 'Matematika',
        pengajar: 'Budi Santoso, S.Pd',
        pertemuan_ke: 3,
        hari: 'Kamis, 5 Oktober 2022',
      },
      {
        id: 4,
        nama_file: 'Aljabar : Perbandingan Senilai (PDF)',
        pelajaran: 'Matematika',
        pengajar: 'Budi Santoso, S.Pd',
        pertemuan_ke: 2,
        hari: 'Kamis, 4 Oktober 2022',
      },
      {
        id: 5,
        nama_file: 'Aljabar : Perbandingan (PDF)',
        pelajaran: 'Matematika',
        pengajar: 'Budi Santoso, S.Pd',
        pertemuan_ke: 1,
        hari: 'Kamis, 3 Oktober 2022',
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
              <Text style={styles.inputTitle}>Mata Pelajaran</Text>
              <Dropdown
                list={['MATEMATIKA', 'BAHASA INDONESIA', 'IPA']}
                selectedValue={mapel}
                setValue={setMapel}
                placeholder="- Pilih Mata Pelajaran -"
              />
              <Text style={styles.inputTitle}>Pengajar</Text>
              <Dropdown
                list={['Wahyu S.Pd', 'Kuncoro S.Pd', 'Robert S.Pd']}
                selectedValue={pengajar}
                setValue={setPengajar}
                placeholder="- Pilih Pengajar -"
              />
              <RectButton
                style={
                  tahunAjaran && kelas ? styles.button : styles.disabledButton
                }
                enabled={tahunAjaran && kelas ? true : false}
                onPress={lihatData}>
                <Text style={styles.buttonTitle}>Filter</Text>
              </RectButton>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Koleksi Materi kosong...</Text>
        }
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={styles.itemWrapper}>
              <Text numberOfLines={1} style={styles.nama_file}>
                {item.nama_file}
              </Text>
              <Text style={styles.pelajaran}>Pelajaran: {item.pelajaran}</Text>
              <Text style={styles.pengajar}>Pengajar: {item.pengajar}</Text>
              <Text style={styles.pertemuan_ke}>
                Pertemuan ke: {item.pertemuan_ke}
              </Text>
              <Text style={styles.hari}>Hari: {item.hari}</Text>
            </View>
            <View style={styles.itemIconContainer}>
              <RectButton style={styles.iconDownload}>
                <MaterialIcons
                  name="cloud-download"
                  size={windowWidth * 0.06}
                  color="white"
                />
              </RectButton>
            </View>
          </View>
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: windowWidth * 0.01,
    marginBottom: '5%',
  },
  itemWrapper: {
    flex: 1,
    paddingRight: '3%',
  },
  nama_file: {
    color: 'black',
    fontSize: windowWidth * 0.042,
    fontWeight: 'bold',
  },
  pelajaran: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  pengajar: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  pertemuan_ke: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  hari: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  itemIconContainer: {
    justifyContent: 'space-around',
  },
  iconDownload: {
    backgroundColor: '#009A0F',
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.014,
    elevation: 5,
  },
});
