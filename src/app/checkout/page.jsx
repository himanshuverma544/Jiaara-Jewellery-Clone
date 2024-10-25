import CheckoutForm from "@/components/pages/checkout/CheckoutForm";
import OrderSummary from "@/components/pages/checkout/order-summary/OrderSummary";


export default function Checkout() {

  return (
    <div className="checkout-page flex flex-col gap-5 py-10">
      <CheckoutForm/>
      <OrderSummary/>
    </div>
  );
}