import Axios from 'axios';
import https from 'https';


function getSetup(baseURL) {

  return Axios.create({
    baseURL,
    auth: {
      username: process.env.WP_APP_USERNAME,
      password: process.env.WP_APP_PASSWORD,
    },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  });
}

const WooCommerceAPI = getSetup(process.env.WC_API_URL);
const WooCommerceAnalyticsAPI = getSetup(process.env.WC_API_ANALYTICS_URL);
const WooCommerceSearchSuggestionsAPI = getSetup(process.env.WC_API_SEARCH_SUGGS_URL);


export {
  WooCommerceAPI,
  WooCommerceAnalyticsAPI,
  WooCommerceSearchSuggestionsAPI
};