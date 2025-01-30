'use client';

import CheckoutForm from "@/components/pages/checkout/components/CheckoutForm";
import OrderSummary from "@/components/global/order-summary/OrderSummary";

import UserProductsStatus from "@/components/global/UserProductsStatus";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";

import useClient from "@/utils/hooks/general/useClient";
import useCheckoutPageValidations from '@/utils/hooks/global/useCheckoutPageValidations';


const ManageCheckout = () => {

  const isClient = useClient();

  const { currentItems, clearItems } = useCheckoutPageValidations();


  return (
    (isClient &&
      <div className="manage-checkout flex flex-col gap-5">
        <UserProductsStatus
          className={`
            px-[8vw] gap-[5vw] my-[10vw]
            text-xs
            text-primaryFont
            2xs:text-sm
            xs:text-base
            sm:my-[7vw]
            sm:text-lg
            md:gap-16 md:my-[5vw]
            md:text-xl
            lg:text-2xl
            xl:text-3xl
            2xl:text-4xl
          `}
        />

        <div className="wrapper lg:flex lg:justify-evenly">
          <CheckoutForm
            className="px-[8vw] lg:w-[50%] lg:px-[5vw]"
            currentItems={currentItems}
            clearItems={clearItems}
          />
          <OrderSummary
            className="px-[8vw] lg:w-[50%] lg:px-[5vw]"
            currentItems={currentItems}
          />
        </div>

        <KeyBenefits className="mt-10"/>
      </div>
    )
  );
}

export default ManageCheckout;