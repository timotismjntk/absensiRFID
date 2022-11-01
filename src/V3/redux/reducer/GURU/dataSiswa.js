import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../../helpers/http';

const initialState = {
  dataSiswa: {},
  isLoadingDataSiswa: false,
};

export const getDataSiswa = createAsyncThunk(
  'dataSiswa/getDataSiswa',
  async ({tahun_masuk, website_id}) => {
    const {data} = await http().post('getDataSiswa', {tahun_masuk, website_id});
    return data;
  },
);

const dataSiswaSlicer = createSlice({
  name: 'dataSiswa',
  initialState,
  reducers: {
    clearDataSiswa: (state, action) => {
      return {
        ...state,
        dataSiswa: {},
        isLoadingDataSiswa: false,
      };
    },
  },
  extraReducers: {
    [getDataSiswa.pending]: state => {
      return {
        ...state,
        isLoadingDataSiswa: true,
        dataSiswa: {},
      };
    },
    [getDataSiswa.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingDataSiswa: false,
        dataSiswa: payload,
      };
    },
    [getDataSiswa.rejected]: state => {
      return {
        ...state,
        isLoadingDataSiswa: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearDataSiswa} = dataSiswaSlicer.actions;

export default dataSiswaSlicer.reducer;
