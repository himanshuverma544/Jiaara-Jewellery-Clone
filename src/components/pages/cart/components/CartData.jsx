'use client';

import Validation from "@/components/general/Validation";

import UserProductsList from "@/components/global/user-products-list/UserProductsList";


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
    <UserProductsList
      theClassName={`cart-products-list p-[5vw] ${className}`}
      productsList={cartItems}
      context={{ isCart: true }}
      divider={true}
    />
  );
}