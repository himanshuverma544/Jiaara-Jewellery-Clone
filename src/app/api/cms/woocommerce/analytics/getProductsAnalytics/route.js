import { WooCommerceAnalyticsAPI } from "@/app/api/cms/woocommerce/config";

import convertValue from "@/utils/functions/general/convertValue";
import getProductDetails from "@/utils/functions/general/getProductDetails";


export async function GET(req) {

  const allProducts = [];
  const storeInfo = {
    status: false
  };

  const { searchParams: params } = new URL(req.url);
  const keys = params.getAll("keys[]");
  const apiParams = {};

  for (const key of keys) {
    const value = params.get(key);
    apiParams[key] = convertValue(value);
  }

  let page = apiParams.page;

  try {
    while (true) {
      
      const { data, headers } = await WooCommerceAnalyticsAPI.get("/reports/products", {
        params: apiParams,
      });

      if (data.length === 0) break;

      const products = await Promise.all(data.map(async requiredProduct => {

        const theEndpoint = requiredProduct?._links?.product[0]?.href;
        const productDetailsEndpoint = theEndpoint.substring(theEndpoint.indexOf("/products/"));
        
        try {
          const { data: product } = await WooCommerceAnalyticsAPI.get(productDetailsEndpoint);
          return (getProductDetails(product));
        }
        catch(error) {
          console.error("Error fetching Products from the backend");
          return null;
        }
      }));

      allProducts.push(...products);

      if (apiParams.paginate) break;

      apiParams.page = ++page;

      if (!storeInfo.status) {
        storeInfo.totalProducts = headers['x-wp-total'];
        storeInfo.totalPages = headers['x-wp-totalpages'];
        storeInfo.status = true;
      }
    }
  
    return new Response(
      JSON.stringify({
        products: allProducts,
        storeInfo
      }),
      { status: 200 }
    );
  }
  catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching Analytics from the backend",
        details: error.message
      }),
      { status: 500 }
    );
  }
}