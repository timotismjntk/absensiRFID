import React, {useCallback} from 'react';
import {StyleSheet, Text, View, StatusBar, Image, Alert} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {windowWidth, windowHeight} from '../../utils';

export default function AbsenSiswa({navigation}) {
  const comingSoonAlert = useCallback(() => {
    Alert.alert('Info', 'Dalam proses pengembangan.', [
      {text: 'OK', onPress: () => null},
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <View style={styles.menuContainer}>
        <View>
          <View style={styles.item}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons2/list.png')}
              />
            </View>
          </View>
          <Text style={styles.btnTitle}>Log Absen</Text>
          <RectButton
            onPress={() => navigation.navigate('LogAbsenSiswa')}
            style={styles.btn}
          />
        </View>
        <View>
          <View style={styles.item}>
            <View style={styles.iconWrapper}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons2/izinSiswa.png')}
              />
            </View>
          </View>
          <Text style={styles.btnTitle}>Izin Siswa</Text>
          <RectButton
            onPress={() => {
              // comingSoonAlert();
              navigation.navigate('TambahIzinSiswa');
            }}
            style={styles.btn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: '14%',
    paddingTop: '25%',
  },
  item: {
    justifyContent: 'center',
    width: windowWidth * 0.3,
    height: windowWidth * 0.26,
    borderRadius: windowWidth * 0.03,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C9C9C9',
  },
  btn: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  btnTitle: {
    color: 'black',
    fontSize: windowWidth * 0.036,
    paddingHorizontal: '3%',
    textAlign: 'center',
    marginTop: '4%',
    fontFamily: 'OpenSans-SemiBold',
  },
  iconWrapper: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    marginBottom: '2%',
    elevation: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
