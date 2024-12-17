import React from "react";

import Link from "next/link";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { cart } from "@/redux/slices/cart";

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
    <ul className={`${theClassName} flex flex-col gap-3`}>

      {productsList?.length > 0 &&
        productsList?.map((product, index) =>

          <React.Fragment key={product?.id || index}>
            <li className={`row-${index + 1} ${rowClassName}`}>
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

              <div className={`product-details ${productDetailsClassName}`}>
                <div className="product-name text-2xs xs:text-xs md:text-sm font-semibold">
                  {getTruncateText(product?.name, 3)}
                </div>
                
                {context.isCheckout &&
                  <div className="quantity">
                    {`Qty: ${product?.cartQtyCount}`}
                  </div>
                }
                {context.isCart && 
                  <TotalPrice
                    className="total-price mt-1 text-xs 2xs:text-sm"
                    text={`${INR(product?.price)} x ${product?.cartQtyCount} = `}
                    amount={product?.price * product?.cartQtyCount}
                  />
                }
              </div>

              {context.isCheckout &&
                <TotalPrice
                  className="total-price px-1 text-xs 2xs:text-sm"
                  text={`${INR(product?.price)} x ${product?.cartQtyCount} = `}
                  amount={product?.price * product?.cartQtyCount}
                />
              }

              {context.isCart &&
                <ProductQuantity
                  theClassName="h-[2rem] flex items-stretch ms-1 rounded bg-white xs:ms-0"
                  inputClassName={`
                    w-[1.5rem] px-2 py-1 rounded-sm outline-none
                    text-center text-xs
                    input-selection-primaryFont
                    focus:ring-1 hover:ring-1 focus:ring-primaryFont hover:ring-secondaryBackground xs:w-[2rem] xs:text-base
                    sm:px-3 sm:py-2
                  `}
                  buttonsClassName="px-2 py-2 text-xs bg-primaryFont text-white xs:text-sm sm:px-3 sm:py-2 sm:text-base"
                  incrementIcon={FiPlus}
                  decrementIcon={FiMinus}
                  productId={product?.id}
                  cartQtyCount={product?.cartQtyCount}
                  stockLeft={product?.stockQuantity ? product?.stockQuantity : STOCK_LEFT_FALLBACK_VALUE}
                />
              }

              {context.isCart &&
                <button
                  className={`remove-btn ${productRemoveButtonClassName}`}
                  onClick={() => removeCartItem(product?.id)}
                >
                  <IoCloseOutline className="cross-icon"/>
                </button> 
              }
            </li>
            {divider && productsList?.length - 1 !== index &&
              <li className="divider-cont">
                <hr className={`divider ${dividerClassName}`}/>
              </li>
            }
          </React.Fragment>
        )
      }
    </ul>
  );
}