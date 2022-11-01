import React, {useState} from 'react';
import {ScrollView, StyleSheet, StatusBar, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Dropdown from '../../../../components/DropDown';

import {windowWidth, windowHeight} from '../../../../utils';

export default function BuatPertemuan() {
  const [tahun, setTahun] = useState('');
  const [kelas, setKelas] = useState('');
  const [pertemuan, setPertemuan] = useState('');
  const [pengajar, setPengajar] = useState('');
  const [openDropdownTanggal, setOpenDropdownTanggal] = useState(false);
  const [tanggal, setTanggal] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Tahun Ajaran</Text>
          <Dropdown
            type="year"
            selectedValue={tahun}
            setValue={setTahun}
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
            list={['IPA', 'BIOLOGI', 'FISIKA', 'KIMIA', 'MATEMATIKA']}
            selectedValue={kelas}
            setValue={setKelas}
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
            type="number"
            selectedValue={pertemuan}
            setValue={setPertemuan}
            placeholder="0"
            arrowUpFn={() => setPertemuan(prev => String(Number(prev) + 1))}
            arrowDownFn={() =>
              Number(pertemuan) > 0 &&
              setPertemuan(prev => String(Number(prev) - 1))
            }
          />
          <RectButton style={styles.saveButton}>
            <Text style={styles.saveButtonTitle}>Buat</Text>
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    minHeight: windowHeight,
    padding: '3%',
    paddingTop: '20%',
    paddingBottom: '10%',
  },
  fotoProfilWrapper: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.28,
    borderRadius: (windowWidth * 0.28) / 2,
    backgroundColor: 'white',
    borderWidth: 0.5,
    alignSelf: 'center',
  },
  form: {
    paddingHorizontal: '8%',
    marginTop: '5%',
    width: '100%',
  },
  inputTitle: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
  },
  input: {
    fontSize: windowWidth * 0.04,
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
  inputFocus: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    marginTop: '3%',
    paddingHorizontal: '3%',
    paddingVertical: '2.5%',
    fontFamily: 'OpenSans-Regular',
    marginBottom: '6%',
    borderWidth: 1,
    borderColor: '#0099e5',
  },
  disabledInput: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    marginTop: '3%',
    paddingHorizontal: '3%',
    paddingVertical: '2.5%',
    fontFamily: 'OpenSans-Regular',
    marginBottom: '6%',
    borderWidth: 0.8,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  errorInput: {
    fontSize: windowWidth * 0.04,
    color: 'red',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    marginTop: '3%',
    paddingHorizontal: '3%',
    paddingVertical: '2.5%',
    fontFamily: 'OpenSans-Regular',
    marginBottom: '6%',
    borderWidth: 0.8,
    borderColor: 'red',
  },
  saveButton: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: '#61A2F9',
    elevation: 10,
    marginTop: '6%',
  },
  disabledSaveButton: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: '6%',
  },
  saveButtonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
  info: {
    color: '#3B3B3B',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-SemiBold',
    fontStyle: 'italic',
    marginTop: '6%',
  },
  required: {
    color: 'black',
    fontStyle: 'italic',
    marginTop: '-4%',
    marginBottom: '2%',
    fontSize: windowWidth * 0.034,
  },
  error: {
    fontStyle: 'italic',
    color: 'red',
    marginTop: '-4%',
    marginBottom: '2%',
    fontSize: windowWidth * 0.034,
  },
});
