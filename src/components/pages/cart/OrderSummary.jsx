import CouponForm from "@/components/global/CouponForm";
import OrderCalculation from "@/components/global/order-summary/components/OrderCalculation";


export default function OrderSummary({ className = "" }) {

  return (
    <div className={`cart-order-summary flex flex-col py-5 ${className}`}>
      <div className="heading text-xl text-primaryFont sm:text-2xl">
        Order Summary
      </div>

      <hr className="my-5 border-primaryFont"/>

      <CouponForm className="mb-5"/>

      <hr className="border-primaryFont"/>

      <OrderCalculation/>

      <button className="checkout-btn px-5 py-2 mt-3 rounded-lg uppercase bg-primaryFont text-white">
        Proceed to Checkout
      </button>
    </div>
  );
}
