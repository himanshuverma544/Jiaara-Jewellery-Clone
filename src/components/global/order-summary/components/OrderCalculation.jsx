import { useQuery } from "@tanstack/react-query";

import { getShipping } from "@/utils/functions/api/cms/woocommerce/shipping";

import INR from "@/utils/functions/general/INR";


export default function OrderCalculation({ className = "", cartItems = [] }) {

  const { data: minAmountOnOrder, isSuccess } = useQuery({
    queryKey: [`shipping-minAmountOnOrder`],
    queryFn: () => getShipping({ zoneId: 1, methodId: 1 }),
  });

  const cartItemsSubtotal = 
    cartItems.reduce(
      (subtotal, cartItem) => subtotal + (cartItem?.price * cartItem?.cartQtyCount), 0
    );

  const shippingCharge =  (cartItemsSubtotal > (minAmountOnOrder ?? 599) ? 0 : 80);

  const total = cartItemsSubtotal + shippingCharge;


  return (
    <div className={`order-calculation flex flex-col gap-2 py-5 text-sm text-primaryFont ${className}`}>
      <div className="subtotal flex justify-between">
        <span className="text">
          Subtotal
        </span>
        <span className="value">
          {INR(cartItemsSubtotal)}
        </span>
      </div>

      <div className="shipping flex justify-between">
        <span className="text">
          Shipping
        </span>
        <span className="value">
          {shippingCharge > 0 ? INR(shippingCharge) : "Free"}
        </span>
      </div>


      <hr className="my-2 border-primaryFont"/>

      <div className="total flex justify-between">
        <span className="text text-xl">
          Total
        </span>
        <span className="value text-xl">
          {INR(total)}
        </span>
      </div>
    </div>
  );
}
