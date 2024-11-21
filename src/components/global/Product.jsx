'use client';

import { useState } from "react";

import Link from 'next/link';
import Image from "next/image";

import { useDispatch } from "react-redux";
import { cart } from "@/redux/slices/cart";

import { IoMdHeartEmpty } from "react-icons/io";
import { FiPlus, FiMinus } from "react-icons/fi";

import ProductQuantity from "@/components/global/ProductQuantity";
import Icon from "@/components/general/Icon";
import useTruncateText from "@/utils/hooks/general/useTruncateText";

import INR from "@/utils/functions/general/INR";

import { STOCK_LEFT_FALLBACK_VALUE } from "@/utils/constants";

const INITIAL_QTY = 0;


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
  icon = <IoMdHeartEmpty/>
}) {

  const dispatch = useDispatch();


  const [quantity, setQuantity] = useState(INITIAL_QTY);

  const getQuantity = currentQuantity => {
    setQuantity(currentQuantity);
  }


  const { displayText: truncatedProductName }
    = useTruncateText({ text: product.name, wordLimit: 2 });


  const addToCart = () => {

    dispatch(cart.add(product));
    setQuantity(prev => prev + 1);
  }

  const addToWishList = () => {
    
  }


  return (
    <div className={`product-cont flex flex-col items-center justify-center gap-3 ${className}`}>
      {product.image &&
        <Link
          className={`img-cont ${imgContClassName}`}
          href={`/product/${product.id}`}
        >
          <Image
            className={imgClassName}
            fill
            src={product?.image}
            alt={product?.name}
          />
        </Link>
      }
      
      {(product.name || product.price) &&
        <div className={`
          product-details
          flex flex-col items-center justify-center gap-1
          text-center
          ${productDetailsContClassName}
        `}>
          {product.name &&
            <div className={`name ${productNameClassName} h-[2rem]`}>
              {truncatedProductName}
            </div>
          }
          {product.price &&
            <div className={`price ${productPriceClassName}`}>
              {INR(product.price)}
            </div>
          }
        </div>
      }

      {(btnText || icon) &&
        <div className={`btn-group w-[97%] flex justify-center items-center ${btnClassName}`}>
          {btnText && 
            (quantity <= INITIAL_QTY ?
              <button
                className={`add-to-cart-btn w-[80%] py-2 ${btnTextClassName}`}
                onClick={addToCart}
              >
                {btnText}
              </button>
              :
              <ProductQuantity
                productId={product?.id}
                callback={getQuantity}
                theClassName="h-[2rem] flex items-stretch ms-1 rounded bg-primaryFont xs:ms-0"
                inputClassName="w-[1.5rem] px-2 py-1 rounded-sm outline-none text-center text-xs input-selection-primaryFont focus:ring-1 hover:ring-1 focus:ring-primaryFont hover:ring-secondaryBackground xs:w-[3rem] xs:text-base sm:px-3 sm:py-2"
                buttonsClassName="px-2 py-2 text-xs text-white xs:text-sm sm:px-3 sm:py-2 sm:text-base"
                incrementIcon={FiPlus}
                decrementIcon={FiMinus}
                stockLeft={
                  product?.stockQuantity ? product?.stockQuantity : STOCK_LEFT_FALLBACK_VALUE
                }
              />
            )
          }
          {icon &&
            <button
              className={`wishlist-icon-btn ${iconContClassName}`}
              onClick={addToWishList}
            >
              <Icon className="wishlist-icon" icon={icon}/>
            </button>
          }
        </div>
      }
    </div>
  );
}
