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

export default function Profil() {
  const [whatsappNumber, setWhatsappNumber] = useState('082212122334');
  const [whatsappNumberOnFocus, setWhatsappNumberOnFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordOnFocus, setPasswordOnFocus] = useState(false);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fotoProfilWrapper} />
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Nama</Text>
          <TextInput
            value="Adam Kurniawan Margolang"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>NIK</Text>
          <TextInput
            value="1111222233334444"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>NUPTK</Text>
          <TextInput
            value="3240771672130093"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>Jenis Kelamin</Text>
          <TextInput
            value="Laki-Laki"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>Agama</Text>
          <TextInput
            value="Islam"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>Alamat</Text>
          <TextInput
            multiline
            value={
              'Dusun VII, Desa Rahuning I, Kec. Rahuning, Kab. Asahan, Prov. Sumatera Utara'
            }
            editable={false}
            style={styles.disabledInput}
          />
          <Text style={styles.inputTitle}>Status Kepegawaian</Text>
          <TextInput
            value="GTY"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>Jenis PTK</Text>
          <TextInput
            value="Guru Mapel"
            style={styles.disabledInput}
            editable={false}
          />
          <Text style={styles.inputTitle}>Wali Kelas Untuk</Text>
          <TextInput
            multiline
            value={'XI MIA 1 (TA 2021/2022)\nXII MIA 1 (TA 2022/2023)'}
            editable={false}
            style={styles.disabledInput}
          />
          <Text style={styles.inputTitle}>Nomor Whatsapp</Text>
          <TextInput
            value={whatsappNumber}
            onChangeText={setWhatsappNumber}
            onFocus={() => {
              setWhatsappNumberOnFocus(true);
            }}
            onBlur={() => {
              setWhatsappNumberOnFocus(false);
            }}
            style={
              whatsappNumber.length < 10
                ? styles.errorInput
                : whatsappNumberOnFocus
                ? styles.inputFocus
                : styles.input
            }
          />
          {whatsappNumber.length < 10 && (
            <Text style={styles.error}>* Minimal 11 digit angka</Text>
          )}
          <Text style={styles.inputTitle}>Ubah Password</Text>
          <TextInput
            value={password}
            keyboardType="numeric"
            onChangeText={setPassword}
            onFocus={() => {
              setPasswordOnFocus(true);
            }}
            onBlur={() => {
              setPasswordOnFocus(false);
            }}
            style={
              password === '123456'
                ? styles.errorInput
                : passwordOnFocus
                ? styles.inputFocus
                : styles.input
            }
          />
          {password === '123456' && (
            <Text style={styles.error}>* Password terlalu mudah ditebak</Text>
          )}
          {password.length < 6 && (
            <Text style={styles.required}>Minimal 6 digit angka</Text>
          )}
          <RectButton
            enabled={!(password === '123456' || whatsappNumber.length < 10)}
            style={
              password === '123456' || whatsappNumber.length < 10
                ? styles.disabledSaveButton
                : styles.saveButton
            }>
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
    paddingHorizontal: '3%',
    paddingTop: '5%',
    paddingBottom: '15%',
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
    backgroundColor: '#D9D9D9',
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
