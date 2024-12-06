import { useForm } from "react-hook-form";

import InputField from "@/components/general/InputField";

import INR from "@/utils/functions/general/INR";


export default function PriceFilter({ className = "" }) {

  const { control, watch } = useForm();

  const minPriceValue = watch("minPrice");
  const maxPriceValue = watch("maxPrice");

  return (
    <div className={`price-filter flex flex-col gap-5 ${className}`}>
      <form className="wrapper flex justify-center items-center gap-5">
        <InputField
          input={{
            id: "min-price",
            inputName: "minPrice",
            type: "number",
            className: "w-full px-3 py-1 border rounded text-center input-selection-black focus:ring-black hover:ring-black",
            placeholder: "₹.",
            autoComplete: "off",
            min: 0
          }}
          label={{
            className: "text-sm opacity-50",
            text: "Min Price"
          }}
          validation={{
            isEnabled: true,
            messages: {
              min: "Value is too low"
            }
          }}
          control={control}
        />

        <InputField
          input={{
            id: "max-price",
            inputName: "maxPrice",
            type: "number",
            className: "w-full px-3 py-1 border rounded text-center input-selection-black focus:ring-black hover:ring-black",
            placeholder: "₹.",
            autoComplete: "off",
            max: 10000
          }}
          label={{
            className: "text-sm opacity-50",
            text: "Max Price"
          }}
          validation={{
            isEnabled: true,
            messages: {
              max: "Value is too high"
            }
          }}
          control={control}
        />
      </form>

      <div className="price-range flex items-center gap-2 text-sm">
        <span className="uppercase">
          Price Range:
        </span>
        <span>
          {`${INR(minPriceValue)} - ${INR(maxPriceValue)}`}
        </span>
      </div>
    </div>
  );
}
