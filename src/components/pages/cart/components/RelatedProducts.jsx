import { useQuery } from "@tanstack/react-query";

import Validation from "@/components/general/Validation";
import ProductsCarousel from '@/components/global/ProductsCarousel';

import { getProductsByIds } from "@/utils/functions/api/cms/woocommerce/products";


export default function RelatedProducts({ className = "", cartItems = [] }) {

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [`related-products-cart`],
    queryFn: () => getProductsByIds({ ids: cartItems[0]?.relatedProductIds }),
    enabled: true
  });
  
  if (isLoading) {
    return (
      <Validation
        className="w-full h-[10rem] text-primaryFont"
        message="Loading Related Products…"
      />
    );
  }
  
  const { products } = data || [];

  return (
    (isSuccess &&
      <ProductsCarousel
        className={`related-products py-5 ${className}`}
        headingClassName="text-center text-2xl uppercase text-primaryFont"
        heading="Related Products"
        carousel={{ 
          isPlaying: true,
          interval: 3000
        }}
        sliderClassName="select-none cursor-grab active:cursor-grabbing"
        slideClassName="mx-[2.5vw]"
        slideInnerClassName="flex flex-col gap-3"
        data={{ products }}
      />
    )
  );
}