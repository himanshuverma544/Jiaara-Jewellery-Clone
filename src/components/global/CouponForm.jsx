'use client';

import { PiTagThin } from "react-icons/pi";


import InputField from "@/components/general/InputField";


export default function CouponForm({ className = "" }) {

  return (
    <form
      className={`coupon-form flex items-end gap-5 ${className}`}
      onSubmit={event => event.preventDefault()}
    >
      <InputField
        className="w-full"
        input={{
          id: "coupon-code",
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
      />
      <button
        type="submit"
        className="coupon-code-apply-btn rounded-md px-[7vw] py-3 text-sm text-white bg-primaryFont"
      >
        Apply
      </button>
    </form>
  );
}
