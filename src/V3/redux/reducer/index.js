/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';

// reducers siswa
import authSiswa from './SISWA/auth';
import absenSiswa from './SISWA/absen';
import beritaSiswa from './SISWA/berita';
import informasiSiswa from './SISWA/informasi';
import logAbsenSiswa from './SISWA/logAbsen';
import agendaSiswa from './SISWA/agenda';
import profilSayaSiswa from './SISWA/profilSaya';
import galeriSiswa from './SISWA/galeri';

// reducers guru
import authGuru from './GURU/auth';
import absenGuru from './GURU/absen';
import beritaGuru from './GURU/berita';
import informasiGuru from './GURU/informasi';
import logAbsenGuru from './GURU/logAbsen';
import dataGuru from './GURU/dataGuru';
import dataSiswa from './GURU/dataSiswa';
import agendaGuru from './GURU/agenda';
import profilSayaGuru from './GURU/profilSaya';
import galeriGuru from './GURU/galeri';
import buatIzinSiswa from './GURU/buatIzinSiswa';

// reducers mesin
import authMesin from './MESIN/auth';
import absenMesin from './MESIN/absen';

export default combineReducers({
  authSiswa,
  absenSiswa,
  beritaSiswa,
  informasiSiswa,
  logAbsenSiswa,
  authGuru,
  absenGuru,
  beritaGuru,
  informasiGuru,
  logAbsenGuru,
  agendaGuru,
  profilSayaGuru,
  galeriGuru,
  buatIzinSiswa,
  authMesin,
  absenMesin,
  dataGuru,
  dataSiswa,
  agendaSiswa,
  profilSayaSiswa,
  galeriSiswa,
});
