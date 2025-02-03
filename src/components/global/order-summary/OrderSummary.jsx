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
            theClassName="cart-products-list p-[5vw] bg-white"
            productsList={currentItems}
            context={{ isCheckout: true }}
            divider={true}
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