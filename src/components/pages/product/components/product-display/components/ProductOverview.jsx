'use client';

import Link from "next/link";

import { useRouter } from 'next/navigation';

import { useState, useRef, useEffect, useCallback, useContext } from "react";
import { context } from "@/context-API/context";

import { FiMinus, FiPlus } from "react-icons/fi";

import ProductUpperOverview from "@/components/pages/product/components/product-display/components/general/ProductUpperOverview";
import Content from "@/components/general/Icon";

import ProductQuantity from "@/components/global/ProductQuantity";

import useSleep from "@/utils/hooks/general/useSleep";
import useTruncateText from "@/utils/hooks/general/useTruncateText";
import usePreviousRoute from "@/utils/hooks/general/usePreviousRoute";

import useProductUtils from "@/utils/hooks/global/useProductUtils";

import INR from "@/utils/functions/general/INR";

import { CHECKOUT } from "@/routes";

const INITIAL_QTY = 1;
const NO_STOCK_QTY = 0;
const stockLimit = 15;


export default function ProductOverview({ product = null }) {

  const { data: { triggered } = {}, data: { states } = {} } = useContext(context) || {};
  const isZoomed = (triggered && states?.zoomableImage?.isZoomed) || false;

  const router = useRouter();

  const { saveRoute: saveCurrentRoute } = usePreviousRoute();

  const {
    isExpanded,
    toggleText,
    displayText: productShortDescription
  }
    = useTruncateText({ text: product?.shortDescription, wordLimit: 17 });


  const { sleep, clearSleep } = useSleep();


  const addToCartButtonRef = useRef(null);
  const [isAddToCartBtnLoading, setIsAddToCartBtnLoading] = useState(false);
  
  const [quantity, setQuantity] = useState(INITIAL_QTY);

  const [error, setError] = useState({});


  const getQuantity = receivedQuantity => {
    setQuantity(receivedQuantity);
  }


  const {
    cartUtils: { cartItem, addToCart },
    buyNowUtils: { theBuyNow },
  }
    = useProductUtils(product);

    
  let stockQuantity = product?.stockQuantity ? product?.stockQuantity : stockLimit;
  stockQuantity -= (cartItem?.cartQtyCount ?? 0);


  const getStockStatus = () => {

    if (product?.inStock) {

      if (product?.stockQuantity) {
        return `${product?.stockQuantity} item(s) left in Stock`;
      }
      else {
        return "In Stock";
      }
    }
    else {
      return "Currently, Out of Stock.";
    }
  }

  const disableAddToCartButton = () => {

    addToCartButtonRef.current.disabled = true;
    addToCartButtonRef.current.style.opacity = '0.7';
  }

  const enableAddToCartButton = () => {

    addToCartButtonRef.current.disabled = false;
    addToCartButtonRef.current.style.opacity = '1';
  }

  const manageAddToCartButton = async quantity => {

    setIsAddToCartBtnLoading(true);
    addToCartButtonRef.current.textContent = `${quantity} ${quantity <= 1 ? "Item" : "Items"} Added`;
    disableAddToCartButton();

    await sleep(3000);
    clearSleep();

    const currentStockQuantity = (stockLimit < stockQuantity ? stockLimit : stockQuantity) - quantity;

    if (quantity > currentStockQuantity) {
      setQuantity(currentStockQuantity > 0 ? INITIAL_QTY : NO_STOCK_QTY);
    }
    
    if (currentStockQuantity > 0) {
      enableAddToCartButton();
    }
    addToCartButtonRef.current.textContent = "Add to Cart";
    setIsAddToCartBtnLoading(false);
  }

  const handleAddToCartButton = async () => {

    addToCart(quantity);
    manageAddToCartButton(quantity);
  }


  const handleBuyNowButton = (event, isValid) => {

    event.preventDefault();

    if (isValid) {

      theBuyNow(quantity);
      
      saveCurrentRoute();
      router.push(CHECKOUT.pathname);
    }
  }

  
  const getError = useCallback(() => {

    if (quantity > stockLimit) {
      return {
        stockLimit: true,
        message: "You have reached the maximum quantity allowed for this product."
      };
    }

    else if (stockQuantity <= 0) {
      return {
        stockQuantity: true,
        message: "No stock left for this product."
      };
    }

    else if (quantity <= 0 || quantity > stockQuantity) {

      const currentQuantityValue
        = stockLimit < stockQuantity ? stockLimit : stockQuantity;

      return {
        quantity: true,
        message: `Quantity should be between 0 and ${currentQuantityValue + 1}`
      };
    }

    return null;

  }, [quantity, stockQuantity]);


  useEffect(() => {

    const error = getError();
    setError(error);
    
  }, [getError]);


  return (
    <>
      <div
        id="zoomable-image-preview"
        className={`
          md:px-[3vw]
          ${isZoomed ? "block" : "hidden"}`
        }
      >
      </div>
      
      <div
        className={`
          product-overview-lower
          flex flex-col gap-4 px-[4vw] pt-5
          md:h-[30rem] md:px-[3vw] md:pt-0 md:overflow-y-auto
          xl:items-center
          ${isZoomed ? "hidden" : "block"}
        `}
      >
        <ProductUpperOverview
          className="w-full hidden md:flex md:justify-between md:items-start md:gap-5 xl:w-[95%]"
          product={product}
        />

        <div className="wrapper flex flex-wrap items-center gap-4 xs:justify-around md:flex-col md:items-start xl:w-[95%]">

          <div className="price flex items-center gap-3 text-primaryFont">
            <div className="giving-price text-xl font-semibold sm:text-2xl">
              {INR(product?.salePrice || product?.price)}
            </div>

            {product?.onSale &&
              <>
                <div className="actual-price line-through opacity-50 sm:text-lg">
                  {INR(product?.regularPrice)}
                </div>
                <div className="discount-percentage border-2 px-2 py-1 rounded text-xs uppercase font-semibold border-primaryFont text-primaryFont sm:text-sm">
                  {`Save ${product?.discountPercentage}`}
                </div>
              </>
            }
          </div>

          <div className={`
            stock-status text-sm sm:text-base
            ${product?.inStock ? "text-green-600" : "text-red-600"}
          `}>
            {getStockStatus()}
          </div>
          
        </div>
        
        <div className="product-highlight-wrapper px-[1vw] md:px-0 text-primaryFont xl:w-[95%]">
          <Content
            className="product-highlight-text py-1 text-xs sm:text-sm lg:text-base"
            icon={productShortDescription}
          />
          <button className="text-xs" onClick={toggleText}>
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        </div>

        <div className="actions flex flex-col gap-5 xl:w-[95%]">
          
          <div className="wrapper flex justify-between items-center mt-2">
            <ProductQuantity
              productId={product.id}
              theClassName="flex items-stretch"
              inputClassName="w-[2.7rem] px-2 py-1 text-center text-sm bg-septenaryBackground sm:text-base sm:py-2"
              buttonsClassName="px-3 py-2 text-sm bg-white sm:text-base sm:py-2"
              incrementIcon={FiPlus}
              decrementIcon={FiMinus}
              stockLeft={stockQuantity}
              stockLimit={stockLimit}
              callback={getQuantity}
              cartQtyCount={quantity}
            />

            <button
              ref={addToCartButtonRef}
              className={`
                add-to-cart
                px-[8vw] py-2 rounded-sm
                text-xs uppercase
                bg-primaryFont text-white
                2xs:px-[10vw]
                sm:text-base
                md:px-[3vw]
                md:text-sm
                lg:px-[5vw]
                ${(!product?.inStock || error) ? "opacity-50" : ""}
              `}
              disabled={!product?.inStock || error}
              onClick={handleAddToCartButton}
            >
              Add to Cart
            </button>
          </div>

          {error && 
            <p className="error text-red-500 text-xs">
              {(!isAddToCartBtnLoading && error?.message) ?? ""}
            </p>
          }

          <Link
            className={`
              buy-now
              py-2 rounded-sm
              text-center text-sm uppercase
              bg-primaryFont text-white sm:text-base
              ${error ? "opacity-50 cursor-default" : ""}
            `}
            href={CHECKOUT.pathname}
            onClick={event => handleBuyNowButton(event, !error)}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}