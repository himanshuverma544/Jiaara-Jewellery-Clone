'use client';

import { useRouter } from 'next/navigation';

import { useState, useEffect, useContext } from "react";

import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import { useQuery } from "@tanstack/react-query";

import OrderConfirmationHead from "@/components/pages/order-confirmation/components/OrderConfirmationHead";
import OrderDetails from "@/components/pages/order-confirmation/components/OrderDetails";
import UserProductsList from "@/components/global/user-products-list/UserProductsList";
import CustomerDetails from "@/components/pages/order-confirmation/components/CustomerDetails";

import Validation from "@/components/general/Validation";

import useDebounceEffect from '@/utils/hooks/general/useDebounceEffect';

import { getOrder } from "@/utils/functions/api/cms/woocommerce/orders";

import { HOME } from '@/routes';


export default function ManageOrderConfirmation({ className = "", params = null }) {

  const router = useRouter();

  const [isRouteVerified, setIsRouteVerified] = useState(false);

  const { data: { triggered } = {}, data: { objects } = {}, dispatch } = useContext(context) || {};
  const checkout = triggered && objects?.checkout || {};

  
  useEffect(() => {

    if (!isRouteVerified) {

      const orderNavigationFlag = checkout?.orderNavigationFlag || false;
      setIsRouteVerified(orderNavigationFlag);
    }
  }, [isRouteVerified]);


  useEffect(() => {

    if (isRouteVerified) {

      function storeComponentData() {

        dispatch(
          storeData({
            checkout: {
              ...checkout,
              orderNavigationFlag: false
            }
          }, "objects")
        );
      }

      storeComponentData();
    }
  }, [isRouteVerified]);


  const { data: order, isLoading, isSuccess, isError } = useQuery({
    queryKey: [`order-${params?.id}`],
    queryFn: () => getOrder({ orderId: params?.id }),
    enabled: isRouteVerified
  });


  useDebounceEffect(() => {

    if (!isRouteVerified || isError) {
      router.push(HOME.pathname);
    }
  }, [isRouteVerified, isError, router], 1000);


  if (isLoading) {
    return (
      <Validation
        className="w-screen h-[20rem] text-primaryFont"
        message="Receiving your Order…"
      />
    );
  }

  if (!isRouteVerified) {
    return (
      <Validation
        className="w-screen h-[20rem] text-primaryFont"
        message="URL Invalidated."
      />
    );
  }

  if(isError) {
    return (
      <Validation
        className="w-screen h-[20rem] text-primaryFont"
        message="Invalid URL."
      />
    );
  }

  
  return (
    ((isRouteVerified && isSuccess) &&
      <div className={`manage-order-confirmation flex flex-col items-center gap-5 ${className}`}>

        <OrderConfirmationHead/>

        <hr className="w-full border-px border-primaryFont"/>

        <OrderDetails orderDetails={{...order, paymentTitle: order?.payment?.title}}/>

        <hr className="w-full border-px border-primaryFont"/>

        <UserProductsList
          theClassName="checkout-products-list p-[5vw] rounded-lg bg-white"
          productsList={order?.items}
          context={{ isCheckout: true }}
          rowClassName="flex justify-between"
          divider={true}
          dividerClassName="my-3 border-black"
          productImageContClassName="size-[25vw] max-w-[7rem] max-h-[7rem]"
          productImageClassName="border rounded-lg border-tertiaryBackground"
          productDetailsClassName="w-[40%] flex flex-col gap-1 px-1 text-xs uppercase 2xs:text-sm"
          productRemoveButtonClassName="text-base"
        />
  
        <CustomerDetails customer={order?.customer}/>
      </div>
    )
  );
}