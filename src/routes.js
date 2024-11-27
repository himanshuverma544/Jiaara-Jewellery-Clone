import { GoHome, GoHomeFill } from "react-icons/go";

import { IoDiamondOutline, IoDiamond } from "react-icons/io5";

import { IoInformationOutline, IoInformationSharp } from "react-icons/io5";

import { IoPricetagsOutline, IoPricetagsSharp } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";

import { RiUserLine, RiUserFill } from "react-icons/ri";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

import { IoCart , IoCartOutline } from "react-icons/io5";


export const HOME = {
  id: "home",
  title: "Home",
  pathname: "/",
  inactiveIcon: GoHome,
  activeIcon: GoHomeFill
}

export const SHOP = {
  id: "shop",
  title: "Shop",
  pathname: "/shop",
  inactiveIcon: IoPricetagsOutline,
  activeIcon: IoPricetagsSharp
}

export const CATEGORIES = {
  id: "categories",
  title: "Categories",
  pathname: "#",
  inactiveIcon: IoInformationOutline,
  activeIcon: IoInformationSharp
}

export const COLLECTIONS = {
  id: "collections",
  title: "Collections",
  pathname: "#",
  inactiveIcon: IoDiamondOutline,
  activeIcon: IoDiamond
}

export const SIGN_IN = {
  id: "sign-in",
  title: "Sign In",
  pathname: "/sign-in",
  inactiveIcon: RiUserLine,
  activeIcon: RiUserFill
}

export const SEARCH = {
  id: "search",
  title: "Search",
  generalIcon: CiSearch
} 

export const WISHLIST = {
  id: "wishlist",
  title: "Wishlist",
  pathname: "/wishlist",
  inactiveIcon: IoMdHeartEmpty,
  activeIcon: IoMdHeart
}

export const CART = {
  id: "cart",
  title: "Cart",
  pathname: "/cart",
  inactiveIcon: IoCartOutline,
  activeIcon: IoCart
}


export const CHECKOUT = {
  id: "checkout",
  title: "Checkout",
  pathname: "/checkout"
}

export const ORDER_CONFIRMATION = {
  id: "order-confirmation",
  title: "Order Confirmation",
  pathname: "/order-confirmation"
}


export function getAllRoutes() {

  return ({
    HOME,
    SHOP,
    CATEGORIES,
    COLLECTIONS,
    SEARCH,
    SIGN_IN,
    WISHLIST,
    CART,
    CHECKOUT,
    ORDER_CONFIRMATION
  }); 
}