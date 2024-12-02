import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";

import convertValue from "@/utils/functions/general/convertValue";


export async function GET(req) {

  const { searchParams: params } = new URL(req.url);
  const keys = params.getAll("keys[]");
  const apiParams = {};

  for (const key of keys) {
    const value = params.get(key);
    apiParams[key] = convertValue(value);
  }

  try {
    const { data: { settings: { min_amount: { value } } } } = await WooCommerceAPI.get(`/shipping/zones/${apiParams?.zone_id}/methods/${apiParams?.method_id}`);

    return new Response(JSON.stringify({
      minAmountOnOrder: value
    }), { status: 200 });
  }
  catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching shipping information from the backend",
        details: error.message
      }),
      { status: 500 }
    );
  }
}