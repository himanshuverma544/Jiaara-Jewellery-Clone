import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

import { IoDiamondOutline } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";

import { IoInformationOutline } from "react-icons/io5";
import { IoInformationSharp } from "react-icons/io5";

import { MdOutlineLocalPhone } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

import { IoPricetagsOutline } from "react-icons/io5";
import { IoPricetagsSharp } from "react-icons/io5";


export const HOME = {
  id: 1,
  title: "Home",
  pathname: "/",
  inactiveIcon: GoHome,
  activeIcon: GoHomeFill
}

export const JEWELLERY = {
  id: 2,
  title: "Jewellery",
  pathname: "#",
  inactiveIcon: IoDiamondOutline,
  activeIcon: IoDiamond
}

export const ABOUT = {
  id: 3,
  title: "About",
  pathname: "#",
  inactiveIcon: IoInformationOutline,
  activeIcon: IoInformationSharp
}

export const CONTACT = {
  id: 4,
  title: "Contact",
  pathname: "#",
  inactiveIcon: MdOutlineLocalPhone,
  activeIcon: MdLocalPhone
}

export const SALE = {
  id: 5,
  title: "Sale",
  pathname: "#",
  inactiveIcon: IoPricetagsOutline,
  activeIcon: IoPricetagsSharp
}


export function getAllRoutes() {

  return ([
    HOME,
    JEWELLERY,
    ABOUT,
    SALE
  ]); 
}