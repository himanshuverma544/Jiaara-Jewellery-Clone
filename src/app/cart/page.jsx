import CartHead from "@/components/pages/cart/CartHead";
import CartData from "@/components/pages/cart/CartData";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import OrderSummary from "@/components/pages/cart/OrderSummary";
import ProductsCarousel from "@/components/global/ProductsCarousel";
import RelatedProducts from "@/components/pages/cart/RelatedProducts";

import UserProductsStatus from "@/components/global/UserProductsStatus";


export default function Cart() {

  return (
    <div className="cart-page flex flex-col">
      <UserProductsStatus
        className={`
          px-[8vw] gap-[5vw] my-[10vw]
          text-xs
          text-primaryFont
          2xs:text-sm
          xs:text-base
          sm:my-[8vw]
          sm:text-lg
          md:gap-16
          md:text-xl
          lg:text-2xl
          xl:text-3xl
          2xl:text-4xl
        `}
      />
      <CartHead className="px-[8vw] mt-5"/>
      <CartData className="px-[8vw] py-5 mt-5"/>
      <OrderSummary className="px-[8vw] mt-5"/>
      <KeyBenefits className="mt-10"/>
      <ProductsCarousel className="mt-5"/>
      <RelatedProducts className="mt-5 mb-10"/>
    </div>
  );
}