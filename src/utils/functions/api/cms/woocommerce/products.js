import Axios from "axios";


export async function getProducts({
  page = 1,
  perPage = 100,
  categoryId = null,
  onSale = null,
  status = null
} = {}) {

  const apiParams = {
    page: page,
    per_page: perPage,
  };

  if (categoryId !== null) {
    apiParams.category = categoryId;
  }

  if (onSale !== null) {
    apiParams.on_sale = onSale;
  }

  if (status !== null) {
    apiParams.status = status;
  }

  console.log({apiParams});

  apiParams.keys = Object.keys(apiParams);

  try {
    const { data } = await Axios.get(`/api/cms/woocommerce/products/getProducts`, {
      params: apiParams
    });

    return data;
  }
  catch (error) {
    console.error("Error fetching Products from the Frontend.", error);
    return [];
  }
};