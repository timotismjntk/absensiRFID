import {default as axios} from 'axios';

const http = (
  url = 'https://asia-southeast2-absen-rfid.cloudfunctions.net',
  data,
) => {
  return axios.create({
    baseURL: `${url}/`,
  });
};

export default http;
