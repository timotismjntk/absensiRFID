import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Dropdown from '../../../components/DropDown';

import {windowWidth, windowHeight} from '../../../utils';

export default function TambahPelanggaranSiswa() {
  const [tahun, setTahun] = useState('');
  const [kelas, setKelas] = useState('');
  const [namaSiswa, setNamaSiswa] = useState('');
  const [jenisPelanggaran, setJenisPelanggaran] = useState('');
  const [statusPenanganan, setStatusPenanganan] = useState('');
  const [
    openDropdownDateTanggalPelanggaran,
    setOpenDropdownDateTanggalPelanggaran,
  ] = useState(false);
  const [tanggalPelanggaran, setTanggalPelanggaran] = useState('');

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
          <Text style={styles.inputTitle}>Nama Siswa</Text>
          <Dropdown
            list={['Heru', 'Aditya', 'John']}
            selectedValue={namaSiswa}
            setValue={setNamaSiswa}
            placeholder="- Pilih Nama Siswa -"
          />
          <Text style={styles.inputTitle}>Tanggal Pelanggaran</Text>
          <Dropdown
            type="date"
            openDate={openDropdownDateTanggalPelanggaran}
            setOpenDate={setOpenDropdownDateTanggalPelanggaran}
            selectedDate={tanggalPelanggaran}
            setSelectedDate={setTanggalPelanggaran}
            placeholder="- Pilih Tanggal Pelanggaran -"
          />
          <Text style={styles.inputTitle}>Jenis Pelanggaran</Text>
          <Dropdown
            list={['Tidak Berpakaian Rapi (5 Poin)', 'Cabut Kelas (10 Poin)']}
            selectedValue={jenisPelanggaran}
            setValue={setJenisPelanggaran}
            placeholder="- Pilih Jenis Pelanggaran -"
          />
          <Text style={styles.inputTitle}>Foto Pelanggaran</Text>
          <RectButton style={styles.ambilFotoButton}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.icon}
                source={require('../../../assets/icons2/camera.png')}
              />
            </View>
            <Text style={styles.ambilFotoLabel}>Ambil Foto</Text>
          </RectButton>
          <Text style={styles.inputTitle}>Status Penanganan</Text>
          <Dropdown
            list={['Belum Diproses', 'Sudah Diproses']}
            selectedValue={statusPenanganan}
            setValue={setStatusPenanganan}
            placeholder="- Pilih Status Penanganan -"
          />
          <Text style={styles.inputTitle}>Ditangani Oleh</Text>
          <Dropdown
            list={['Dwi Anggita Sari, S.Pd', 'Syahrini, S.Pd']}
            selectedValue={statusPenanganan}
            setValue={setStatusPenanganan}
            placeholder="- Pilih Guru -"
          />
          <RectButton style={styles.saveButton}>
            <Text style={styles.saveButtonTitle}>Simpan</Text>
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
  ambilFotoButton: {
    width: '100%',
    borderRadius: windowWidth * 0.02,
    marginTop: '3%',
    paddingHorizontal: '3%',
    paddingVertical: '2.5%',
    marginBottom: '6%',
    backgroundColor: '#E36D00',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ambilFotoLabel: {
    fontSize: windowWidth * 0.038,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  iconWrapper: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    marginRight: '3%',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
    marginTop: '2%',
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
