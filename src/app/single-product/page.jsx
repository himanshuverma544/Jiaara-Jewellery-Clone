import ProductDisplay from "@/components/pages/single-product/product-display/ProductDisplay";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import RelatedProducts from "@/components/pages/single-product/RelatedProducts";

export default function SingleProduct() {

  return (
    <div className="single-product-page flex flex-col
     gap-12">
      <ProductDisplay/>
      <KeyBenefits/>
      <RelatedProducts/>
    </div>
  );
}