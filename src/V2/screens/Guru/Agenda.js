import React, {useCallback} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  RectButton,
  FlatList as GestureFlatlist,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function Agenda({navigation}) {
  const SubItem = useCallback(({data}) => {
    return (
      <GestureFlatlist
        data={data}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.subItem}>
            <Text style={styles.subItemTitle}>{item.title}</Text>
            <Text style={styles.subItemContent}>{item.content}</Text>
            <Text style={styles.subItemJam}>{item.jam}</Text>
          </View>
        )}
        contentContainerStyle={styles.subItemContainer}
      />
    );
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'right', 'left']} style={styles.container}>
      <StatusBar animated={true} translucent backgroundColor="#3B3B3B" />
      <FlatList
        data={[
          {
            tanggal: 'Sabtu, 14 September 2022 (Besok)',
            subData: [
              {
                title: 'Rapat Dengan Orang Tua Siswa',
                content:
                  'Melakukan rapat dengan orang tua siswa membahas tentang kenaikan uang sekolah dan penertiban siswa yang membawa sepeda motor, serta pembahasan masalah pengguna ponsel di saat jam belajar.',
                jam: 'Pukul: 10:00 WIB',
              },
            ],
          },
          {
            tanggal: 'Jumat, 13 September 2022 (Hari Ini)',
            subData: [
              {
                title: 'Jumat Bersih',
                content:
                  'Melakukan bersih-bersih lingkungan sekolah yang diikuti oleh seluruh warga sekolah (guru, siswa, dan staf).',
                jam: 'Pukul: 07:30 WIB',
              },
              {
                title: 'Pengumuman Lomba Baca Puisi',
                content:
                  'Ini adalah contoh potongan isi berita yang diposting oleh admin sekolah tentang kegiatan lomba baca puisi.',
                jam: 'Pukul: 09:00 WIB',
              },
            ],
          },
          {
            tanggal: 'Kamis, 12 September 2022',
            subData: [
              {
                title: 'Jumat Bersih',
                content:
                  'Ini adalah contoh potongan isi berita yang diposting oleh admin sekolah tentang kegiatan jumat bersih.',
                jam: 'Senin, 1 September 2022',
              },
            ],
          },
        ]}
        nestedScrollEnabled
        ListHeaderComponent={
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <Text style={styles.inputTitle}>Urutkan</Text>
              <TextInput
                editable={false}
                value="- Baru ke lama -"
                style={styles.input}
              />
              <RectButton style={styles.button}>
                <Text style={styles.buttonTitle}>Lihat</Text>
              </RectButton>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyData}>Agenda tidak ditemukan...</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item}) => (
          <RectButton style={styles.itemContainer}>
            <Text style={styles.tanggal}>{item.tanggal}</Text>
            <SubItem data={item.subData} />
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
    padding: '6%',
    minHeight: windowHeight,
  },
  separator: {
    height: '0.2%',
    marginVertical: '2%',
  },
  itemContainer: {
    minHeight: windowWidth * 0.12,
    backgroundColor: '#EAEAEA',
    borderRadius: windowWidth * 0.02,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: '6%',
    paddingBottom: 0,
    elevation: 10,
  },
  tanggal: {
    fontSize: windowWidth * 0.038,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
    paddingHorizontal: '6%',
  },
  subItemContainer: {
    paddingBottom: '6%',
  },
  subItemTitle: {
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Bold',
    color: 'black',
    marginBottom: '5%',
  },
  subItem: {
    backgroundColor: 'white',
    padding: '4%',
    paddingTop: '2%',
    borderRadius: windowWidth * 0.02,
    elevation: 10,
    marginTop: '4%',
    width: '88%',
    alignSelf: 'center',
  },
  subItemContent: {
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    color: 'black',
  },
  subItemJam: {
    fontSize: windowWidth * 0.028,
    fontFamily: 'OpenSans-Regular',
    fontStyle: 'italic',
    marginTop: '3%',
    color: 'black',
  },
});
