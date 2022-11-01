import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import Dropdown from '../../../../components/DropDown';
import Tab from './components/Tab/Tab';

import {windowWidth, windowHeight} from '../../../../utils';

import {getDataSiswa} from '../../../../redux/reducer/GURU/dataSiswa';

export default function Pertemuan({navigation}) {
  const dispatch = useDispatch();
  const [tahunAjaran, setTahunAjaran] = useState('');
  const [kelas, setKelas] = useState('');
  const [openDropdownTanggal, setOpenDropdownTanggal] = useState(false);
  const [tanggal, setTanggal] = useState('');
  const [mapel, setMapel] = useState('');
  const [pengajar, setPengajar] = useState('');

  const {authGuru = {}} = useSelector(state => state.authGuru) || {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            <Text style={styles.inputTitle}>Tanggal</Text>
            <Dropdown
              type="date"
              openDate={openDropdownTanggal}
              setOpenDate={setOpenDropdownTanggal}
              selectedDate={tanggal}
              setSelectedDate={setTanggal}
              placeholder="- Pilih Tanggal -"
            />
            <Text style={styles.inputTitle}>Mata Pelajaran</Text>
            <Dropdown
              list={['IPA', 'BAHASA INDONESIA', 'MATEMATIKA']}
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
            <Text style={styles.inputTitle}>Pertemuan ke</Text>
            <Dropdown
              list={['1', '2', '3', '4', '5']}
              selectedValue={pengajar}
              setValue={setPengajar}
              placeholder="- Pilih Pertemuan -"
            />
            <RectButton
              style={
                tahunAjaran && kelas ? styles.button : styles.disabledButton
              }
              enabled={tahunAjaran && kelas ? true : false}>
              <Text style={styles.buttonTitle}>Filter</Text>
            </RectButton>
          </View>
        </View>
        <Tab />
        <RectButton style={styles.saveButton}>
          <Text style={styles.buttonTitle}>Simpan</Text>
        </RectButton>
      </ScrollView>
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
    paddingHorizontal: '7%',
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
  button: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: '#61A2F9',
    elevation: 10,
    marginTop: '3%',
    marginBottom: '5%',
  },
  disabledButton: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: 'grey',
    elevation: 10,
    marginTop: '3%',
    marginBottom: '5%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
  saveButton: {
    padding: '3%',
    width: '88%',
    alignSelf: 'center',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: '#009A0F',
    elevation: 10,
  },
  emptyData: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: windowWidth * 0.08,
    borderRadius: windowWidth * 0.01,
  },
  scrollContainer: {
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
