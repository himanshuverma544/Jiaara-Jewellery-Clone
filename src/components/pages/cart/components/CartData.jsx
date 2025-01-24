'use client';

import Validation from "@/components/general/Validation";

import UsersProductsList from "@/components/global/user-products-list/UserProductsList";


export default function CartData({ className = "", cartItems = [] }) {

  if (cartItems?.length <= 0) {
    return (
      <Validation
        className="w-full h-[10rem] text-primaryFont"
        message="Cart is empty."
      />
    );
  }

  return (
    <UsersProductsList
      productsList={cartItems}
      theClassName={`cart-products-list p-[5vw] ${className}`}
      context={{ isCart: true }}
      rowClassName="flex flex-col"
      parentWrapperClassName="flex flex-col gap-5"
      wrapperClassName="flex justify-between"
      divider={true}
      dividerClassName="my-5 border-primaryFont"
      productImageContClassName="size-[25vw] max-w-[7rem] max-h-[7rem] me-3"
      productImageClassName="rounded-sm"
      productDetailsClassName="w-[55%] md:w-[60%] flex flex-col justify-between gap-3 px-1 text-xs uppercase text-primaryFont xs:text-sm"
      productRemoveButtonClassName="flex items-stretch text-lg text-primaryFont xs:text-xl sm:text-2xl"
    />
  );
}