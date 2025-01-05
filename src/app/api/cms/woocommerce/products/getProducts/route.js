import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";

import getProductDetails from "@/utils/functions/general/getProductDetails";
import convertValue from "@/utils/functions/general/convertValue";


export async function GET(req) {

  const allProducts = [];
  const storeInfo = { status: false };

  const { searchParams: params } = new URL(req.url);
  const keys = params.getAll("keys[]");
  const apiParams = {};

  for (const key of keys) {
    const value = params.get(key);
    apiParams[key] = convertValue(value);
  }

  const id = apiParams?.id ?? "";
  if (id) {
    delete apiParams?.id;
  }

  let page = apiParams.page || 1;

  try {
    while (true) {
      
      const { data, headers } = await WooCommerceAPI.get(`/products/${id}`, {
        params: apiParams
      });

      if (data?.length === 0) break;

      const formattedData = Array.isArray(data) ? data : [data];

      const products = formattedData?.map(product => getProductDetails(product));

      allProducts.push(...products);
      
      if (!storeInfo.status) {
        storeInfo.totalProducts = headers['x-wp-total'];
        storeInfo.totalPages = headers['x-wp-totalpages'];
        storeInfo.status = true;
      }

      if (apiParams.paginate || id) break;

      apiParams.page = ++page;
    }

    return new Response(JSON.stringify({
      products: allProducts,
      storeInfo
    }), { status: 200 });
  }
  catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching Products from the backend",
        details: error.message
      }),
      { status: 500 }
    );
  }
}