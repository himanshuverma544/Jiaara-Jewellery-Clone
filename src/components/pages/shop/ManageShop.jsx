'use client';

import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import ProductGrid from "@/components/global/ProductGrid";
import SidebarFilter from "@/components/global/filter/sidebar-filter/SidebarFilter";

import Pagination from "@/components/general/Pagination";
import Validation from "@/components/general/Validation";
import ContentOnBackground from "@/components/general/ContentOnBackground";

import { getProducts } from "@/utils/functions/api/cms/woocommerce/products";


export default function ManageShop({ className = "", params }) {

  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: productsData,
    isLoading,
    isFetching,
    isError,
    refetch: fetchProducts
  }
  = useQuery({
      queryKey: ["products", params?.id || ""],
      queryFn: () => getProducts({
        categoryId: params?.id || null,
        paginate: true,
        page: currentPage,
        perPage: 20,
        status: "publish"
      }),
      keepPreviousData: true
    });
  
  useEffect(() => { fetchProducts(); }, [currentPage]);


  if (isError) {
    return (
      <Validation
        className="w-screen h-[20rem] text-primaryFont"
        message="There is some error."
      />
    );
  }


  return (
    <div className={`flex flex-col ${className}`}>
      <ContentOnBackground
        className={`
          banner
          h-[14rem]
          flex justify-center items-center mt-[2.4rem]
          text-5xl font-medium
          bg-quaternaryBackground text-white
          sm:text-6xl
        `}
      >
        {productsData?.bannerName}
      </ContentOnBackground>

      <div className="wrapper flex">
        <SidebarFilter/>
        <div className="child-wrapper w-full flex flex-col items-center justify-center gap-10 my-10">
          {(isLoading || isFetching) ?
            <Validation
              className="w-full h-[20rem] text-primaryFont"
              message="Loading Products…"
            />
            :
            <ProductGrid products={productsData?.products || []}/>
          }
          {productsData?.storeInfo?.totalPages > 0 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={productsData?.storeInfo?.totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
}