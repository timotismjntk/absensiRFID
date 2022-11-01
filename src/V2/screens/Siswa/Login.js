/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect, useRef} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LoadingModal from '../../components/LoadingModal';
import SuccessModal from '../../components/SuccessModal';

import {windowWidth, windowHeight} from '../../utils';

import {
  loginMesinAbsen,
  clearStateMesinAbsen,
  showModalSuccess,
} from '../../redux/reducer/auth';

export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [accessCode, setAccesCode] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const lupaPassword = useCallback(() => {
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
            width: windowWidth * 0.7,
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
        <Text style={styles.headerTitle}>Anda masuk sebagai Siswa / Wali</Text>
        <View style={styles.form}>
          <Text style={styles.inputTitle}>NIK Siswa</Text>
          <TextInput
            style={styles.input}
            value={accessCode}
            keyboardType="numeric"
            maxLength={16}
            onChangeText={setAccesCode}
            onSubmitEditing={lupaPassword}
          />
          <Text style={styles.inputTitle}>Nomor Kartu Keluarga</Text>
          <TextInput
            style={styles.input}
            maxLength={16}
            keyboardType="numeric"
            value={accessCode}
            onChangeText={setAccesCode}
            onSubmitEditing={lupaPassword}
          />
          <View style={styles.checkBoxForgotPasswordContainer}>
            <RectButton
              onPress={() => setIsChecked(!isChecked)}
              style={styles.checkbox}>
              <MaterialIcons
                name={isChecked ? 'check-box-outline-blank' : 'check-box'}
                size={windowWidth * 0.07}
                color="grey"
              />
              <Text style={styles.checkboxTitle}>Ingat Saya</Text>
            </RectButton>
          </View>
          <RectButton onPress={lupaPassword} style={styles.lupaPasswordButton}>
            <Text style={styles.loginButtonTitle}>Masuk</Text>
          </RectButton>
          <Text style={styles.bantuanTitle}>Bantuan</Text>
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
    paddingHorizontal: '3%',
  },
  headerTitle: {
    fontSize: windowWidth * 0.038,
    color: 'black',
    fontFamily: 'OpenSans-Regular',
    marginTop: '3%',
  },
  form: {
    paddingHorizontal: windowWidth * 0.08,
    marginTop: '5%',
    width: '100%',
  },
  inputTitle: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontFamily: 'OpenSans-SemiBold',
  },
  input: {
    fontSize: windowWidth * 0.045,
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
  checkBoxForgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxTitle: {
    color: 'black',
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-Regular',
    marginLeft: '2%',
  },
  lupaPasswordTitle: {
    color: 'black',
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '2%',
  },
  lupaPasswordButton: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: '#BB902C',
    elevation: 10,
    marginTop: '6%',
  },
  loginButtonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
  bantuanTitle: {
    color: 'black',
    fontSize: windowWidth * 0.036,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: '2%',
    textAlign: 'center',
    marginTop: '5%',
  },
});
