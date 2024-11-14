import Axios from 'axios';
import https from 'https';

const WooCommerceAPI = Axios.create({
  baseURL: process.env.WC_API_URL,
  auth: {
    username: process.env.WP_APP_USERNAME,
    password: process.env.WP_APP_PASSWORD,
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
});


export default WooCommerceAPI;
