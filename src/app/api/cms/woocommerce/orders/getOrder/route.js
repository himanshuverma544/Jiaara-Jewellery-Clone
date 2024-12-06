import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";

import getOrderDetails from "@/app/api/cms/helpers/woocommerce/getOrderDetails";


export async function GET(req) {

  const { searchParams: params } = new URL(req.url);
  const orderId = params.get("orderId");

  try {
    const { data } = await WooCommerceAPI.post(`/orders/${orderId}`);

    const orderDetails = getOrderDetails(data);

    return new Response(
      JSON.stringify(orderDetails),
      { status: 200 }
    );
  }
  catch (error) {

    console.error('Error getting order details from backend:', error || error?.message);

    return new Response(
      JSON.stringify({
        message: 'Error getting order details from backend.',
        details: error || error?.message,
      }),
      { status: 500 }
    );
  }
}
