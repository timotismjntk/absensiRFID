/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {StackActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// auth screens
import LoginGuru from '../../screens/GURU/Login';
import LupaPasswordGuru from '../../screens/GURU/LupaPassword';

// user screens
import HomeGuru from '../../screens/GURU/Home';
import ProfilGuru from '../../screens/GURU/Profil';

// absen screens
import MulaiAbsenGuru from '../../screens/GURU/MulaiAbsenGuru';
import AbsenSiswa from '../../screens/GURU/AbsenSiswa';

// log absen screens
import LogAbsen from '../../screens/GURU/LogAbsen';
import LogAbsenSiswa from '../../screens/GURU/LogAbsenSiswa';

// siswa screens
import DataSiswa from '../../screens/GURU/DataSiswa';
import ProfilSiswa from '../../screens/GURU/ProfilSiswa';

// guru lain screens
import DataGuru from '../../screens/GURU/DataGuru';
import ProfilGuruLain from '../../screens/GURU/ProfilGuruLain';

// izin screens
import TambahIzinSiswa from '../../screens/GURU/TambahIzinSiswa';

// agenda screens
import Agenda from '../../screens/GURU/Agenda';

// alumni screens
import DataAlumni from '../../screens/GURU/DataAlumni';
import ProfilAlumni from '../../screens/GURU/ProfilAlumni';

// pelanggaran siswa screens
import HomePelanggaranSiswa from '../../screens/GURU/Pelanggaran/HomePelanggaranSiswa';
import DataPelanggaranSiswa from '../../screens/GURU/Pelanggaran/DataPelanggaranSiswa';
import TambahPelanggaranSiswa from '../../screens/GURU/Pelanggaran/TambahPelanggaranSiswa';
import PoinPelanggaranSiswa from '../../screens/GURU/Pelanggaran/PoinPelanggaranSiswa';

// akademik screens
import HomeAkademikGuru from '../../screens/GURU/Akademik/HomeAkademikGuru';

// anggota kelas screens
import AnggotaKelas from '../../screens/GURU/Akademik/AnggotaKelas/AnggotaKelas';

// jadwal pelajaran screens
import JadwalPelajaran from '../../screens/GURU/Akademik/JadwalPelajaran/JadwalPelajaran';

// pertemuan screens
import HomePertemuan from '../../screens/GURU/Akademik/Pertemuan/HomePertemuan';
import BuatPertemuan from '../../screens/GURU/Akademik/Pertemuan/BuatPertemuan';
import ListPertemuan from '../../screens/GURU/Akademik/Pertemuan/Pertemuan';

// koleksi materi screens
import KoleksiMateri from '../../screens/GURU/Akademik/KoleksiMateri/KoleksiMateri';

// amprah gaji screens
import AmprahGaji from '../../screens/GURU/AmprahGaji';

const Stack = createStackNavigator();
import {
  horizontalTransition,
  moderateScale,
  windowHeight,
  windowWidth,
} from '../../utils';

export default function GuruNavigator() {
  // call accesscode stored in mmkv storage
  const {authGuru = {}} = useSelector(state => state.authGuru) || {};

  if (authGuru?.status === 'berhasil') {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'OpenSans-SemiBold',
              fontSize: moderateScale(15),
            },
            headerShown: false,
          }}
          name="HomeGuru"
          component={HomeGuru}
          lazy={true}
        />
        {[
          {
            id: 1,
            headerTitle: 'PROFIL SAYA',
            name: 'ProfilGuru',
            component: ProfilGuru,
          },
          {
            id: 2,
            headerTitle: 'ABSEN MASUK / PULANG',
            name: 'MulaiAbsenGuru',
            component: MulaiAbsenGuru,
          },
          {
            id: 3,
            headerTitle: 'ABSEN SISWA',
            name: 'AbsenSiswa',
            component: AbsenSiswa,
          },
          {
            id: 4,
            headerTitle: 'LOG ABSEN',
            name: 'LogAbsen',
            component: LogAbsen,
          },
          {
            id: 5,
            headerTitle: 'LOG ABSEN SISWA',
            name: 'LogAbsenSiswa',
            component: LogAbsenSiswa,
          },
          {
            id: 6,
            headerTitle: 'DATA SISWA',
            name: 'DataSiswa',
            component: DataSiswa,
          },
          {
            id: 7,
            headerTitle: 'PROFIL SISWA',
            name: 'ProfilSiswa',
            component: ProfilSiswa,
          },
          {
            id: 8,
            headerTitle: 'DATA GURU',
            name: 'DataGuru',
            component: DataGuru,
          },
          {
            id: 9,
            headerTitle: 'TAMBAH IZIN SISWA',
            name: 'TambahIzinSiswa',
            component: TambahIzinSiswa,
          },
          {
            id: 10,
            headerTitle: 'PROFIL GURU',
            name: 'ProfilGuruLain',
            component: ProfilGuruLain,
          },
          {
            id: 11,
            headerTitle: 'AGENDA',
            name: 'Agenda',
            component: Agenda,
          },
          {
            id: 12,
            headerTitle: 'DATA ALUMNI',
            name: 'DataAlumni',
            component: DataAlumni,
          },
          {
            id: 13,
            headerTitle: 'PROFIL ALUMNI',
            name: 'ProfilAlumni',
            component: ProfilAlumni,
          },
          {
            id: 14,
            headerTitle: 'PELANGGARAN SISWA',
            name: 'HomePelanggaranSiswa',
            component: HomePelanggaranSiswa,
          },
          {
            id: 15,
            headerTitle: 'DATA PELANGGARAN SISWA',
            name: 'DataPelanggaranSiswa',
            component: DataPelanggaranSiswa,
          },
          {
            id: 16,
            headerTitle: 'TAMBAH PELANGGARAN',
            name: 'TambahPelanggaranSiswa',
            component: TambahPelanggaranSiswa,
          },
          {
            id: 17,
            headerTitle: 'POIN PELANGGARAN SISWA',
            name: 'PoinPelanggaranSiswa',
            component: PoinPelanggaranSiswa,
          },
          {
            id: 18,
            headerTitle: 'AKADEMIK',
            name: 'HomeAkademikGuru',
            component: HomeAkademikGuru,
          },
          {
            id: 19,
            headerTitle: 'ANGGOTA KELAS',
            name: 'AnggotaKelas',
            component: AnggotaKelas,
          },
          {
            id: 20,
            headerTitle: 'JADWAL PELAJARAN',
            name: 'JadwalPelajaran',
            component: JadwalPelajaran,
          },
          {
            id: 21,
            headerTitle: 'PERTEMUAN',
            name: 'HomePertemuan',
            component: HomePertemuan,
          },
          {
            id: 22,
            headerTitle: 'BUAT PERTEMUAN',
            name: 'BuatPertemuan',
            component: BuatPertemuan,
          },
          {
            id: 23,
            headerTitle: 'PERTEMUAN',
            name: 'ListPertemuan',
            component: ListPertemuan,
          },
          {
            id: 24,
            headerTitle: 'KOLEKSI MATERI',
            name: 'KoleksiMateri',
            component: KoleksiMateri,
          },
          {
            id: 25,
            headerTitle: 'AMPRAH GAJI',
            name: 'AmprahGaji',
            component: AmprahGaji,
          },
        ].map(item => (
          <Stack.Screen
            key={item.id}
            options={{
              ...horizontalTransition,
              headerTitleAlign: 'center',
              headerTitle: item.headerTitle,
              headerTintColor: 'black',
              headerBackground: () => (
                <Image
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                  source={require('../../assets/icons2/headerBackground.png')}
                />
              ),
              headerBackgroundContainerStyle: {
                overflow: 'hidden',
                backgroundColor: '#3B3B3B',
                borderBottomLeftRadius: windowWidth * 0.1,
                borderBottomRightRadius: windowWidth * 0.1,
                height: windowHeight * 0.1,
                top: windowHeight * 0.03,
                borderWidth: 1,
                borderColor: '#BDBDBD',
              },
              headerTransparent: true,
              headerTitleStyle: {
                fontFamily: 'OpenSans-SemiBold',
                top: -windowHeight * 0.003,
                fontSize: windowWidth * 0.042,
              },
              headerLeftContainerStyle: {
                top: -windowHeight * 0.003,
              },
              headerStatusBarHeight: windowHeight * 0.05,
            }}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={({navigation}) => ({
            ...horizontalTransition,
            headerTitle: '',
            headerTransparent: true,
            headerLeft: headerLeftProp => (
              <TouchableWithoutFeedback
                onPress={() =>
                  headerLeftProp?.canGoBack
                    ? navigation?.goBack()
                    : navigation.dispatch(
                        StackActions.replace('DashboardNavigator'),
                      )
                }>
                <MaterialIcons
                  name="arrow-back"
                  size={windowWidth * 0.065}
                  style={{padding: '2%'}}
                  color="black"
                />
              </TouchableWithoutFeedback>
            ),
          })}
          name="LoginGuru"
          component={LoginGuru}
          lazy={true}
        />
        <Stack.Screen
          options={{
            ...horizontalTransition,
            headerTitle: '',
            headerTransparent: true,
          }}
          name="LupaPasswordGuru"
          component={LupaPasswordGuru}
          lazy={true}
        />
      </Stack.Navigator>
    );
  }
}
