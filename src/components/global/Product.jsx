'use client';

import { FiPlus, FiMinus } from "react-icons/fi";

import Icon from "@/components/general/Icon";
import ProductQuantity from "@/components/global/ProductQuantity";
import ProductGalleryCarousel from "@/components/global/ProductGalleryCarousel";

import useWindowSize from "@/utils/hooks/general/useWindowSize";
import useTruncateText from "@/utils/hooks/general/useTruncateText";
import useRouteActive from "@/utils/hooks/general/useRouteActive";

import useProductUtils from '@/utils/hooks/global/useProductUtils';

import INR from "@/utils/functions/general/INR";

import { STOCK_LEFT_FALLBACK_VALUE } from "@/utils/constants";

import { SHOP, CATEGORIES, COLLECTIONS, WISHLIST } from "@/routes";


export default function Product({
  className = "",
  product = null,
  imgContClassName = "",
  imgClassName = "",
  productDetailsContClassName = "",
  productNameClassName = "",
  productPriceClassName = "",
  btnClassName = "",
  btnTextClassName = "",
  btnText = "Add to Cart",
  iconContClassName = "",
  icon = {
    className: "text-primaryFont",
    active: WISHLIST?.activeIcon,
    inactive: WISHLIST?.inactiveIcon,
    general: <></>
  }
}) {


  const { activeRoute, isRouteActive } = useRouteActive();

  const { screenWidth, breakpoints: { xxs, xs, sm, md, lg, xl, xxl } } = useWindowSize();

  const getWordLimit = () => {

    if (screenWidth < xxs) {
      if (
        isRouteActive(SHOP?.pathname) ||
        activeRoute.includes(CATEGORIES.getPathname()) ||
        activeRoute.includes(COLLECTIONS.getPathname())
      ) {
        return 9;
      }
      return 3;
    }
    else if (screenWidth >= xxs && screenWidth < xs) {
      return 3;
    }
    else if (screenWidth >= xs && screenWidth < sm) {
      return 4;
    }
    else if (screenWidth >= sm && screenWidth < md) {
      return 2;
    }
    else if (screenWidth >= md && screenWidth < lg) {
      return 2;
    }
    else if (screenWidth >= lg && screenWidth < xl) {
      return 3;
    }
    else if (screenWidth >= xl && screenWidth < xxl) {
      return 4;
    }
    else if (screenWidth >= xxl) {
      return 4;
    }
  }

  const { displayText: truncatedProductName }
    = useTruncateText({ text: product?.name, wordLimit: getWordLimit() });

  const {
    cartUtils: { cartItem, addToCart },
    wishlistUtils: { wishlistItem, handleWishlist }
  }
    = useProductUtils(product);


  return (
    <div className={`product-cont flex flex-col items-center justify-center gap-3 z-10 ${className}`}>

      <ProductGalleryCarousel
        product={product}
        media={{
          contClassName: imgContClassName,
          className: imgClassName
        }}
        dotsGroupPosition={{
          global: '60%',
          breakpoints: { xs: '65%', sm: '75%', lg: '70%', xxl: '80%' }
        }}
      />

      {(product?.name || product?.price) &&
        <div className={`
          product-details
          flex flex-col items-center justify-center gap-1
          text-center
          ${productDetailsContClassName}
        `}>
          {product?.name &&
            <div className={`name ${productNameClassName} h-[2rem]`}>
              {truncatedProductName}
            </div>
          }
          {product?.price &&
            <div className={`price ${productPriceClassName}`}>
              {INR(product.price)}
            </div>
          }
        </div>
      }

      {(btnText || icon) &&
        <div className={`btn-group w-[97%] flex justify-center items-center ${btnClassName}`}>
          {btnText && 
            (!cartItem ?
              <button
                className={`add-to-cart-btn w-full py-2 ${btnTextClassName}`}
                onClick={addToCart}
              >
                {btnText}
              </button>
              :
              <ProductQuantity
                productId={cartItem?.id}
                theClassName="h-[2rem] flex items-stretch ms-1 rounded-sm bg-primaryFont xs:ms-0"
                inputClassName="w-[1.5rem] px-2 py-1 outline-none text-center text-xs input-selection-primaryFont focus:ring-1 hover:ring-1 focus:ring-primaryFont hover:ring-secondaryBackground xs:w-[3rem] xs:text-base sm:px-3 sm:py-2"
                buttonsClassName="px-2 py-2 text-xs text-white xs:text-sm sm:px-3 sm:py-2 sm:text-base"
                incrementIcon={FiPlus}
                decrementIcon={FiMinus}
                cartQtyCount={cartItem?.cartQtyCount}
                stockLeft={
                  product?.stockQuantity ? product?.stockQuantity : STOCK_LEFT_FALLBACK_VALUE
                }
              />
            )
          }
          {icon &&
            <button
              className={`wishlist-icon-btn ${iconContClassName}`}
              onClick={handleWishlist}
            >
              {(icon?.general || icon?.active || icon?.inactive) &&
                <Icon
                  className={`${icon?.className}`}
                  icon={wishlistItem?.isWishlist ? icon?.active : icon?.inactive ?? icon?.general}
                />
              }
            </button>
          }
        </div>
      }
    </div>
  );
}
