import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

const initialState = {
  beritaSekolah: {},
  isLoadingBeritaSekolah: false,
};

export const getBeritaSekolah = createAsyncThunk(
  'beritaSekolah/getBeritaSekolah',
  async website_id => {
    const {data} = await http().get(`getBerita?website_id=${website_id}`);
    return data;
  },
);

const beritaSekolahSlicer = createSlice({
  name: 'berita',
  initialState,
  reducers: {
    clearBeritaSekolah: (state, action) => {
      return {
        ...state,
        beritaSekolah: {},
        isLoadingBeritaSekolah: false,
      };
    },
  },
  extraReducers: {
    [getBeritaSekolah.pending]: state => {
      return {
        ...state,
        isLoadingBeritaSekolah: true,
      };
    },
    [getBeritaSekolah.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingBeritaSekolah: false,
        beritaSekolah: payload,
      };
    },
    [getBeritaSekolah.rejected]: state => {
      return {
        ...state,
        isLoadingBeritaSekolah: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearBeritaSekolah} = beritaSekolahSlicer.actions;

export default beritaSekolahSlicer.reducer;
