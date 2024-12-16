'use client';

import { useQuery } from '@tanstack/react-query';

import ProductsCarousel from '@/components/global/ProductsCarousel';
import Validation from "@/components/general/Validation";

import { getProducts } from '@/utils/functions/api/cms/woocommerce/products';


export default function Latest() {

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['latest-products'],
    queryFn: () => getProducts({
      page: 1,
      perPage: 10,
      paginate: true,
      orderby: "date",
      order: "desc",
      status: "publish"
    })
  });

  if (isLoading) {
    return (
      <Validation
        className="w-full h-[10rem] text-primaryFont"
        message="Loading Latest Products…"
      />
    );
  }

  return (
    (isSuccess && data?.products?.length > 0) &&
      <ProductsCarousel
        className="latest-products"
        headingClassName="text-center text-2xl uppercase text-primaryFont"
        heading="Latest"
        carousel={{ 
          isPlaying: true,
          interval: 3000,
          playDirection: "backward"
        }}
        sliderClassName="select-none cursor-grab active:cursor-grabbing"
        slideClassName="mx-[1.5vw]"
        slideInnerClassName="flex flex-col gap-3"
        data={{ products: data?.products }}
      />
    );
}
