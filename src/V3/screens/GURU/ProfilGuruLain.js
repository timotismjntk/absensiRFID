import React from 'react';
import {
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function ProfilGuru({route: {params}}) {
  const {
    nama = '',
    jenis_kelamin = '',
    kelas = [],
    jenis_ptk = '',
    status_kepegawaian = '',
    url_foto = '',
    agama = '',
  } = params || {};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fotoProfilWrapper}>
          {url_foto ? (
            <Image source={{uri: url_foto}} style={styles.profilPicture} />
          ) : (
            <MaterialIcons
              name="person"
              size={windowWidth * 0.14}
              color="#BDBDBD"
            />
          )}
        </View>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Nama</Text>
          <TextInput value={nama} style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Jenis Kelamin</Text>
          <TextInput
            value={jenis_kelamin}
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Agama</Text>
          <TextInput value={agama} style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Status Kepegawaian</Text>
          <TextInput
            value={status_kepegawaian}
            style={styles.input}
            editable={false}
          />
          <Text style={styles.inputTitle}>Jenis PTK</Text>
          <TextInput value={jenis_ptk} style={styles.input} editable={false} />
          <Text style={styles.inputTitle}>Wali Kelas Untuk</Text>
          <TextInput
            multiline
            value={
              kelas?.length > 0
                ? kelas
                    ?.map(item =>
                      item.nama_kelas.concat(` (TA ${item.tahunajaran})`),
                    )
                    .join('\n')
                : ''
            }
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
    paddingTop: '25%',
  },
  fotoProfilWrapper: {
    width: windowWidth * 0.28,
    height: windowWidth * 0.28,
    borderRadius: (windowWidth * 0.28) / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilPicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    backgroundColor: '#F5F5F5',
  },
});
