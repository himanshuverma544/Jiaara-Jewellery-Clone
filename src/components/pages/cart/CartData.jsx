'use client';

import { FiPlus, FiMinus } from "react-icons/fi";

import UsersProductsList from "@/components/global/UserProductsList";
import ProductQuantity from "@/components/global/ProductQuantity";


export default function CartData({ className = "" }) {

  return (
    <UsersProductsList 
      theClassName={`cart-products-list p-[5vw] rounded-lg ${className}`}
      context={{ isCart: true }}
      rowClassName="flex justify-between items-center xs:justify-evenly xs:gap-1"
      divider={true}
      dividerClassName="my-3 border-primaryFont"
      productImageContClassName="size-[25vw] max-w-[7rem] max-h-[7rem] me-3"
      productImageClassName="rounded-lg"
      productDetailsClassName="w-[25%] flex flex-col gap-1 p-1 text-xs uppercase xs:text-sm"
      productRemoveButtonClassName="ms-3 text-lg text-primaryFont xs:text-xl sm:text-2xl"
      productQuantityComponent={
        <ProductQuantity
          theClassName="h-[2rem] flex items-stretch ms-1 rounded bg-white xs:ms-0"
          inputClassName="w-[1.5rem] px-2 py-1 rounded-sm outline-none text-center text-xs focus:ring-1 hover:ring-1 focus:ring-primaryFont hover:ring-secondaryBackground xs:w-[2rem] xs:text-base sm:px-3 sm:py-2"
          buttonsClassName="px-2 py-2 text-xs xs:text-sm sm:px-3 sm:py-2 sm:text-base"
          incrementIcon={FiPlus}
          decrementIcon={FiMinus}
          stockLeft={9}
        />
      }
    />
  );
}
