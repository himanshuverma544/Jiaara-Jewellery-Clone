'use client';

import UsersProductsList from "@/components/global/user-products-list/UserProductsList";
import Validation from "@/components/general/Validation";


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
      theClassName={`cart-products-list p-[5vw] rounded-lg ${className}`}
      context={{ isCart: true }}
      rowClassName="flex justify-between items-center xs:justify-evenly xs:gap-1"
      divider={true}
      dividerClassName="my-3 border-primaryFont"
      productImageContClassName="size-[25vw] max-w-[7rem] max-h-[7rem] me-3"
      productImageClassName="rounded-lg"
      productDetailsClassName="w-[25%] flex flex-col gap-1 p-1 text-xs uppercase text-primaryFont xs:text-sm"
      productRemoveButtonClassName="ms-3 text-lg text-primaryFont xs:text-xl sm:text-2xl"
    />
  );
}