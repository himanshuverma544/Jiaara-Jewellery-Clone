import Axios from 'axios';


export const createOrder = async (orderData = {}) => {

  try {
    const { data } = await Axios.post('/api/cms/woocommerce/orders/createOrder', orderData);
    console.log('Order Created:', data);
  }
  catch (error) {
    console.error('Error creating order:', error);
  }
};
