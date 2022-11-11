import {default as axios} from 'axios';

export const uploadUrl = 'https://app.sekoolah.id/upload.php';

const http = (
  url = 'https://asia-southeast2-absen-rfid.cloudfunctions.net',
  data,
) => {
  return axios.create({
    baseURL: `${url}/`,
  });
};

export default http;
