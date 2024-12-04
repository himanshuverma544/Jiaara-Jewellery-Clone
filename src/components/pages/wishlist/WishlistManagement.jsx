'use client';

import { useSelector } from "react-redux";

import WishlistHead from "@/components/pages/wishlist/components/WishlistHead";
import ProductGrid from "@/components/global/ProductGrid";
import Validation from "@/components/general/Validation";


export default function WishlistManagement({ className = "" }) {

  const wishlistItems = useSelector(state => state?.wishlistReducer ?? []);

  return (
    <div className="wishlist-management">
      <WishlistHead
        wishlistItemsCount={wishlistItems?.length}
      />
      {wishlistItems?.length <= 0 ? (
        <Validation
          className="w-full h-[10rem] text-primaryFont"
          message="Wishlist is empty."
        />
      )
        :
      (
        <ProductGrid
          className="wishlist-product-grid"
          products={wishlistItems}
        />
      )}
    </div>
  );
}
