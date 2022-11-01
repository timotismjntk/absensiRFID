import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth, windowHeight} from '../../utils';

export default function TambahIzinSiswa() {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Tahun Ajaran</Text>
          <TextInput
            value="- Pilih Tahun Ajaran -"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Kelas</Text>
          <TextInput
            value="- Pilih Kelas -"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Nama Siswa</Text>
          <TextInput
            value="- Pilih Nama Siswa -"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Jenis Izin</Text>
          <TextInput
            value="- Pilih Jenis Izin -"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Mulai Dari</Text>
          <TextInput
            value="- Pilih Tahun -"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Sampai Dengan</Text>
          <TextInput
            value="- Pilih Bulan -"
            style={styles.input}
            editable={false}
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
    paddingTop: '5%',
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
    backgroundColor: '#BB902C',
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
