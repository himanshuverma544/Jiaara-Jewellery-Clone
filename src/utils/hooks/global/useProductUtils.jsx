import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { cart } from "@/redux/slices/cart";
import { wishlist } from "@/redux/slices/wishlist";
import { buyNow } from "@/redux/slices/buyNow";


export default function useProductUtils(product = null) {
  
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state?.cartReducer ?? []);
  const cartItem = product && cartItems.find(cartItem => cartItem?.id == product?.id);

  const wishlistItems = useSelector(state => state?.wishlistReducer ?? []);
  const wishlistItem = product && wishlistItems.find(wishlistItem => wishlistItem?.id == product?.id);

  const buyNowItem = useSelector(state => state?.buyNowReducer ?? []);


  const addToCart = (quantity = 1) => {
    
    quantity = !isNaN(quantity) ? quantity : 1;
    dispatch(cart.add({ product, cartQtyCount: quantity }));
  }

  const clearCart = () => {

    dispatch(cart.clear());
  }


  const handleWishlist = () => {

    if (!wishlistItem?.isWishlist) {
      dispatch(wishlist.add(product));
    }
    else {
      dispatch(wishlist.remove(wishlistItem?.id))
    }
  }


  const theBuyNow = (quantity = 1) => {

    quantity = !isNaN(quantity) ? quantity : 1;
    dispatch(buyNow.add({ product, cartQtyCount: quantity }));
  }

  const clearBuyNow = useCallback(() => {

    dispatch(buyNow.clear());
  }, [dispatch]);


  return ({
    cartUtils: {
      cartItem,
      cartItems,
      addToCart,
      clearCart
    },
    wishlistUtils: {
      wishlistItem,
      wishlistItems,
      handleWishlist
    },
    buyNowUtils: {
      buyNowItem,
      theBuyNow,
      clearBuyNow
    }
  });
}
