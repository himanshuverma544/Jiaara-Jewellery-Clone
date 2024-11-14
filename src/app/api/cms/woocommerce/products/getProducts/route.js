import WooCommerceAPI from "@/app/api/cms/woocommerce/config";

import getDiscountPercentage from "@/utils/functions/general/getDiscountPercentage";
import convertValue from "@/utils/functions/general/convertValue";


export async function GET(req) {

  const allProducts = [];
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
      
      const { data } = await WooCommerceAPI.get("/products", {
        params: apiParams,
      });

      if (data.length === 0) break;

      const products = data.map(product => ({
        id: product?.id,
        name: product?.name,
        slug: product?.slug,
        image: product?.images?.length > 0 ? product?.images[0]?.src : null,
        price: product?.price,
        regularPrice: product?.on_sale ? product?.regular_price : null,
        salePrice: product?.on_sale ? product?.sale_price : null,
        discountPercentage: product?.on_sale ? 
          getDiscountPercentage({
            actualPrice: product?.regular_price,
            discountedPrice: product?.sale_price
          }) 
        : 
          null,
        rating: product?.average_rating,
      }));

      allProducts.push(...products);
      apiParams.page = ++page;
    }

    return new Response(JSON.stringify(allProducts), { status: 200 });
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