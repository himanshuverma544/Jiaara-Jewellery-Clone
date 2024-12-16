import { useRef } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

import ProductUpperOverview from "@/components/pages/product/components/product-display/components/general/ProductUpperOverview";
import Content from "@/components/general/Icon";
import ProductQuantity from "@/components/global/ProductQuantity";

import useTruncateText from "@/utils/hooks/general/useTruncateText";

import INR from "@/utils/functions/general/INR";
import useProductUtils from "@/utils/hooks/global/useProductUtils";

const INITIAL_QTY = 1;
const stockLeftFallBackValue = 15;


export default function ProductOverview({ product = null }) {

  const {
    isExpanded,
    toggleText,
    displayText: productShortDescription
  }
    = useTruncateText({ text: product?.shortDescription, wordLimit: 17 });


  const quantity = useRef(INITIAL_QTY);

  const getQuantity = receivedQuantity => {
    quantity.current = receivedQuantity;
  }


  const { wishlistUtils, cartUtils: { addToCart } } = useProductUtils(product);


  function getStockStatus() {

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


  return (
    <div className="product-overview-lower flex flex-col gap-4 px-[4vw] pt-5 md:h-[30rem] md:px-[3vw] md:pt-0 md:overflow-y-auto xl:items-center">

      <ProductUpperOverview
        className="w-full hidden md:flex md:justify-between md:items-start md:gap-5 xl:w-[95%]"
        product={product}
        wishlistUtils={wishlistUtils}
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
            theClassName="flex items-stretch"
            inputClassName="w-[2.7rem] px-2 py-1 text-center text-sm bg-septenaryBackground sm:text-base sm:py-2"
            buttonsClassName="px-3 py-2 text-sm bg-white sm:text-base sm:py-2"
            incrementIcon={FiPlus}
            decrementIcon={FiMinus}
            stockLeft={product?.stockQuantity ? product?.stockQuantity : stockLeftFallBackValue}
            callback={getQuantity}
          />

          <button
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
              ${!product?.inStock && "opacity-50"}
            `}
            disabled={!product?.inStock}
            onClick={() => addToCart(quantity.current)}
          >
            Add to Cart
          </button>
        </div>

        <button className="buy-now py-2 rounded-sm text-sm uppercase bg-primaryFont text-white sm:text-base">
          Buy Now
        </button>
      </div>
    </div>
  );
}