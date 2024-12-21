'use client';

import CheckoutForm from "@/components/pages/checkout/components/CheckoutForm";
import OrderSummary from "@/components/global/order-summary/OrderSummary";

import useClient from "@/utils/hooks/general/useClient";


const ManageCheckout = () => {

  const isClient = useClient();

  return (
    isClient &&
      <>
        <CheckoutForm/>
        <OrderSummary/>
      </>
  );
}

export default ManageCheckout;