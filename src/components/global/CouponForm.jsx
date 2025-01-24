'use client';

import { useContext } from 'react';
import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import { useForm } from 'react-hook-form';

import { PiTagThin } from "react-icons/pi";

import InputField from "@/components/general/InputField";


export default function CouponForm({ className = "" }) {

  const { data: { triggered } = {}, data: { objects } = {}, dispatch } = useContext(context);
  const checkout = (triggered && objects?.checkout) || {};


  const { control, handleSubmit } = useForm({ mode: "onChange" });

  
  const onApplyCoupon = data => {

    dispatch(
      storeData({
        checkout: {
          ...checkout,
          couponData: data
        }
      }, "objects")
    );
  }


  return (
    <form
      className={`coupon-form w-full flex items-end gap-5 lg:gap-3 ${className}`}
      onSubmit={handleSubmit(onApplyCoupon)}
    >
      <InputField
        className="w-full"
        input={{
          id: "coupon-code",
          inputName: "couponCode",
          className: "w-[inherit] ps-3 pe-10 py-3 rounded-sm text-sm input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
          placeholder: "e.g., SAVE50",
          icon: {
            className: "text-primaryFont", 
            theIcon: <PiTagThin/>
          }
        }}
        label={{
          className: "text-sm text-primaryFont",
          text: "Coupon Code"
        }}
        control={control}
      />
      <button
        type="submit"
        className="coupon-code-apply-btn rounded-sm px-[7vw] py-3 text-sm uppercase text-white bg-primaryFont lg:px-[1.5vw]"
      >
        Apply
      </button>
    </form>
  );
}
