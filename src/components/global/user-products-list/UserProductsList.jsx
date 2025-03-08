import Link from "next/link";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { cart } from "@/redux/slices/cart";

import CartHead from "@/components/pages/cart/components/CartHead";
import ProductQuantity from "@/components/global/ProductQuantity";
import ProductSummary from "@/components/global/user-products-list/components/ProductSummary";

import Validation from "@/components/general/Validation";

import useTruncateText from "@/utils/hooks/general/useTruncateText";

import { STOCK_LEFT_FALLBACK_VALUE } from "@/utils/constants";

import { PRODUCT } from "@/routes";


export default function UserProductsList({
  theClassName = "",
  productsList = [],
  context = {
    isCart: false,
    isCheckout: false
  },
  divider = false,
}) {

  const dispatch = useDispatch();

  const { getTruncateText } = useTruncateText();

  const removeCartItem = productId => {
    dispatch(cart.remove(productId));
  }

  return (
    <div className="user-products-list flex flex-col">

      <ul className={`${theClassName} flex flex-col gap-3`}>

        {context.isCart &&
          <li className="cart-head-wrapper">
            <CartHead
              className="pb-[5vw]"
              cartItemsCount={productsList?.length || 0}
            />
          </li>
        }
        
        {productsList?.length > 0 ?
          productsList?.map((product, index) =>

            <li key={product?.id || index} className={`row-${index + 1} flex flex-col`}>
              <div className="parent-wrapper flex flex-col gap-5">
                <div className="wrapper flex justify-between">

                  <div className="col-1 w-full">
                    <div className="product-details w-[inherit] flex gap-[5vw]">
                      <Link
                        className={`img-cont size-[25vw] relative max-w-[7rem] max-h-[7rem] me-3`}
                        href={PRODUCT.getPathname(product?.id ?? "#")}
                      >
                        <Image
                          fill
                          className={`object-cover rounded-sm`}
                          src={product?.image}
                          alt={product?.slug || product?.name}
                        />
                      </Link>

                    <div className="parent-wrapper w-[inherit] flex flex-col gap-5">
                      <div className="wrapper flex flex-col justify-between gap-5 px-1 text-xs uppercase text-primaryFont xs:text-sm">

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
                      
                      <ProductSummary
                        className={`
                        2xs:text-primaryFont sm:text-sm
                          ${context.isCart ? "hidden md:flex md:flex-col md:gap-1" : "2xs:flex 2xs:flex-col 2xs:gap-1 2xs:text-xs"}
                        `}
                        productPrice={product?.price}
                        productQtyCount={product?.cartQtyCount}
                      />
                    </div>

                    </div>
                  </div>

                  <div className="col-2">
                    {context.isCart &&
                      <button
                        className="remove-btn flex items-stretch text-lg text-primaryFont xs:text-xl sm:text-2xl"
                        onClick={() => removeCartItem(product?.id)}
                      >
                        <IoCloseOutline className="cross-icon"/>
                      </button> 
                    }
                  </div>
                </div>

                <ProductSummary
                  className={`
                    flex flex-col gap-1 text-xs text-primaryFont xs:text-sm
                    ${context.isCart ? "md:hidden" : "2xs:hidden"}
                  `}
                  productPrice={product.price}
                  productQtyCount={product.cartQtyCount}
                />
              </div>

              {divider && productsList?.length - 1 !== index &&
                <div className="divider-cont">
                  <hr className="divider my-5 border-primaryFont"/>
                </div>
              }
            </li>
          )
        :
          <Validation
            className="w-full h-[10rem] text-primaryFont"
            message="Cart is empty."
          />
        }
      </ul>
    </div>
  );
}