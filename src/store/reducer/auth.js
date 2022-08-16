import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import QueryString from 'qs';

const initialState = {
  mesinAbsen: {},
  isLoadingMesinAbsen: false,
  mulaiAbsen: {},
  isLoadingMulaiAbsen: false,
  pengguna: {},
  isLoadingPengguna: false,
};

export const loginMesinAbsen = createAsyncThunk(
  'auth/loginMesinAbsen',
  async kodeAkses => {
    const {data} = await http().get(`cekKodeAkses?kode_akses=${kodeAkses}`);
    return data;
  },
);
export const scanRFID = createAsyncThunk('auth/mulaiAbsen', async val => {
  const {data} = await http().get(`doAbsen?${QueryString.stringify(val)}`);
  return data;
});
export const loginPengguna = createAsyncThunk(
  'auth/loginPengguna',
  async nik => {
    const {data} = await http().get(`cekNik?nik=${nik}`);
    return data;
  },
);

const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutMesinAbsen: (state, action) => {
      return {
        ...state,
        mesinAbsen: {},
      };
    },
    clearStateMesinAbsen: (state, action) => {
      return {
        ...state,
        mesinAbsen: {},
        isLoadingMesinAbsen: false,
      };
    },
    clearMulaiAbsen: (state, action) => {
      return {
        ...state,
        mulaiAbsen: {},
        isLoadingMulaiAbsen: false,
      };
    },
    logoutPengguna: (state, action) => {
      return {
        ...state,
        pengguna: {},
      };
    },
    clearStatePengguna: (state, action) => {
      return {
        ...state,
        pengguna: {},
        isLoadingPengguna: false,
      };
    },
  },
  extraReducers: {
    [loginMesinAbsen.pending]: state => {
      return {
        ...state,
        isLoadingMesinAbsen: true,
      };
    },
    [loginMesinAbsen.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingMesinAbsen: false,
        mesinAbsen: payload,
      };
    },
    [loginMesinAbsen.rejected]: state => {
      return {
        ...state,
        isLoadingMesinAbsen: false,
      };
    },
    [scanRFID.pending]: state => {
      return {
        ...state,
        isLoadingMulaiAbsen: true,
      };
    },
    [scanRFID.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingMulaiAbsen: false,
        mulaiAbsen: payload,
      };
    },
    [scanRFID.rejected]: state => {
      return {
        ...state,
        isLoadingMulaiAbsen: false,
      };
    },
    [loginPengguna.pending]: state => {
      return {
        ...state,
        isLoadingPengguna: true,
      };
    },
    [loginPengguna.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingPengguna: false,
        pengguna: payload,
      };
    },
    [loginPengguna.rejected]: state => {
      return {
        ...state,
        isLoadingPengguna: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  logoutMesinAbsen,
  clearStateMesinAbsen,
  clearMulaiAbsen,
  logoutPengguna,
  clearStatePengguna,
} = authSlicer.actions;

export default authSlicer.reducer;
