import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../../helpers/http';

const initialState = {
  profilSaya: {},
  isLoadingProfilSaya: false,
};

export const getProfilSaya = createAsyncThunk(
  'profilSaya/getProfilSaya',
  async ({user_id}) => {
    const {data} = await http().post('getProfile', {user_id});
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
        ProfilSaya: {},
        isLoadingProfilSaya: false,
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
  },
});

// Action creators are generated for each case reducer function
export const {clearProfilSaya} = profilSayaSlicer.actions;

export default profilSayaSlicer.reducer;
