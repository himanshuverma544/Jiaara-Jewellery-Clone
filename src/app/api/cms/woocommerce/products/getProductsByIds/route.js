import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";

import getProductDetails from "@/utils/functions/general/getProductDetails";


export async function GET(req) {

  const allProducts = [];
  const { searchParams: params } = new URL(req.url);

  const ids = params.getAll("ids[]");

  if (!ids || ids.length === 0) {
    return new Response(
      JSON.stringify({ error: "No product IDs provided." }),
      { status: 400 }
    );
  }

  try {
    for (const id of ids) {

      const { data } = await WooCommerceAPI.get(`/products/${id}`);

      if (!data) { continue; }

      const formattedData = Array.isArray(data) ? data : [data];

      const products = formattedData.map((product) => getProductDetails(product));

      allProducts.push(...products);
    }

    return new Response(
      JSON.stringify({ products: allProducts }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
  catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching Products from the backend.",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}