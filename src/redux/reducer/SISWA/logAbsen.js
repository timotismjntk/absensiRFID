import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../../helpers/http';

const initialState = {
  logAbsenSiswa: {},
  isLoadingLogAbsenSiswa: false,
};

export const getLogAbsenSiswa = createAsyncThunk(
  'logAbsenSiswa/getLogAbsenSiswa',
  async ({siswa_id, tahun, bulan}) => {
    const {data} = await http().post('getLogAbsen', {siswa_id, tahun, bulan});
    return data;
  },
);

const logAbsenSiswaSlicer = createSlice({
  name: 'logAbsenSiswa',
  initialState,
  reducers: {
    clearlogAbsenSiswa: (state, action) => {
      return {
        ...state,
        logAbsenSiswa: {},
        isLoadingLogAbsenSiswa: false,
      };
    },
  },
  extraReducers: {
    [getLogAbsenSiswa.pending]: state => {
      return {
        ...state,
        isLoadingLogAbsenSiswa: true,
      };
    },
    [getLogAbsenSiswa.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingLogAbsenSiswa: false,
        logAbsenSiswa: payload,
      };
    },
    [getLogAbsenSiswa.rejected]: state => {
      return {
        ...state,
        isLoadingLogAbsenSiswa: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearlogAbsenSiswa} = logAbsenSiswaSlicer.actions;

export default logAbsenSiswaSlicer.reducer;
