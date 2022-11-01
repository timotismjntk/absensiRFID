import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth, windowHeight} from '../../utils';

export default function Profil() {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.fotoProfilWrapper} />
        <View style={styles.form}>
          <Text style={styles.inputTitle}>Nama</Text>
          <TextInput
            value="Adam Kurniawan Margolang"
            autoFocus
            style={[styles.input, {backgroundColor: 'rgba(0,0,0,0.3)'}]}
            editable={false}
          />
          <Text style={styles.inputTitle}>NIK</Text>
          <TextInput
            autoFocus
            value="1111222233334444"
            style={[styles.input, {backgroundColor: 'rgba(0,0,0,0.3)'}]}
            editable={false}
          />
          <Text style={styles.inputTitle}>Nomor Whatsapp</Text>
          <TextInput value="082212122334" autoFocus style={styles.input} />
          <Text style={styles.inputTitle}>Ubah Password</Text>
          <TextInput autoFocus style={styles.input} />
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
});
