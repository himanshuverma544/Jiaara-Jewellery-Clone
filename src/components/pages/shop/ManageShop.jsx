'use client';

import { useState, useEffect, useRef, useCallback, useContext, useMemo } from "react";
import { context } from "@/context-API/context";

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

  const [isLoading, setIsLoading] = useState(false);

  const [productsData, setProductsData] = useState(null);
  const [page, setPage] = useState(1);

  const apisRequestsQueue = useRef({
    queueArr: [],
    currentIndex: 0,
    isSuccessArr: [],
    apiNum: 0,
    isApiEffect: false,
    lock: false
  });
  
  const prevCategoryIdsRef = useRef([]);

  const handler = useMemo(() => ({
    ["Default"]: () => getProducts({
      categoryId: params?.id || currentId || null,
      page,
      perPage: 20,
      paginate: true,
      status: "publish",
    }),
    ["Best Seller"]: () => getProductsAnalytics({
      page,
      perPage: 20,
      paginate: true,
      period: "all",
      orderby: "items_sold",
      order: "desc",
      status: "publish",
    }),
    ["Latest"]: () => getProducts({
      page,
      perPage: 20,
      paginate: true,
      orderby: "date",
      order: "desc",
      status: "publish",
    }),
    ["Trending"]: () => getProductsAnalytics({
      page,
      perPage: 20,
      paginate: true,
      period: "month",
      orderby: "items_sold",
      order: "desc",
      status: "publish",
    }),
    ["Rating"]: () => getProducts({
      page,
      perPage: 20,
      paginate: true,
      orderby: "rating",
      order: "desc",
      status: "publish",
    }),
  }), [params?.id, currentId, page]);


  const getId = (ids = []) => {
    return ids && ids.length > 0 ? ids.at(-1) : null;
  };

  useEffect(() => {

    const resolveFilterValues = () => {
      if (triggered && objects?.filter) {
        setFilter(objects?.filter);
        setCurrentId(() => getId(objects?.filter?.categoryCheckboxValues));
      }
    };

    resolveFilterValues();
  }, [triggered, objects?.filter]);


  useEffect(() => {

    const handleLastRemovedId = () => {

      const currentCategoryIds = filter?.categoryCheckboxValues || [];
      const previousCategoryIds = prevCategoryIdsRef.current;

      if (previousCategoryIds.length > currentCategoryIds.length) {
        const removedId = previousCategoryIds.find( id => !(currentCategoryIds.includes(id)) );
        setLastRemovedId(removedId);

        if (currentCategoryIds.length > 0) {
          setCurrentId(undefined);
        }
        else {
          setCurrentId(null);
        }
      }

      prevCategoryIdsRef.current = currentCategoryIds;
    };

    handleLastRemovedId();
  }, [filter?.categoryCheckboxValues]);


  const isValidCurrentId = useCallback((id = currentId) => {
    
    return (id != undefined);
  }, [currentId]);
  

  const addRequestToQueue = currentApiRequest => {
    apisRequestsQueue.current.queueArr.push(currentApiRequest);
  };

  useEffect(() => {

    const currentApiRequest = {
      currentId,
      currSortMethod: objects?.filter?.currSortMethod,
      requestFn: handler[objects?.filter?.currSortMethod]
    };

    function isValidRequest() {
      return (
        isValidCurrentId(currentApiRequest?.currentId) &&
        currentApiRequest?.currSortMethod &&
        currentApiRequest?.requestFn
      );
    }

    if (isValidRequest()) {
      addRequestToQueue(currentApiRequest);
    }
  }, [handler, currentId, objects?.filter?.currSortMethod, isValidCurrentId]);


  useEffect(() => {

    function resetQueue(queue = apisRequestsQueue.current.queueArr) {

      if (apisRequestsQueue.current.currentIndex >= queue.length) {
        apisRequestsQueue.current.currentIndex = 0;
        apisRequestsQueue.current.queueArr = [];
      }
    }

    function handleIsSuccess() {

      const apiNum = apisRequestsQueue?.current?.apiNum;

      apisRequestsQueue.current.isSuccessArr[apiNum] = true;
      apisRequestsQueue.current.apiNum += 1;
      apisRequestsQueue.current.isApiEffect = true;
    }

    const processQueue = async () => {
      
      const { queueArr: queue, currentIndex: index } = apisRequestsQueue.current;
      
      if (index < queue.length) {
        
        setIsLoading(true);
        
        try {
          const data = await queue[index]?.requestFn();

          if (queue[index]?.currentId === currentId) {
            setProductsData(data);
          }

          apisRequestsQueue.current.currentIndex += 1;
          handleIsSuccess();
        }
        catch (error) {
          console.error("Error in API request:", error);
        }
        finally {
          setIsLoading(false);
        }
      }

      resetQueue(queue);
    };

    if (apisRequestsQueue.current.queueArr.length > 0 &&
      isValidCurrentId(currentId)
    ) {
      processQueue();
    }
  }, [currentId, apisRequestsQueue.current.currentIndex, isValidCurrentId]);


  useEffect(() => {

    const fetchInitialData = async () => {

      if (currentId === null) {
        setIsLoading(true);

        try {
          const data = await handler["Default"]();
          setProductsData(data);
          apisRequestsQueue.current.isApiEffect = false;
        }
        catch (error) {
          console.error("Error fetching default data:", error);
        }
        finally {
          setIsLoading(false);
        }
      }
    };
  
    fetchInitialData();
  }, [handler, currentId]);


  const isSuccess = () => {

    const status = apisRequestsQueue.current.isApiEffect && apisRequestsQueue.current.isSuccessArr.at(-1);
    apisRequestsQueue.current.isApiEffect = false;

    return status;
  }

  if (isSuccess()) {
    console.log(currentId, productsData);
  }

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <FilterBar/>
      <SidebarFilter/>

      {isLoading &&
        <Validation
          className="w-screen h-[20rem] text-primaryFont"
          message="Loading Products…"
        />
      }
      
        {/* <ProductGrid
          products={productsData?.products || []}
          currentId={currentId}
          lastRemoveId={lastRemovedId}
          length={filter?.categoryCheckboxValues?.length || 0}
        /> */}
        
      
      {productsData?.storeInfo?.totalPages > 0 && (
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={productsData?.storeInfo?.totalPages}
        />
      )}
    </div>
  );
}