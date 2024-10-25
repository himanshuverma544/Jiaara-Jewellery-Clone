'use client';

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Accordion from "@/components/general/Accordion";
import CheckoutProductsList from "./components/CheckoutProductsList";
import CouponForm from "@/components/pages/checkout/order-summary/components/CouponForm";

import OrderCalculation from "./components/OrderCalculation";


export default function OrderSummary({ className = "" }) {

  return (
    <div className="order-summary flex flex-col px-[8vw] py-5">
      <div className="heading text-xl text-primaryFont sm:text-2xl">
        Order Summary
      </div>
      
      <Accordion
        titleClassName="text-sm text-primaryFont sm:text-base"
        title={`Show Products`}
        divider={{
          upper: {
            className: "pb-5 border-primaryFont",
            isEnabled: true
          },
          bottom: {
            className: "my-5 border-primaryFont",
            isEnabled: true
          },
        }}
        content={<CheckoutProductsList/>}
        iconClassName="text-primaryFont text-xl"
        openIcon={<MdKeyboardArrowDown/>}
        closeIcon={<MdKeyboardArrowUp/>}
      />

      <CouponForm className="pb-5"/>

      <hr className="border-primaryFont"/>

      <OrderCalculation/>

      <button className="checkout-btn py-2 mt-3 rounded-lg uppercase bg-primaryFont text-white">
        Checkout
      </button>
    </div>
  );
}