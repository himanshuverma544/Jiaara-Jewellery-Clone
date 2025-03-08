'use client';


import UserProductsList from "@/components/global/user-products-list/UserProductsList";


export default function CartData({ className = "", cartItems = [] }) {

  return (
    <UserProductsList
      theClassName={`cart-products-list p-[5vw] ${className}`}
      productsList={cartItems}
      context={{ isCart: true }}
      divider={true}
    />
  );
}