import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessCode: '',
  user: {
    NIK: '',
    nama: '',
  },
};

export const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessCode: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.accessCode = action.payload;
    },
    deleteAccessCode: state => {
      state.accessCode = '';
    },
    setUser: (state, action) => {
      console.log(state.user);
      if (Object.keys(action.payload).length > 0) {
        state.user.NIK = action.payload.NIK;
        state.user.nama = 'Adam Kurniawan Margolang';
        // state.user.name = action.payload.name;
      }
    },
    deleteUser: (state, action) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAccessCode, deleteAccessCode, setUser, deleteUser} =
  authSlicer.actions;

export default authSlicer.reducer;
