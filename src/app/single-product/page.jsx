import ProductDisplay from "@/components/pages/single-product/product-display/ProductDisplay";
import ProductsCarousel from "@/components/global/ProductsCarousel";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import RelatedProducts from "@/components/pages/single-product/RelatedProducts";

export default function SingleProduct() {

  return (
    <div className="single-product-page flex flex-col
     gap-12 mt-28">
      <ProductDisplay/>
      <KeyBenefits/>
      <RelatedProducts/>
    </div>
  );
}