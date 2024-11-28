'use client';

import { useQuery } from "@tanstack/react-query";

import ProductDisplay from "@/components/pages/product/components/product-display/ProductDisplay";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import RelatedProducts from "@/components/pages/product/components/RelatedProducts";
import Validation from "@/components/general/Validation";

import { getProductsByIds } from "@/utils/functions/api/cms/woocommerce/products";


export default function ManageProduct({ className = "", params }) {

  const { id } = params;

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getProductsByIds({ ids: [id] })
  });

  if (isNaN(id)) {
    return (
      <Validation
        className="w-screen h-screen text-primaryFont"
        message="Not a Valid Product URL"
      />
    );
  }

  if (isLoading) {
    return (
      <Validation
        className="w-screen h-screen text-primaryFont"
        message="Loading Product…"
      />
    );
  }

  const { products: [product] = [] } = data || {};


  if (!product || Object.keys(product).length <= 0) {
    return (
      <Validation
        className="w-screen h-screen text-primaryFont"
        message="Not a Valid Product URL"
      />
    );
  }

  
  return (
    (isSuccess &&
      <div className={`${className}-${id} flex flex-col gap-12`}>
        <ProductDisplay product={product}/>
        <KeyBenefits/>
        <RelatedProducts
          currentProductId={id}
          relatedProductIds={product?.relatedProductIds}
        />
      </div>
    )
  );
}