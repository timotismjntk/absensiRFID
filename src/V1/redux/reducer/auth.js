import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import QueryString from 'qs';

const initialState = {
  mesinAbsen: {},
  isLoadingMesinAbsen: false,
  mulaiAbsen: {},
  failedAbsen: false,
  dataAbsenGagal: [],
  isLoadingMulaiAbsen: false,
  pengguna: {},
  isLoadingPengguna: false,
  isLoginUserModalSuccessOpen: true,
  isLoginMesinModalSuccessOpen: true,
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
        isLoginMesinModalSuccessOpen: true,
      };
    },
    clearStateMesinAbsen: (state, action) => {
      return {
        ...state,
        mesinAbsen: {},
        isLoadingMesinAbsen: false,
      };
    },
    showModalSuccess: (state, {payload}) => {
      if (payload.from === 'pengguna') {
        return {
          ...state,
          isLoginUserModalSuccessOpen: payload.value || false,
        };
      } else {
        return {
          ...state,
          isLoginMesinModalSuccessOpen: payload.value || false,
        };
      }
    },
    saveToDbAbsenFailed: (state, {payload}) => {
      console.log([...state.dataAbsenGagal, payload]);
      return {
        ...state,
        dataAbsenGagal: [...state.dataAbsenGagal, payload],
      };
    },
    clearFailedAbsenFromDb: state => {
      return {
        ...state,
        dataAbsenGagal: [],
        failedAbsen: false,
      };
    },
    clearStatusFailedAbsen: state => {
      return {
        ...state,
        failedAbsen: false,
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
        isLoginUserModalSuccessOpen: true,
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
        isLoginMesinModalSuccessOpen: true,
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
        isLoginMesinModalSuccessOpen: false,
      };
    },
    [scanRFID.pending]: state => {
      return {
        ...state,
        isLoadingMulaiAbsen: true,
        failedAbsen: false,
      };
    },
    [scanRFID.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingMulaiAbsen: false,
        mulaiAbsen: payload,
        failedAbsen: false,
      };
    },
    [scanRFID.rejected]: state => {
      return {
        ...state,
        isLoadingMulaiAbsen: false,
        failedAbsen: true,
      };
    },
    [loginPengguna.pending]: state => {
      return {
        ...state,
        isLoadingPengguna: true,
        isLoginUserModalSuccessOpen: true,
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
        isLoginUserModalSuccessOpen: false,
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
  showModalSuccess,
  saveToDbAbsenFailed,
  clearFailedAbsenFromDb,
  clearStatusFailedAbsen,
} = authSlicer.actions;

export default authSlicer.reducer;
