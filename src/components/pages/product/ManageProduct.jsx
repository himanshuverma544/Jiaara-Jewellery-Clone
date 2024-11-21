'use client';

import { useQuery } from "@tanstack/react-query";

import ProductDisplay from "@/components/pages/product/components/product-display/ProductDisplay";
import KeyBenefits from "@/components/global/key-benefits/KeyBenefits";
import RelatedProducts from "@/components/pages/product/components/RelatedProducts";
import Validation from "@/components/general/Validation";

import { getProductsByIds } from "@/utils/functions/api/cms/woocommerce/products";


export default function ManageProduct({ params }) {

  const { id } = params;

  if (isNaN(id)) {
    return (
      <Validation
        className="w-screen h-screen text-primaryFont"
        message="Not a Valid Product URL"
      />
    );
  }

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [`product-${id}`],
    queryFn: () => getProductsByIds({ ids: [id] })
  });

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
      <div className={`product-page-${id} flex flex-col gap-12`}>
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