/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  View,
  Image,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import LoadingModal from '../../components/LoadingModal';
import SuccessModal from '../../components/SuccessModal';
import LinearButton from '../../components/LinearButton';

import {windowWidth, windowHeight} from '../../utils';

import {
  loginMesinAbsen,
  clearStateMesinAbsen,
  showModalSuccess,
} from '../../redux/reducer/auth';

export default function Login() {
  const dispatch = useDispatch();
  const [accessCode, setAccesCode] = useState('');

  const login = useCallback(() => {
    dispatch(loginMesinAbsen(accessCode));
  }, [accessCode]);

  const {mesinAbsen, isLoadingMesinAbsen, isLoginMesinModalSuccessOpen} =
    useSelector(state => state.auth);

  useEffect(() => {
    if (mesinAbsen?.status === 'gagal') {
      Alert.alert('Gagal', mesinAbsen.pesan || '', [
        {text: 'OK', onPress: () => dispatch(clearStateMesinAbsen())},
      ]);
    } else if (mesinAbsen?.status === 'berhasil') {
      dispatch(showModalSuccess({from: 'mesin', value: true}));
    }
  }, [mesinAbsen]);

  useEffect(() => {
    if (mesinAbsen?.status === 'berhasil' && isLoginMesinModalSuccessOpen) {
      setTimeout(() => {
        dispatch(showModalSuccess({from: 'mesin', value: false}));
      }, 3000);
    }
  }, [mesinAbsen, isLoginMesinModalSuccessOpen]);

  return (
    <SafeAreaView edges={['bottom', 'right', 'left']} style={styles.container}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="rgb(247,247,247)"
      />
      <LoadingModal
        open={isLoadingMesinAbsen || false}
        close={() => dispatch(clearStateMesinAbsen())}
      />
      <SuccessModal
        open={mesinAbsen?.status === 'berhasil' && isLoginMesinModalSuccessOpen}
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
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>NIK</Text>
          <TextInput
            autoFocus
            style={styles.input}
            value={accessCode}
            onChangeText={setAccesCode}
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
