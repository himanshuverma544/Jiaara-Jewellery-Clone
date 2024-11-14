import Axios from "axios";


export async function getCategories({
  page = 1,
  perPage = 100,
  parent = null,
} = {}) {

  const apiParams = {
    page,
    per_page: perPage,
  };

  if (parent !== null) {
    apiParams.parent = parent;
  }

  apiParams.keys = Object.keys(apiParams);

  try {
    const { data } = await Axios.get(`/api/cms/woocommerce/categories/getCategories`, {
      params: apiParams
    });

    return data;
  }
  catch (error) {
    console.error("Error fetching Categories from the Frontend.", error);
    return [];
  }
};
