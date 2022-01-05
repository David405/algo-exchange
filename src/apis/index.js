// apis will go in here
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-eu1.tatum.io/v3/algorand',
});

api.defaults.headers.common['x-api-key'] =
  '5d3477ff-0d4f-4a70-8554-634b9f3c0a4f';
// "headers": {
//     "x-api-key": "REPLACE_KEY_VALUE"
//   }

export default api;
