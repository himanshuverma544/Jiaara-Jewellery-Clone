import Axios from 'axios';


let controller;

export const getSearchSuggestions = async (searchQuery = "") => {

  if (controller) {
    controller.abort();
  }

  controller = new AbortController();

  try {
    const response = await Axios.get('/api/cms/woocommerce/search/getSuggestions/', {
      params: { searchQuery },
      signal: controller.signal
    });

    console.log('Suggestions:', response.data);
  }
  catch (error) {
    if (Axios.isCancel(error)) {
      console.log('Request cancelled:', error.message);
    }
    else {
      console.error('Error fetching suggestions:', error);
    }
  }
}