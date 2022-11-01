import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function DataSiswa({navigation}) {
  return (
    <SafeAreaView edges={['bottom', 'right', 'left']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        ListHeaderComponent={
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <Text style={styles.inputTitle}>Tahun Masuk</Text>
              <TextInput
                editable={false}
                value="- Pilih Tahun -"
                style={styles.input}
              />
              <RectButton style={styles.button}>
                <Text style={styles.buttonTitle}>Lihat</Text>
              </RectButton>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Siswa tidak ditemukan...</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <RectButton
            onPress={() => navigation.navigate('ProfilSiswa')}
            style={styles.item}>
            <Text style={styles.namaSiswa}>Adam Kurniawan Margolang</Text>
            <MaterialIcons
              name="arrow-forward"
              size={windowWidth * 0.06}
              color="black"
            />
          </RectButton>
        )}
        contentContainerStyle={styles.flatlist}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    alignItems: 'center',
    width: '100%',
    marginBottom: '6%',
  },
  form: {
    paddingHorizontal: windowWidth * 0.08,
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
  button: {
    padding: '3%',
    width: '100%',
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    backgroundColor: '#BB902C',
    elevation: 10,
    marginTop: '6%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontFamily: 'OpenSans-SemiBold',
  },
  emptyData: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
    backgroundColor: 'white',
    padding: '4%',
    borderRadius: windowWidth * 0.01,
  },
  flatlist: {
    padding: '4%',
    paddingVertical: '7%',
    minHeight: windowHeight,
  },
  separator: {
    height: '0.2%',
    marginVertical: '2%',
  },
  item: {
    minHeight: windowWidth * 0.12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.75,
    alignSelf: 'center',
    paddingHorizontal: '3%',
  },
  namaSiswa: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-SemiBold',
    color: 'black',
  },
});