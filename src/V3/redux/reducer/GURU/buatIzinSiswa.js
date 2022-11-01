import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../../helpers/http';

const initialState = {
  tahunAjaran: {},
  isLoadingTahunAjaran: false,
  kelas: {},
  isLoadingKelas: false,
  siswa: {},
  isLoadingSiswa: {},
  buatIzinSiswaResult: {},
  isLoadingBuatIzin: false,
};

export const getTahunAjaran = createAsyncThunk(
  'tahunAjaran/getTahunAjaran',
  async ({website_id}) => {
    const {data} = await http().post('sekolah?api=getTahunajaran', {
      website_id,
    });
    return data;
  },
);

export const getKelas = createAsyncThunk(
  'kelas/getKelas',
  async ({tahunajaran_id}) => {
    const {data} = await http().post('sekolah?api=getKelas', {
      tahunajaran_id,
    });
    return data;
  },
);

export const getSiswa = createAsyncThunk(
  'siswa/getSiswa',
  async ({kelas_id}) => {
    const {data} = await http().post('sekolah?api=getSiswa', {
      kelas_id,
    });
    return data;
  },
);

export const buatIzinSiswa = createAsyncThunk(
  'izin/buatIzin',
  async ({
    website_id,
    tahunajaran_id,
    kelas_id,
    siswa_id,
    mulai,
    sampai,
    jenis_izin,
    keterangan,
  }) => {
    const {data} = await http().post('sekolah?api=buatIzinsiswa', {
      website_id,
      tahunajaran_id,
      kelas_id,
      siswa_id,
      mulai,
      sampai,
      jenis_izin,
      keterangan,
    });
    return data;
  },
);

const tahunAjaranSlicer = createSlice({
  name: 'izin',
  initialState,
  reducers: {
    clearTahunAjaran: (state, action) => {
      return {
        ...state,
        tahunAjaran: {},
        isLoadingTahunAjaran: false,
      };
    },
    clearKelas: (state, action) => {
      return {
        ...state,
        kelas: {},
        isLoadingKelas: false,
      };
    },
    clearSiswa: (state, action) => {
      return {
        ...state,
        siswa: {},
        isLoadingSiswa: false,
      };
    },
    clearBuatIzinSiswa: (state, action) => {
      return {
        ...state,
        buatIzinSiswaResult: {},
        isLoadingBuatIzin: false,
      };
    },
  },
  extraReducers: {
    [getTahunAjaran.pending]: state => {
      return {
        ...state,
        isLoadingTahunAjaran: true,
        tahunAjaran: {},
      };
    },
    [getTahunAjaran.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingTahunAjaran: false,
        tahunAjaran: payload,
      };
    },
    [getTahunAjaran.rejected]: state => {
      return {
        ...state,
        isLoadingTahunAjaran: false,
      };
    },
    [getKelas.pending]: state => {
      return {
        ...state,
        isLoadingKelas: true,
        kelas: {},
      };
    },
    [getKelas.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingKelas: false,
        kelas: payload,
      };
    },
    [getKelas.rejected]: state => {
      return {
        ...state,
        isLoadingKelas: false,
      };
    },
    [getSiswa.pending]: state => {
      return {
        ...state,
        isLoadingSiswa: true,
        siswa: {},
      };
    },
    [getSiswa.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingSiswa: false,
        siswa: payload,
      };
    },
    [getSiswa.rejected]: state => {
      return {
        ...state,
        isLoadingSiswa: false,
      };
    },
    [buatIzinSiswa.pending]: state => {
      return {
        ...state,
        isLoadingBuatIzin: true,
        buatIzinSiswaResult: {},
      };
    },
    [buatIzinSiswa.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingBuatIzin: false,
        buatIzinSiswaResult: payload,
      };
    },
    [buatIzinSiswa.rejected]: state => {
      return {
        ...state,
        isLoadingBuatIzin: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearTahunAjaran, clearKelas, clearSiswa, clearBuatIzinSiswa} =
  tahunAjaranSlicer.actions;

export default tahunAjaranSlicer.reducer;
