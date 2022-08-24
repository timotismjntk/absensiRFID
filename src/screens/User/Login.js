/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import LoadingModal from '../../components/LoadingModal';
import SuccessModal from '../../components/SuccessModal';

import {windowWidth, windowHeight, subscribeFromTopic} from '../../utils';

import {
  loginPengguna,
  clearStatePengguna,
  showModalSuccess,
} from '../../store/reducer/auth';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [NIK, setNIK] = useState('');

  const login = useCallback(() => {
    dispatch(loginPengguna(NIK));
  }, [NIK]);

  const {pengguna, isLoadingPengguna, isLoginUserModalSuccessOpen} =
    useSelector(state => state.auth);

  useEffect(() => {
    if (pengguna?.status === 'gagal') {
      Alert.alert('Gagal', pengguna.pesan || '', [
        {text: 'OK', onPress: () => dispatch(clearStatePengguna())},
      ]);
    } else if (pengguna?.status === 'berhasil') {
      dispatch(showModalSuccess({from: 'pengguna', value: true}));
    }
  }, [pengguna]);

  useEffect(() => {
    if (pengguna?.status === 'berhasil' && isLoginUserModalSuccessOpen) {
      subscribeFromTopic(pengguna);
      setTimeout(() => {
        dispatch(showModalSuccess({from: 'pengguna', value: false}));
      }, 3000);
    }
  }, [pengguna, isLoginUserModalSuccessOpen]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <LoadingModal open={isLoadingPengguna} close={() => null} />
      <SuccessModal
        open={pengguna?.status === 'berhasil' && isLoginUserModalSuccessOpen}
        close={() => null}
      />
      <RectButton
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}>
        <Text style={styles.logoutTitle}>Kembali</Text>
      </RectButton>
      <View style={styles.wrapper}>
        <Text style={styles.headerTitle}>
          Sistem Informasi Absensi{'\n'}Elektronik Sekolah
        </Text>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>NIK Siswa</Text>
          <TextInput
            autoFocus
            style={styles.input}
            // placeholder="Masukkan Kode Akses"
            value={NIK}
            onChangeText={setNIK}
            onSubmitEditing={login}
          />
          <RectButton onPress={login} style={styles.login}>
            <Text style={styles.loginTitle}>Masuk</Text>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172B36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: windowHeight * 0.06,
    left: windowHeight * 0.01,
    padding: '2%',
  },
  logoutTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
  headerTitle: {
    fontSize: windowWidth * 0.055,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: windowWidth * 0.08,
    alignItems: 'center',
    marginTop: '5%',
  },
  inputTitle: {
    fontSize: windowWidth * 0.04,
    color: 'white',
    fontFamily: 'OpenSans-Bold',
  },
  input: {
    fontSize: windowWidth * 0.045,
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    textAlign: 'center',
    marginTop: '3%',
    fontFamily: 'OpenSans-Regular',
  },
  login: {
    backgroundColor: '#E3A400',
    padding: '3.5%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    marginTop: '4%',
  },
  loginTitle: {
    color: 'white',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-SemiBold',
  },
  version: {
    color: 'white',
    fontSize: windowWidth * 0.035,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    marginTop: '4%',
  },
});
