import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../../helpers/http';

const initialState = {
  authSiswa: {},
  rememberMe: {
    website_id: '',
    username: '',
    password: '',
    isRemember: false,
  },
  lupaPassword: {},
  isLoadingLupaPassword: false,
  isLoadingLoginSiswa: false,
};

export const loginSiswa = createAsyncThunk(
  'authSiswa/loginSiswa',
  async ({username, password, website_id}) => {
    const {data} = await http().post('authentication', {
      username,
      password,
      website_id,
      form: 'Siswa',
    });
    return data;
  },
);

export const lupaPassword = createAsyncThunk(
  'authSiswa/lupapassword',
  async ({username}) => {
    const {data} = await http().post('lupapassword', {
      username,
    });
    return data;
  },
);

const authSiswaSlicer = createSlice({
  name: 'authSiswa',
  initialState,
  reducers: {
    rememberMe: (
      state,
      {payload: {username, password, isRemember = false, website_id}},
    ) => {
      if (isRemember) {
        return {
          ...state,
          rememberMe: {
            ...state.rememberMe,
            username,
            password,
            website_id,
          },
        };
      } else {
        return {
          ...state,
          rememberMe: {
            ...state.rememberMe,
            username: '',
            password: '',
            website_id: '',
          },
        };
      }
    },
    clearLupaPassword: (state, action) => {
      return {
        ...state,
        lupaPassword: {},
      };
    },
    logoutSiswa: (state, action) => {
      return {
        ...state,
        authSiswa: {},
      };
    },
    clearStateSiswa: (state, action) => {
      return {
        ...state,
        authSiswa: {},
        isLoadingLoginSiswa: false,
      };
    },
  },
  extraReducers: {
    [loginSiswa.pending]: state => {
      return {
        ...state,
        isLoadingLoginSiswa: true,
      };
    },
    [loginSiswa.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingLoginSiswa: false,
        authSiswa: payload,
      };
    },
    [loginSiswa.rejected]: state => {
      return {
        ...state,
        isLoadingLoginSiswa: false,
      };
    },
    [lupaPassword.pending]: state => {
      return {
        ...state,
        isLoadingLupaPassword: true,
      };
    },
    [lupaPassword.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingLupaPassword: false,
        lupaPassword: payload,
      };
    },
    [lupaPassword.rejected]: state => {
      return {
        ...state,
        isLoadingLupaPassword: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {rememberMe, clearStateSiswa, clearLupaPassword, logoutSiswa} =
  authSiswaSlicer.actions;

export default authSiswaSlicer.reducer;
