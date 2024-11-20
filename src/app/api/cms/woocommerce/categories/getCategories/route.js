import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";

import convertValue from "@/utils/functions/general/convertValue";


export async function GET(req) {

  const allCategories = [];
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
      const { data } = await WooCommerceAPI.get("/products/categories", {
        params: apiParams
      });

      if (data.length === 0) break;

      const categories = data.map(category => ({
        id: category?.id,
        name: category?.name,
        slug: category?.slug,
        image: category?.image ? category?.image.src : null,
        count: category?.count
      }));

      allCategories.push(...categories);
      apiParams.page = ++page;
    }

    return new Response(JSON.stringify(allCategories), { status: 200 });
  }
  catch (error) {
    return new Response(JSON.stringify({
        error: "Error fetching Categories from the backend",
        details: error.message
      }), { status: 500 }
    );
  }
}