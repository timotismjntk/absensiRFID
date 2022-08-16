/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';

import auth from './auth';
import beritaSekolah from './beritaSekolah';
import informasiSingkat from './informasiSingkat';

export default combineReducers({
  auth,
  beritaSekolah,
  informasiSingkat,
});
