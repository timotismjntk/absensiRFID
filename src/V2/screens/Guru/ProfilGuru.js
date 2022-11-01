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

export default function ProfilGuru() {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fotoProfilWrapper} />
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Nama</Text>
          <TextInput
            value="Adam Kurniawan Margolang"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>NIK</Text>
          <TextInput
            value="1111222233334444"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>NUPTK</Text>
          <TextInput
            value="3240771672130093"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Jenis Kelamin</Text>
          <TextInput value="Laki-Laki" style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Agama</Text>
          <TextInput value="Islam" style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Alamat</Text>
          <TextInput
            multiline
            value={
              'Dusun VII, Desa Rahuning I, Kec. Rahuning, Kab. Asahan, Prov. Sumatera Utara'
            }
            editable={false}
            style={styles.input}
          />
          <Text style={styles.inputTitle}>Status Kepegawaian</Text>
          <TextInput value="GTY" style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Jenis PTK</Text>
          <TextInput value="Guru Mapel" style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Wali Kelas Untuk</Text>
          <TextInput
            multiline
            value={'XI MIA 1 (TA 2021/2022)\nXII MIA 1 (TA 2022/2023)'}
            editable={false}
            style={styles.input}
          />
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
    backgroundColor: '#D9D9D9',
  },
});
