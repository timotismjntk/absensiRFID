import React, {useState} from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Dropdown from '../../../components/DropDown';

import {windowWidth, windowHeight} from '../../../utils';

export default function DataPelanggaranSiswa({navigation}) {
  const [tahun, setTahun] = useState('');
  const [kelas, setKelas] = useState('');
  const [namaSiswa, setNamaSiswa] = useState('');
  const [urutkanBerdasarkan, setUrutkanBerdasarkan] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        data={[
          {
            nama_siswa: 'Muhammad Nur Lubis',
            poin: '100 Poin',
          },
          {
            nama_siswa: 'Irfan Nasution',
            poin: '98 Poin',
          },
          {
            nama_siswa: 'Agus Setia Putra',
            poin: '78 Poin',
          },
          {
            nama_siswa: 'Mahmuddin Suwitorus...',
            poin: '65 Poin',
          },
        ]}
        ListHeaderComponent={
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <Text style={styles.inputTitle}>Tahun Ajaran</Text>
              <Dropdown
                type="year"
                selectedValue={tahun}
                setValue={setTahun}
                placeholder="- Pilih Tahun -"
              />
              <Text style={styles.inputTitle}>Kelas</Text>
              <Dropdown
                list={['7', '8', '9']}
                selectedValue={kelas}
                setValue={setKelas}
                placeholder="- Pilih Kelas -"
              />
              <Text style={styles.inputTitle}>Nama Siswa</Text>
              <Dropdown
                list={['Heru', 'Aditya', 'John']}
                selectedValue={namaSiswa}
                setValue={setNamaSiswa}
                placeholder="- Pilih Nama Siswa -"
              />
              <Text style={styles.inputTitle}>Urutkan</Text>
              <Dropdown
                list={['Paling Banyak', 'Paling Sedikit']}
                selectedValue={urutkanBerdasarkan}
                setValue={setUrutkanBerdasarkan}
                placeholder="- Pilih Urutan -"
              />
              <RectButton style={styles.button}>
                <Text style={styles.buttonTitle}>Lihat</Text>
              </RectButton>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Data Alumni kosong...</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <RectButton style={styles.itemContainer}>
            <View style={styles.fotoProfilWrapper}>
              <Image
                style={styles.fotoProfil}
                source={
                  item?.url_foto_siswa
                    ? {uri: item.url_foto_siswa}
                    : require('../../../assets/icons2/students3.png')
                }
              />
            </View>
            <Text numberOfLines={1} style={styles.namaSiswa}>
              {item?.nama_siswa}
            </Text>
            <View style={styles.poinWrapper}>
              <Text style={styles.poinLabel}>{item?.poin}</Text>
            </View>
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
    paddingHorizontal: windowWidth * 0.06,
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
    backgroundColor: '#61A2F9',
    elevation: 10,
    marginTop: '3%',
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
    paddingHorizontal: '4%',
    borderRadius: windowWidth * 0.01,
  },
  flatlist: {
    paddingVertical: '7%',
    paddingTop: '25%',
    minHeight: windowHeight,
  },
  separator: {
    height: '0.2%',
    marginBottom: '4%',
  },
  itemContainer: {
    minHeight: windowWidth * 0.1,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 12,
    borderRadius: windowWidth * 0.01,
    width: windowWidth * 0.88,
    alignSelf: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  fotoProfilWrapper: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    overflow: 'hidden',
    borderRadius: windowWidth * 0.13,
  },
  fotoProfil: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  namaSiswa: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
    paddingLeft: '4%',
    paddingRight: '2%',
  },
  statusPenangananBelumDiprosesPill: {
    color: 'white',
    fontSize: windowWidth * 0.03,
    backgroundColor: '#E36D00',
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.015,
    elevation: 5,
    paddingHorizontal: '1%',
    paddingVertical: '1.5%',
  },
  poinWrapper: {
    backgroundColor: '#E36D00',
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.015,
    elevation: 5,
    paddingHorizontal: '1%',
    paddingVertical: '1.5%',
  },
  poinLabel: {
    color: 'white',
    fontSize: windowWidth * 0.028,
    fontWeight: 'bold',
  },
});
