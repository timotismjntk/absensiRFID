/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {StyleSheet, Image, FlatList, Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {windowWidth, windowHeight} from '../../utils';

export default function Blog({navigation, route}) {
  const memoizedData = useMemo(
    () =>
      route.params.title === 'BLOG SISWA'
        ? [
            {
              image:
                'https://litbangkespangandaran.litbang.kemkes.go.id/wp-content/uploads/2021/10/sumpahpemuda21-fea.jpg',
              judul: 'SUMPAH PEMUDA: BERSATU, BANGKIT, DAN TUMBUH',
              konten:
                'SUMPAH PEMUDA: Bersatu, Bangkit, dan Tumbuh Satu Nusa, Satu Bangsa, dan Satu Bahasa, telah diikrarkan oleh para pemuda pada 28 Oktober 1928. Sebuah ikrar yang menjadi titik tolak munculnya kesadaran..',
              createdAt: 'Rabu, 03 November 2021',
            },
            {
              image:
                'https://sman2plusmarbisuk.sch.id/wp-content/uploads/2021/05/national-cancer-institute-N_aihp118p8-unsplash-1.jpg',
              judul: '5 TIPS BELAJAR MATEMATIKA YANG BENAR',
              konten:
                'Sebagian dari kamu pasti menganggap matematika itu pelajaran paling sukar. Padahal, sebenarnya tidak. Ilmu pasti ini selalu memberikan jawaban sesuai rumusnya, tak pernah meleset dari target. Itu sebab, matematika punya..',
              createdAt: 'Rabu, 03 November 2021',
            },
            {
              image:
                'https://www.blogsiswa.com/wp-content/uploads/2018/02/puisi-ibu.jpg',
              judul: 'Puisi: “MERINDU IBU”',
              konten: `MERINDU IBU


        Rasa asaku terbalut mentari malam
        
        Cek-cok binatang malam mencekik pilu
        
        Renung sukmaku terbesit masa lalu
        
        Gemuruh jiwaku menyambar ragaku
        
        
        
        Kesendirianku menginginkan secercah harapan
        
        Disetiap poros waktu,hanya ada pilu
        
        Yang menyelimuti sepiku
        
        Aku bersajak karena naluriku yang tajam
        
        
        
        Bagaimana tidak, Aku merindukanmu ?
        
        Disetiap ujung malamku ada mimpi tentangmu
        
        Hatiku terjerat tuk kembali dalam pelukanmu
        
        Ku merindumu Ibu
        
        
        
        Hanya ada mentari malam yang menerangi gulitaku
        
        Linangan air mataku mengingatkan
        
        Tentangmu
        
        Tentang cerita kisah denganmu
        
        
        
        Ibu ,….
        
        Tunggu aku, Aku akan kembali dalam pelukanmu
        
        Setelah aku berhasil melepas rok abu-abuku
        
        Dengan membawa lembaran nilai yang memuaskan
        
        
        
        Mimpimu adalah mimpiku
        
        Kita akan membawa mimpi kita bersama
        
        Mimpi yang dulu aku inginkan
        
        Mimpi duduk dibangku perkuliahan
        
        
        
        Dan padamu Tuhan, Aku selalu Berdoa
        
        Tuk mewujudkan mimpi besarku
        
        Membuat senyum bahagiamu
        
        Adalah hal yang terindah untukku`,
              createdAt: 'Jumat, 06 Februari 2020',
            },
          ]
        : [
            {
              image:
                'https://sman22jakarta.sch.id/wp-content/uploads/2022/06/COVER-BUKU-PUISI.jpg',
              judul: 'Karya Peserta Didik: Antologi Puisi “Kesaksian',
              konten:
                'Buku ini adalah kumpulan puisi terbaik siswa-siswi SMAN 1 Kualuh Hulu Kelas X Tahun Ajaran 2021/2022. Antologi puisi ini bercerita..',
              createdAt: 'Senin, 10 Januari 2022',
            },
            {
              image:
                'https://sman22jakarta.sch.id/wp-content/uploads/2022/06/IMG-20220525-WA0001.jpg',
              judul: 'Karya Peserta Didik : Infografis Sejarah',
              konten:
                'Karya Kelompok I : Membahas tentang tokoh pahlawan Nasional Kapitan Pattimura. Klik di sini untuk mengunduh infografis hasil karya temanmu..',
              createdAt: 'Jumat, 06 Desember 2021',
            },
            {
              image:
                'https://sekolahmuridmerdeka.id/blog/wp-content/uploads/2022/07/10-0-glitzmedia-co.jpg',
              judul: 'Ini Pentingnya Mengajarkan Etika Sopan Santun pada Anak',
              konten:
                'Usia di bawah 5 tahun menjadi waktu yang tepat untuk orang tua melatih dan mengajarkan anak pada banyak kebiasaan baik. Ini termasuk disiplin, mengelola emosi, mengatasi rasa sedih, menunjukkan sikap empati, bersikap mandiri, bersosialisasi, dan tak ketinggalan, etika sopan santun. Bukan tanpa alasan, semua hal tersebut akan menjadi bekal anak untuk menghadapi berbagai situasi dan karakter orang lain di masa remaja dan dewasanya nanti.',
              createdAt: 'Minggu, 12 September 2021',
            },
            {
              image:
                'https://sekolahmuridmerdeka.id/blog/wp-content/uploads/2022/01/image5.jpg',
              judul:
                'Pengalaman Baru Yang Seru Menyusuri Hutan dan Menanam Mangrove',
              konten: `Di tengah keadaan lingkungan yang semakin mengkawatirkan, penting untuk kita terus berupaya memperbaiki dan menjaga lingkungan agar tetap lestari, tak terkecuali hutan mangrove. Tanaman mangrove, atau yang juga disebut tanaman bakau mempunyai peran yang sangat penting sebagai tumbuhan yang mampu menahan arus air laut yang mengikis daratan pantai (abrasi).
        Kali ini, Kawan Murid jenjang SMP dan SMA diajak untuk belajar tentang ekosistem hutan mangrove, piknik bersama dan melakukan penanaman mangrove sebagai bukti nyata aksi untuk menyelamatkan lingkungan sekitar. 6 Januari 2022 yang lalu, sebanyak 37 Kawan Murid mengikuti kegiatan ini, belajar sekaligus bertemu dengan teman baru yang belum pernah mereka jumpai sebelumnya.`,
              createdAt: 'Sabtu, 06 Juli 2021',
            },
          ],
    [route.params.title],
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={memoizedData}
        renderItem={({item, index}) => (
          <View style={[styles.defaultItem, {backgroundColor: 'white'}]}>
            {/* <View
              style={
                item?.icon
                  ? styles.customIconWrapper
                  : styles.defaultIconWrapper
              }>
              <Image
                style={styles.icon}
                source={
                  item.image
                    ? {uri: item.image}
                    : require('../../assets/icons2/exampleBerita.png')
                }
              />
            </View> */}
            <View style={styles.itemCenterContent}>
              <Text numberOfLines={1} style={styles.itemCenterContentTitle}>
                {item?.judul || 'Ini Adalah Judul Berita Diposting Sekola...'}
              </Text>
              <Text numberOfLines={2} style={styles.itemCenterContentSubTitle}>
                {item?.konten ||
                  'Ini adalah contoh potongan isi berita yang diposting oleh admin sekolah tentang kegiatan yang dilaksanakan oleh...'}
              </Text>
              <Text numberOfLines={2} style={styles.itemCenterContentCreatedAt}>
                {item?.createdAt}
              </Text>
            </View>
            <RectButton
              rippleColor={'white'}
              style={styles.button}
              onPress={() =>
                navigation.navigate('DetailBlog', {
                  ...route.params,
                  ...item,
                })
              }
            />
          </View>
        )}
        contentContainerStyle={styles.flatlistContainer}
        ListFooterComponent={
          memoizedData?.length > 0 && (
            <RectButton style={styles.loadMore}>
              <MaterialIcons
                name="refresh"
                size={windowWidth * 0.07}
                color="white"
              />
              <Text style={styles.loadMoreLabel}>Load More</Text>
            </RectButton>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    marginBottom: '3%',
  },
  headerTitle: {
    color: 'black',
    fontSize: windowWidth * 0.045,
    fontFamily: 'OpenSans-Bold',
    paddingBottom: '1%',
  },
  headerSubTitle: {
    color: 'grey',
    fontSize: windowWidth * 0.032,
    fontFamily: 'OpenSans-Regular',
    paddingBottom: '2%',
  },
  flatlistContainer: {
    paddingVertical: '6%',
    paddingTop: '30%',
  },
  defaultItem: {
    alignSelf: 'center',
    marginBottom: '4%',
    borderRadius: windowWidth * 0.02,
    width: windowWidth * 0.85,
    height: windowWidth * 0.21,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultIconWrapper: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.21,
    overflow: 'hidden',
  },
  customIconWrapper: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    overflow: 'hidden',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemCenterContent: {
    flex: 1,
    padding: '2%',
  },
  itemCenterContentTitle: {
    color: 'black',
    fontSize: windowWidth * 0.034,
    fontFamily: 'OpenSans-Bold',
  },
  itemCenterContentSubTitle: {
    color: 'black',
    fontSize: windowWidth * 0.03,
    fontFamily: 'OpenSans-Regular',
    lineHeight: 13,
    marginTop: '2%',
  },
  itemCenterContentCreatedAt: {
    color: 'black',
    fontSize: windowWidth * 0.028,
    marginTop: '2%',
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    position: 'absolute',
    borderRadius: windowWidth * 0.02,
    width: '100%',
    height: '100%',
  },
  loadMore: {
    backgroundColor: '#61A2F9',
    alignSelf: 'center',
    width: windowWidth * 0.38,
    height: windowWidth * 0.11,
    borderRadius: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '4%',
  },
  loadMoreLabel: {
    color: 'white',
    fontSize: windowWidth * 0.044,
    fontFamily: 'OpenSans-Bold',
  },
});
