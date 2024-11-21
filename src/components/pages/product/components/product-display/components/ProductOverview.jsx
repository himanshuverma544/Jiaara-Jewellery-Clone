import { FiMinus, FiPlus } from "react-icons/fi";

import ProductUpperOverview from "./general/ProductUpperOverview";
import ProductQuantity from "@/components/global/ProductQuantity";
import Icon from "@/components/general/Icon";

import useTruncateText from "@/utils/hooks/general/useTruncateText";

import INR from "@/utils/functions/general/INR";

const Content = Icon;
const stockLeftFallBackValue = 15;

export default function ProductOverview({ product = null }) {

  const {
    isExpanded,
    toggleText,
    displayText: productShortDescription
  }
  = useTruncateText({ text: product?.shortDescription, wordLimit: 17 });


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
    <div className="product-overview-lower flex flex-col gap-4 px-[4vw] pt-5 md:h-[23rem] md:px-[3vw] md:pt-0 md:overflow-y-auto">

      <ProductUpperOverview
        className="w-full hidden md:flex md:justify-between md:items-start md:gap-5"
        product={product}
      />

      <div className="wrapper flex flex-wrap items-center gap-4 xs:justify-around md:flex-col md:items-start">

        <div className="price flex items-center gap-3">
          <div className="giving-price text-xl font-semibold text-primaryFont sm:text-2xl">
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
      
      <div className="product-highlight-wrapper px-[1vw] md:px-0">
        <Content
          className="product-highlight-text py-1 text-xs sm:text-sm"
          icon={productShortDescription}
        />
        <button className="text-xs text-primaryFont" onClick={toggleText}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>

      <form className="actions flex justify-between items-center mt-2 xs:justify-around md:justify-between lg:justify-start lg:gap-[5vw]">
        
        <ProductQuantity
          theClassName="flex items-stretch"
          inputClassName="w-[2.7rem] px-2 py-1 text-center text-sm bg-septenaryBackground text-primaryFont sm:text-base sm:py-2"
          buttonsClassName="px-3 py-2 text-sm bg-white text-primaryFont sm:text-base sm:py-2"
          incrementIcon={FiPlus}
          decrementIcon={FiMinus}
          stockLeft={product?.stockQuantity ? product?.stockQuantity : stockLeftFallBackValue}
        />

        <button
          className={`
            add-to-cart
            px-[8vw] py-2 rounded-xl
            text-xs uppercase
            bg-primaryFont text-white
            sm:text-base
            md:px-[3vw]
            md:text-sm
            ${!product?.inStock && "opacity-50"}
          `}
          type="submit"
          disabled={!product?.inStock}
        >
          Add to Cart
        </button>
      </form>
      
    </div>
  );
}
