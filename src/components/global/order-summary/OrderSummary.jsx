'use client';

import { useState, useContext } from 'react';
import { context } from "@/context-API/context";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import Accordion from "@/components/general/Accordion";

import UserProductsList from "@/components/global/user-products-list/UserProductsList";
import CouponForm from "@/components/global/CouponForm";
import OrderCalculation from "@/components/global/order-summary/components/OrderCalculation";


export default function OrderSummary({ className = "", currentItems = [] }) {

  const { data: { triggered } = {}, data: { objects } = {} } = useContext(context) || {};
  const checkout = (triggered && objects?.checkout) || {};


  const [isDisabled, setIsDisabled] = useState(false);

  const handlePlaceOrder = () => {

    checkout?.onSubmitCheckoutForm();

    if (checkout?.haveErrors) {
      setIsDisabled(true);
    }
  }

  
  return (
    <div className={`checkout-order-summary flex flex-col py-5 ${className}`}>
      <div className="heading text-xl text-primaryFont sm:text-2xl">
        Order Summary
      </div>
      
      <Accordion
        titleClassName="text-sm text-primaryFont font-medium sm:text-base"
        title={currentItems?.length <= 1 ? `(${currentItems?.length} item)` : `(${currentItems?.length} items)`}
      
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
        content={
          <UserProductsList
            productsList={currentItems}
            theClassName={`cart-products-list p-[5vw] bg-white`}
            rowClassName="flex flex-col"
            parentWrapperClassName="flex flex-col gap-5"
            wrapperClassName="flex justify-between"
            divider={true}
            dividerClassName="my-5 border-primaryFont"
            productImageContClassName="size-[25vw] max-w-[7rem] max-h-[7rem] me-3"
            productImageClassName="rounded-sm"
            productDetailsClassName="flex flex-col justify-between gap-5 px-1 text-xs uppercase text-primaryFont xs:text-sm"
            productRemoveButtonClassName="flex items-stretch text-lg text-primaryFont xs:text-xl sm:text-2xl"
          />
        }
        iconClassName="text-primaryFont text-xl"
        openIcon={<MdKeyboardArrowDown/>}
        closeIcon={<MdKeyboardArrowUp/>}
        defaultState={true}
      />

      <CouponForm className="mb-5"/>

      <hr className="border-primaryFont"/>

      <OrderCalculation cartItems={currentItems}/>

      <button
        className={`
          checkout-btn
          flex gap-5 px-5 py-2 mt-3 rounded-lg
          uppercase
          bg-primaryFont text-white
          ${isDisabled ? "opacity-70" : ""}  
        `}
        onClick={handlePlaceOrder}
        disabled={isDisabled}
      >
        <span className="w-full button-text">
          {!isDisabled ? "Place Order" : "Placing Order…"}  
        </span>
      </button>
    </div>
  );
}