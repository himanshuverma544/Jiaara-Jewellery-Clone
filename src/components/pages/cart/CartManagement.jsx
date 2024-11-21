'use client';

import { useSelector } from "react-redux";

import UserProductsStatus from "@/components/global/UserProductsStatus";
import CartHead from "@/components/pages/cart/components/CartHead";
import CartData from "@/components/pages/cart/components/CartData";
import OrderSummary from "@/components/pages/cart/components/OrderSummary";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import RelatedProducts from "@/components/pages/cart/components/RelatedProducts";

import useClient from "@/utils/hooks/general/useClient";


export default function CartManagement() {

  const isClient = useClient();

  const cartItems = useSelector(state => state?.cartReducer ?? []);

  return (
    (isClient &&
      <div className="cart-page flex flex-col">
        <UserProductsStatus
          className={`
            px-[8vw] gap-[5vw] my-[10vw]
            text-xs
            text-primaryFont
            2xs:text-sm
            xs:text-base
            sm:my-[8vw]
            sm:text-lg
            md:gap-16
            md:text-xl
            lg:text-2xl
            xl:text-3xl
            2xl:text-4xl
          `}
        />
        <CartHead className="px-[8vw] mt-5" cartItemsCount={cartItems?.length}/>
        <CartData className="px-[8vw] py-5 mt-5" cartItems={cartItems}/>
        <OrderSummary className="px-[8vw] mt-5" cartItems={cartItems}/>
        <KeyBenefits className="mt-10"/>
        <RelatedProducts className="mt-5 mb-10" cartItems={cartItems}/>
      </div>
    )
  );
}