import InputField from "@/components/general/InputField";

import INR from "@/utils/functions/general/INR";


export default function PriceFilter({ className = "" }) {

return (
  <div className={`price-filter flex flex-col gap-5 ${className}`}>

    <div className="heading uppercase font-semibold">
      Price Filter
    </div>

    <div className="wrapper flex justify-center items-center gap-5">
      <InputField
        input={{
          id: "min-price",
          type: "number",
          className: "w-full px-3 py-1 border rounded text-center input-selection-black focus:ring-black hover:ring-black",
          placeholder: "₹.",
          required: true,
          autoComplete: "off"
        }}
        label={{
          className: "text-sm opacity-50",
          text: "Min Price"
        }}
      />

      <InputField
        input={{
          id: "max-price",
          type: "number",
          className: "w-full px-3 py-1 border rounded text-center input-selection-black focus:ring-black hover:ring-black",
          placeholder: "₹.",
          required: true,
          autoComplete: "off"
        }}
        label={{
          className: "text-sm opacity-50",
          text: "Max Price"
        }}
      />
    </div>

    <div className="price-range flex items-center gap-2 text-sm">
      <span className="uppercase">
        Price Range:
      </span>
      <span>
        {`${INR(500)} - ${INR(1000)}`}
      </span>
    </div>
  </div>
);
}
