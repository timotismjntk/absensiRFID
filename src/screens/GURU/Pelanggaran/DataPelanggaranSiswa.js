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
  const [statusPenanganan, setStatusPenanganan] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        data={[
          {
            diinput_oleh: 'Adam Kurniawan Margolang, S.K...',
            ditangani_oleh: 'Adam Kurniawan Margolang, S.K...',
            jenis_pelanggaran: 'Tidak berpakaian rapi (5 Poin)',
            nama_siswa: 'Muhammad Nur Lubis',
            penanganan: [],
            status_penanganan: 'Belum Diproses',
            tanggal_pelanggaran: '29 September 2022',
            url_foto_siswa: '',
            foto_pelanggaran: '',
          },
          {
            diinput_oleh: 'Dwi Anggita Sari, S.Pd',
            ditangani_oleh: 'Dwi Anggita Sari, S.Pd',
            jenis_pelanggaran: 'Cabut kelas (10 Poin)',
            nama_siswa: 'Muhammad Nur Lubis',
            penanganan: ['Ditegur secara lisan', 'Diberikan tugas kelas'],
            status_penanganan: 'Sudah Diproses',
            tanggal_pelanggaran: '22 September 2022',
            url_foto_siswa: '',
            foto_pelanggaran: '',
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
              <Text style={styles.inputTitle}>Status Penanganan</Text>
              <Dropdown
                list={['Belum Diproses', 'Sudah Diproses']}
                selectedValue={statusPenanganan}
                setValue={setStatusPenanganan}
                placeholder="- Pilih Status Penanganan -"
              />
              <RectButton style={styles.button}>
                <Text style={styles.buttonTitle}>Lihat</Text>
              </RectButton>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Data Pelanggaran kosong...</Text>
        }
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
            <View style={styles.itemSubContainer}>
              <View style={styles.itemSubContainerHeader}>
                <Text style={styles.namaSiswa}>{item?.nama_siswa}</Text>
                <View
                  style={
                    item?.status_penanganan === 'Sudah Diproses'
                      ? styles.statusPenangananSudahDiprosesPill
                      : styles.statusPenangananBelumDiprosesPill
                  }>
                  <Text style={styles.statusPenangananLabel}>
                    {item?.status_penanganan}
                  </Text>
                </View>
              </View>
              <Text style={styles.tanggalPelanggaran}>
                {item?.tanggal_pelanggaran}
              </Text>
              <Text style={styles.jenisPelanggaran}>
                {item?.jenis_pelanggaran}
              </Text>
              <Text numberOfLines={1} style={styles.diinputOleh}>
                Diinput oleh: {item?.diinput_oleh}
              </Text>
              {item?.status_penanganan === 'Sudah Diproses' && (
                <View>
                  <Text style={styles.penanganan}>Penanganan:</Text>
                  <Text style={styles.ditanganiOleh}>
                    Oleh: {item?.ditangani_oleh}
                  </Text>
                  {item?.penanganan?.length > 0 &&
                    item?.penanganan?.map((teks, index) => (
                      <Text style={styles.listPenanganan} key={index}>
                        &bull; {teks || ''}
                      </Text>
                    ))}
                </View>
              )}
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
    minHeight: windowWidth * 0.2,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: '4%',
    elevation: 12,
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.88,
    alignSelf: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '4%',
    overflow: 'hidden',
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
    marginTop: '4%',
  },
  fotoProfil: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemSubContainer: {
    paddingLeft: '3%',
    flex: 1,
  },
  itemSubContainerHeader: {
    flexDirection: 'row',
  },
  namaSiswa: {
    fontSize: windowWidth * 0.04,
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
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
  statusPenangananSudahDiprosesPill: {
    color: 'white',
    fontSize: windowWidth * 0.03,
    backgroundColor: '#009A0F',
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.015,
    elevation: 5,
    paddingHorizontal: '1%',
    paddingVertical: '1.5%',
  },
  statusPenangananLabel: {
    color: 'white',
    fontSize: windowWidth * 0.028,
    fontWeight: 'bold',
  },
  tanggalPelanggaran: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  jenisPelanggaran: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  diinputOleh: {
    color: 'black',
    fontSize: windowWidth * 0.032,
    fontStyle: 'italic',
  },
  penanganan: {
    color: 'black',
    fontSize: windowWidth * 0.032,
    fontFamily: 'OpenSans-Bold',
  },
  ditanganiOleh: {
    color: 'black',
    fontSize: windowWidth * 0.032,
  },
  listPenanganan: {
    color: 'black',
    fontSize: windowWidth * 0.032,
    paddingLeft: '2%',
  },
});
