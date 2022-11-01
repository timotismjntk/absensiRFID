/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  Image,
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
} from '../../redux/reducer/auth';
import LinearButton from '../../components/LinearButton';

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
    <SafeAreaView edges={['bottom', 'right', 'left']} style={styles.container}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="rgb(247,247,247)"
      />
      <LoadingModal open={isLoadingPengguna} close={() => null} />
      <SuccessModal
        open={pengguna?.status === 'berhasil' && isLoginUserModalSuccessOpen}
        close={() => null}
      />
      <View style={styles.wrapper}>
        <View
          style={{
            width: windowWidth * 0.8,
            height: windowHeight * 0.1,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'center',
            }}
            source={require('../../assets/logo.jpg')}
          />
        </View>
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
          <LinearButton style={styles.loginButton}>
            <RectButton onPress={login} style={styles.loginButton}>
              <Text style={styles.loginButtonTitle}>Masuk</Text>
            </RectButton>
          </LinearButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,247)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
    width: '100%',
  },
  form: {
    paddingHorizontal: windowWidth * 0.08,
    alignItems: 'center',
    marginTop: '5%',
    width: '100%',
  },
  inputTitle: {
    fontSize: windowWidth * 0.04,
    color: 'rgba(0,0,0,0.5)',
    fontFamily: 'OpenSans-Bold',
  },
  input: {
    fontSize: windowWidth * 0.045,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    textAlign: 'center',
    marginTop: '3%',
    fontFamily: 'OpenSans-Regular',
    marginBottom: '6%',
  },
  loginButton: {
    padding: '2%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
  },
  loginButtonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-SemiBold',
  },
});
