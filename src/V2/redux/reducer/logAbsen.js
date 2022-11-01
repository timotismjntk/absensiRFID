import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

const initialState = {
  logAbsen: {},
  isLoadingLogAbsen: false,
};

export const getLogAbsen = createAsyncThunk(
  'logAbsen/getLogAbsen',
  async siswa_id => {
    const {data} = await http().get(`getLogAbsen?siswa_id=${siswa_id}`);
    return data;
  },
);

const logAbsenSlicer = createSlice({
  name: 'logAbsen',
  initialState,
  reducers: {
    clearlogAbsen: (state, action) => {
      return {
        ...state,
        logAbsen: {},
        isLoadingLogAbsen: false,
      };
    },
  },
  extraReducers: {
    [getLogAbsen.pending]: state => {
      return {
        ...state,
        isLoadingLogAbsen: true,
      };
    },
    [getLogAbsen.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingLogAbsen: false,
        logAbsen: payload,
      };
    },
    [getLogAbsen.rejected]: state => {
      return {
        ...state,
        isLoadingLogAbsen: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearlogAbsen} = logAbsenSlicer.actions;

export default logAbsenSlicer.reducer;
