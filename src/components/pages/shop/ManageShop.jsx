'use client';

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import FilterBar from "@/components/global/filter/FilterBar";
import ProductGrid from "@/components/global/ProductGrid";
import SidebarFilter from "@/components/global/filter/sidebar-filter/SidebarFilter";
import Pagination from "@/components/general/Pagination";
import Validation from "@/components/general/Validation";

import { getProducts } from "@/utils/functions/api/cms/woocommerce/products";


export default function ManageShop({ className = "" }) {

  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [`products-page${page}`],
    queryFn: () => getProducts({ page, perPage: 20, paginate: true, status: "publish" })
  });

  if (isLoading) {
    return (
      <Validation
        className="w-screen h-screen text-primaryFont"
        message="Loading Products…"
      />
    );
  }

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <FilterBar/>
      {isSuccess &&
        <ProductGrid products={data?.products}/>
      }
      <SidebarFilter/>
      {isSuccess &&
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={data?.storeInfo?.totalPages}
        />
      }
    </div>
  );
}
