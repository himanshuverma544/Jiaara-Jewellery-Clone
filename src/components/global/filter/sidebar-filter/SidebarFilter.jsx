'use client';

import { IoCloseOutline } from "react-icons/io5";

import { useEffect, useContext } from "react";
import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import Sidebar from "@/components/general/Sidebar";
import PriceFilter from "@/components/global/filter/sidebar-filter/components/PriceFilter";
import CategoriesFilter from "@/components/global/filter/sidebar-filter/components/CategoriesFilter";
import CollectionsFilter from "@/components/global/filter/sidebar-filter/components/CollectionsFilter";

import useSidebarUtils from "@/utils/hooks/sidebar/useSidebarUtils";


export default function SidebarFilter({ className = "" }) {

  const { dispatch } = useContext(context);

  const { sidebarState: [isOpen, setIsOpen], innerRef } = useSidebarUtils();


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
      innerClassName="w-[inherit] pb-5 bg-white"
      isOpen={isOpen} setIsOpen={setIsOpen}
    >
      <div className="wrapper flex justify-between sticky top-0 px-5 py-5 z-10 border-b bg-white">
        <div className="heading">
          Filter Products
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <IoCloseOutline className="cross-icon text-xl"/>
        </button>
      </div>

      <PriceFilter className="px-5"/>

      <CategoriesFilter className="px-5"/>

      <CollectionsFilter className="px-5"/>
    </Sidebar>
  );
}