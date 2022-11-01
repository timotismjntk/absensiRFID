import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../../helpers/http';

const initialState = {
  profilSaya: {},
  isLoadingProfilSaya: false,
  updateProfilSaya: {},
  isLoadingUpdateProfilSaya: false,
};

export const getProfilSaya = createAsyncThunk(
  'profilSaya/getProfilSaya',
  async ({user_id}) => {
    const {data} = await http().post('getProfile', {user_id});
    return data;
  },
);

export const updateProfilSayaRedux = createAsyncThunk(
  'profilSaya/updateProfilSaya',
  async ({user_id, nomor_wa, password}) => {
    const {data} = await http().post('sekolah?api=updateProfile', {
      user_id,
      nomor_wa,
      password,
    });
    return data;
  },
);

const profilSayaSlicer = createSlice({
  name: 'profilSaya',
  initialState,
  reducers: {
    clearProfilSaya: (state, action) => {
      return {
        ...state,
        profilSaya: {},
        isLoadingProfilSaya: false,
      };
    },
    clearUpdateProfilSaya: (state, action) => {
      return {
        ...state,
        updateProfilSaya: {},
        isLoadingUpdateProfilSaya: false,
      };
    },
  },
  extraReducers: {
    [getProfilSaya.pending]: state => {
      return {
        ...state,
        isLoadingProfilSaya: true,
      };
    },
    [getProfilSaya.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingProfilSaya: false,
        profilSaya: payload,
      };
    },
    [getProfilSaya.rejected]: state => {
      return {
        ...state,
        isLoadingProfilSaya: false,
      };
    },
    [updateProfilSayaRedux.pending]: state => {
      return {
        ...state,
        isLoadingUpdateProfilSaya: true,
      };
    },
    [updateProfilSayaRedux.fulfilled]: (state, {payload}) => {
      return {
        ...state,
        isLoadingUpdateProfilSaya: false,
        updateProfilSaya: payload,
      };
    },
    [updateProfilSayaRedux.rejected]: state => {
      return {
        ...state,
        isLoadingUpdateProfilSaya: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {clearProfilSaya, clearUpdateProfilSaya} =
  profilSayaSlicer.actions;

export default profilSayaSlicer.reducer;
