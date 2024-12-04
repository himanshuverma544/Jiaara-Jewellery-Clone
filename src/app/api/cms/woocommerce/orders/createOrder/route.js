import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";


export async function POST(req) {

  const orderData = await req.json();

  try {
    const { data } = await WooCommerceAPI.post("/orders", orderData);

    return new Response(
      JSON.stringify({
        message: 'Order created successfully',
        order_id: data?.id,
      }),
      { status: 200 }
    );
  }
  catch (error) {
    console.error('Error creating order:', error?.response?.data || error?.message);
    return new Response(
      JSON.stringify({
        message: 'Error creating order',
        details: error?.response?.data || error?.message,
      }),
      { status: 500 }
    );
  }
}
