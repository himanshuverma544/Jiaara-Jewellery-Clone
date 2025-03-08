'use client';

import { useEffect, useContext } from "react";
import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import { useQuery } from "@tanstack/react-query";

import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Sidebar from "@/components/general/Sidebar";
import Accordion from "@/components/general/Accordion";

import PriceFilter from "@/components/global/filter/sidebar-filter/components/PriceFilter";
import CategoriesFilter from "@/components/global/filter/sidebar-filter/components/CategoriesFilter";
import CollectionsFilter from "@/components/global/filter/sidebar-filter/components/CollectionsFilter";

import useWindowSize from "@/utils/hooks/general/useWindowSize";
import useSidebarUtils from "@/utils/hooks/sidebar/useSidebarUtils";

import { getCategories } from "@/utils/functions/api/cms/woocommerce/categories";
import { getCollections } from "@/utils/functions/api/cms/woocommerce/collections";

import { CATEGORIES, COLLECTIONS } from "@/routes";


export default function SidebarFilter({ className = "" }) {

  const { breakpoints: { lg }, screenWidth } = useWindowSize();

  const {
    data: parentCategories,
    isLoading: isParentCategoriesLoading,
    isSuccess: isParentCategoriesSuccess
  } =
  useQuery({
    queryKey: ['parent-categories'],
    queryFn: () => getCategories({ parent: 0 }),
    retry: 10,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
  });


  const {
    data: collections,
    isLoading: isCollectionsLoading,
    isSuccess: isCollectionsSuccess
  } = 
  useQuery({
    queryKey: ['general-collections'],
    queryFn: getCollections,
    retry: 10,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
  });


  const { dispatch } = useContext(context);

  const { sidebarState: [isOpen, setIsOpen], innerRef }
    = useSidebarUtils({ defaultState: setTimeout(() => screenWidth >= lg) });


  useEffect(() => {

    function storeComponentData() {
      dispatch(storeData({ sidebar: [isOpen, setIsOpen] }, "states"));
    }
    storeComponentData();

  }, [isOpen, setIsOpen, dispatch]);


  const closeSidebar = () => setIsOpen(false);


  return (
    <Sidebar
      innerRef={innerRef}
      className={`filter ${className}`}
      innerClassName="px-3 bg-white xs:w-[20rem] lg:w-[31vw] xl:w-[25vw]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      persistent={{ value: screenWidth >= lg, position: "6.8rem" }}
    >
      <div className="wrapper flex justify-between sticky top-0 px-3 py-5 z-10 border-b uppercase font-medium bg-white">
        <div className="heading">
          Filter Products
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <IoCloseOutline className="cross-icon text-xl"/>
        </button>
      </div>

      <ul className="filter-cont flex flex-col px-3">
        <li className="price-filter">
          <Accordion
            className="border-primaryFont text-sm"
            titleClassName="uppercase font-medium"
            title="Price Filter"
            defaultState={true}
            contentClassName="py-3"
            content={<PriceFilter className="px-5"/>}
            iconClassName="text-xl"
            openIcon={MdOutlineKeyboardArrowDown}
            closeIcon={MdOutlineKeyboardArrowUp}
            divider={{
              upper: { isEnabled: true },
              bottom: { isEnabled: true },
            }}
            unmountOnExit={false}
          />
        </li>
        <li className="categories-filter">
          <Accordion
            className="border-primaryFont text-sm"
            titleClassName="uppercase font-medium"
            title={CATEGORIES?.title}
            defaultState={true}
            contentClassName="py-3"
            content={
              <CategoriesFilter
                className="px-5"
                categories={isParentCategoriesSuccess ? parentCategories : []}
              />
            }
            iconClassName={isParentCategoriesLoading ? "animate-spin" : "text-xl"}
            openIcon={isParentCategoriesLoading ? AiOutlineLoading3Quarters : MdOutlineKeyboardArrowDown}
            closeIcon={isParentCategoriesLoading ? AiOutlineLoading3Quarters : MdOutlineKeyboardArrowUp}
            divider={{
              upper: { isEnabled: true },
              bottom: { isEnabled: true }
            }}
            unmountOnExit={false}
          />
        </li>
        <li className="collections-filter">
          <Accordion
            className="border-primaryFont text-sm"
            titleClassName="uppercase font-medium"
            title={COLLECTIONS?.title}
            defaultState={true}
            contentClassName="py-3"
            content={
              <CollectionsFilter
                className="px-5"
                collections={isCollectionsSuccess ? collections : []}
              />
            }
            iconClassName={isCollectionsLoading ? "animate-spin" : "text-xl"}
            openIcon={isCollectionsLoading ? AiOutlineLoading3Quarters : MdOutlineKeyboardArrowDown}
            closeIcon={isCollectionsLoading ? AiOutlineLoading3Quarters : MdOutlineKeyboardArrowUp}
            divider={{
              upper: { isEnabled: true },
              bottom: { isEnabled: true }
            }}
            unmountOnExit={false}
          />
        </li>
      </ul>
    </Sidebar>
  );
}