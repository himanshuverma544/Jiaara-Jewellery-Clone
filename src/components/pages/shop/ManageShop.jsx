'use client';

import { useState, useEffect, useRef, useContext } from "react";
import { context } from "@/context-API/context";

import { useQuery } from "@tanstack/react-query";

import FilterBar from "@/components/global/filter/FilterBar";
import ProductGrid from "@/components/global/ProductGrid";
import SidebarFilter from "@/components/global/filter/sidebar-filter/SidebarFilter";
import Pagination from "@/components/general/Pagination";
import Validation from "@/components/general/Validation";

import { getProducts } from "@/utils/functions/api/cms/woocommerce/products";
import { getProductsAnalytics } from "@/utils/functions/api/cms/woocommerce/analytics";


export default function ManageShop({ className = "", params }) {

  const { data: { triggered } = {}, data: { objects } = {} } = useContext(context) || {};

  const [filter, setFilter] = useState(null);

  const [currentId, setCurrentId] = useState(null);
  const [lastRemovedId, setLastRemovedId] = useState(null);

  const prevCategoryIdsRef = useRef([]);

  console.log(filter);

  useEffect(() => {

    const getId = (ids = []) => {

      if (ids && ids?.length > 0) {
        const id = ids.at(-1);
        return id;
      }
      return null;
    }

    const resolveFilterValues = () => {

      if (triggered && objects?.filter) {
        setFilter(objects?.filter);
        setCurrentId(() => getId(objects?.filter?.categoryCheckboxValues));
      }
    };

    resolveFilterValues();
  }, [triggered, objects?.filter]);


  useEffect(() => {

    function handleLastRemovedId() {
      
      const currentCategoryIds = filter?.categoryCheckboxValues || [];
      const previousCategoryIds = prevCategoryIdsRef.current;

      if (previousCategoryIds.length > currentCategoryIds.length) {
        const removedId = previousCategoryIds.find(id => !currentCategoryIds.includes(id));
        setLastRemovedId(removedId);
      }

      prevCategoryIdsRef.current = currentCategoryIds;
    }

    handleLastRemovedId();
  }, [filter?.categoryCheckboxValues]);
  
  
  const [page, setPage] = useState(1);


  const handler = {

    ["Default"]: {
      queryFn: () => getProducts({
        categoryId: params?.id || currentId,
        page,
        perPage: 20,
        paginate: true,
        status: "publish"
      })
    },
    ["Best Seller"]: {
      queryFn: () => getProductsAnalytics({
        page,
        perPage: 20,
        paginate: true,
        period: "all",
        orderby: "items_sold",
        order: "desc",
        status: "publish"
      })
    },
    ["Latest"]: {
      queryFn: () => getProducts({
        page,
        perPage: 20,
        paginate: true,
        orderby: "date",
        order: "desc",
        status: "publish"
      })
    },
    ["Trending"]: {
      queryFn: () => getProductsAnalytics({
        page,
        perPage: 20,
        paginate: true,
        period: "month",
        orderby: "items_sold",
        order: "desc",
        status: "publish"
      })
    },
    ["Rating"]: {
      queryFn: () => getProducts({
        page,
        perPage: 20,
        paginate: true,
        orderby: "rating",
        order: "desc",
        status: "publish"
      })
    }
  };

  const { data, isLoading, isSuccess, refetch: fetchProducts } = useQuery({
    queryKey: ["shop-products", params?.id || "", filter?.currSortMethod, page],
    queryFn: handler[filter?.currSortMethod]?.queryFn,
    enabled: !!filter?.currSortMethod
  });

  useEffect(() => {

    console.log("yes", currentId)
    if (currentId !== undefined) {
      console.log("yes")
      fetchProducts();
    }
  }, [currentId, fetchProducts]);


  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <FilterBar/>
      <SidebarFilter/>

      {isLoading ? (
        <Validation
          className="w-screen h-[20rem] text-primaryFont"
          message="Loading Products…"
        />
      ) : (
        isSuccess && (
          <ProductGrid
            products={data?.products}
            currentId={currentId}
            lastRemoveId={lastRemovedId}
            length={filter?.categoryCheckboxValues?.length || 0}
            setCurrentId={setCurrentId}
            setLastRemovedId={setLastRemovedId}
          />
        )
      )}

      {(isSuccess && data?.storeInfo?.totalPages > 0) &&
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={data?.storeInfo?.totalPages} 
        />
      }
    </div>
  );
}
