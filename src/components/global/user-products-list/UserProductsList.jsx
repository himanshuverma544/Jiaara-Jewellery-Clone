import React from "react";

import Link from "next/link";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { cart } from "@/redux/slices/cart";

import CartHead from "@/components/pages/cart/components/CartHead";
import ProductQuantity from "@/components/global/ProductQuantity";
import TotalPrice from "@/components/global/user-products-list/components/TotalPrice";

import useTruncateText from "@/utils/hooks/general/useTruncateText";

import INR from "@/utils/functions/general/INR";

import { STOCK_LEFT_FALLBACK_VALUE } from "@/utils/constants";

import { PRODUCT } from "@/routes";


export default function UserProductsList({
  theClassName = "",
  context = {
    isCart: false,
    isCheckout: false
  },
  rowClassName = "",
  parentWrapperClassName = "",
  wrapperClassName = "",
  dividerClassName = "",
  divider = false,
  productsList = [],
  productImageContClassName = "",
  productImageClassName = "",
  productDetailsClassName = "",
  productRemoveButtonClassName = ""
}) {

  const dispatch = useDispatch();

  const { getTruncateText } = useTruncateText();

  const removeCartItem = productId => {
    dispatch(cart.remove(productId));
  }

  return (
    <div className="user-products-list flex flex-col">

      <ul className={`${theClassName} flex flex-col gap-3`}>

        <li className="cart-head-wrapper">
          <CartHead
            className="pb-[5vw]"
            cartItemsCount={productsList?.length}
          />
        </li>

        {productsList?.length > 0 &&
          productsList?.map((product, index) =>

            <li key={product?.id || index}
              className={`row-${index + 1} ${rowClassName}`}
            >
              <div className={`parent-wrapper ${parentWrapperClassName}`}>
                <div className={`wrapper ${wrapperClassName}`}>

                  <div className="col-1">
                    <div className={`product-details flex gap-[5vw]`}>
                      <Link
                        className={`img-cont relative ${productImageContClassName}`}
                        href={PRODUCT.getPathname(product?.id ?? "#")}
                      >
                        <Image
                          fill
                          className={`object-cover ${productImageClassName}`}
                          src={product?.image}
                          alt={product?.slug || product?.name}
                        />
                      </Link>

                      <div className={`${productDetailsClassName}`}>
                        <div className="product-name text-2xs xs:text-xs sm:text-sm font-medium">
                          {getTruncateText(product?.name, 15)}
                        </div>

                        {context.isCart &&
                          <ProductQuantity
                            theClassName="w-fit h-[2rem] flex rounded bg-white"
                            inputClassName={`
                              w-[2.5rem] px-2 py-1 rounded-sm outline-none
                              text-center text-xs
                              input-selection-primaryFont
                              focus:ring-1 hover:ring-1 focus:ring-primaryFont hover:ring-secondaryBackground
                              xs:text-base
                              sm:px-3 sm:py-2
                            `}
                            buttonsClassName="px-3 py-2 text-xs bg-primaryFont text-white xs:text-sm sm:px-3 sm:py-2 sm:text-base"
                            incrementIcon={FiPlus}
                            decrementIcon={FiMinus}
                            productId={product?.id}
                            cartQtyCount={product?.cartQtyCount}
                            stockLeft={product?.stockQuantity ? product?.stockQuantity : STOCK_LEFT_FALLBACK_VALUE}
                          />
                        }
                      </div>
                    </div>
                  </div>

                  <div className="col-2">
                    {context.isCart &&
                      <button
                        className={`remove-btn ${productRemoveButtonClassName}`}
                        onClick={() => removeCartItem(product?.id)}
                      >
                        <IoCloseOutline className="cross-icon"/>
                      </button> 
                    }
                  </div>
                </div>

                <div className="product-summary flex flex-col gap-1 text-xs text-primaryFont xs:text-sm">
                  <div className="product-price flex justify-between">
                    <div className="text">
                      Price
                    </div>
                    <div className="value">
                      {INR(product?.price)}
                    </div>
                  </div>

                  <div className="product-quantity flex justify-between">
                    <div className="text">
                      Quantity
                    </div>
                    <div className="value">
                      {product?.cartQtyCount}
                    </div>
                  </div>

                  <div className="product-total-price flex justify-between">
                    <div className="text">
                      Total Price
                    </div>
                    <div className="value">
                      {INR(product?.price * product?.cartQtyCount)}
                    </div>
                  </div>
                </div>
              </div>

              {divider && productsList?.length - 1 !== index &&
                <div className="divider-cont">
                  <hr className={`divider ${dividerClassName}`}/>
                </div>
              }
            </li>
          )
        }
      </ul>
    </div>
  );
}