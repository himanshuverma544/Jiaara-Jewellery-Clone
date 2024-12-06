'use client';

import { useContext } from 'react';
import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import { useForm } from 'react-hook-form';

import { PiTagThin } from "react-icons/pi";

import InputField from "@/components/general/InputField";


export default function CouponForm({ className = "" }) {

  const { dispatch } = useContext(context);
  
  const { control, handleSubmit } = useForm({ mode: "onChange" });

  const onApplyCoupon = data => {

    dispatch(storeData({ couponData: data }, "objects"));
  }

  return (
    <form
      className={`coupon-form flex items-end gap-5 ${className}`}
      onSubmit={handleSubmit(onApplyCoupon)}
    >
      <InputField
        className="w-full"
        input={{
          id: "coupon-code",
          inputName: "couponCode",
          className: "w-[inherit] ps-3 pe-10 py-3 rounded-md text-sm input-selection-primaryFont focus:ring-primaryFont hover:ring-secondaryBackground",
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
        className="coupon-code-apply-btn rounded-md px-[7vw] py-3 text-sm uppercase text-white bg-primaryFont"
      >
        Apply
      </button>
    </form>
  );
}
