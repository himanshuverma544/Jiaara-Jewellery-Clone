import { WooCommerceAPI } from "@/app/api/cms/woocommerce/config";


export async function POST(req) {

  const orderData = await req.json();

  try {
    const { data } = await WooCommerceAPI.post("/orders", orderData);

    return new Response(
      JSON.stringify({
        orderId: data?.id,
        message: 'Order created successfully',
      }),
      { status: 200 }
    );
  }
  catch (error) {
    console.error('Error creating order from backend:', error || error?.message);
    return new Response(
      JSON.stringify({
        message: 'Error creating order from backend.',
        details: error || error?.message,
      }),
      { status: 500 }
    );
  }
}
