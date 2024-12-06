import Axios from 'axios';


export const createOrder = async (orderData = {}) => {

  try {
    const response = await Axios.post('/api/cms/woocommerce/orders/createOrder', orderData);
    return response;
  }
  catch (error) {
    console.error('Error creating order:', error);
  }
};


export const getOrder = async ({ orderId = null }) => {

  try {
    const { data } = await Axios.get('/api/cms/woocommerce/orders/getOrder', {
        params: { orderId }
    });
    return data;
  }
  catch(error) {
    console.error("Error fetching order details from the frontend.", error);
    return {};
  }
}