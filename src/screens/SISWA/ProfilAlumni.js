import React from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth, windowHeight} from '../../utils';

export default function ProfilAlumni() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fotoProfilWrapper} />
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Nama Siswa</Text>
          <TextInput
            value="Adam Kurniawan Margolang"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>NISN</Text>
          <TextInput
            value="1111222233334444"
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Kelas</Text>
          <TextInput
            multiline
            value={
              'X MIA 2 (TA 2019/2020)\nXI MIA 1 (TA 2019/2020)\nXII MIA 1 (TA 2020/2021)'
            }
            editable={false}
            style={styles.input}
          />
          <Text style={styles.inputTitle}>Tahun Lulus</Text>
          <TextInput value="2022" style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Pendidikan Lanjutan</Text>
          <TextInput
            multiline
            value="Universitas Sumatera Utara Jurusan Teknologi Informasi Fakultas Ilmu Komputer dan Teknologi Informasi"
            style={styles.input}
            editable={false}
          />
          {/* <Text style={styles.inputTitle}>Alamat</Text>
          <TextInput
            multiline
            value="Dusun VII, Desa Rahuning I, Kec. Rahuning, Kab. Asahan, Prov. Sumatera Utara"
            editable={false}
            style={styles.input}
          /> */}
          <Text style={styles.inputTitle}>Agama</Text>
          <TextInput value="Islam" style={styles.input} editable={false} />
          {/* <Text style={styles.inputTitle}>Nomor Whatsapp</Text>
          <TextInput
            value="082212122334"
            style={styles.input}
            editable={false}
          /> */}
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
    minHeight: windowHeight * 0.8,
    padding: '3%',
    paddingTop: '25%',
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
    borderWidth: 0.4,
    backgroundColor: '#F5F5F5',
  },
});
