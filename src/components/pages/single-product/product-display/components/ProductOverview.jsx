import { FiMinus, FiPlus } from "react-icons/fi";

import ProductUpperOverview from "./general/ProductUpperOverview";
import ProductQuantity from "@/components/global/ProductQuantity";

import getDiscountPercentage from "@/utils/functions/getDiscountPercentage";
import useTruncateText from "@/utils/hooks/general/useTruncateText";


const product = {
  name: "Jiaara Pure Brass Contemporary Geometric Cuff Bracelet for Women",
  highlightText: "Jiaara Brass Collection brings a fresh appeal, breaking away from traditional styles. If you're looking to switch up your look this season, consider brass accessories. They offer a unique and bold statement, making your outfits stand out while adding a touch of elegance and sophistication to your style.",
  actualPrice: "1599",
  discountedPrice: "599",
  rating: 4.3,
  inStock: true,
}


export default function ProductOverview() {

  const {
    isExpanded,
    toggleText,
    displayText
  }
  = useTruncateText({ text: product.highlightText, wordLimit: 17 });

  return (
    <div className="product-overview-lower flex flex-col gap-4 px-[4vw] pt-5 md:h-[23rem] md:px-[3vw] md:pt-0 md:overflow-y-auto">

      <ProductUpperOverview className="w-full hidden md:flex md:justify-between md:items-start md:gap-5"/>

      <div className="wrapper flex flex-wrap items-center gap-4 xs:justify-around md:flex-col md:items-start">

        <div className="price flex items-center gap-3">
          <div className="discounted-price text-xl font-semibold text-primaryFont sm:text-2xl">
            {`₹ ${product.discountedPrice}`}
          </div>
          <div className="actual-price line-through opacity-50 sm:text-lg">
            {`₹ ${product.actualPrice}`}
          </div>
          <div className="discount-percentage border-2 px-2 py-1 rounded text-xs uppercase font-semibold border-primaryFont text-primaryFont sm:text-sm">
            {`Save ${getDiscountPercentage({
              actualPrice: product.actualPrice,
              discountedPrice: product.discountedPrice
            })}%`}
          </div>
        </div>

        <div className={`
          stock-status text-sm sm:text-base
          ${product.inStock ? "text-green-600" : "text-red-600"}
        `}>
          {product.inStock ? `9 item(s) left in Stock.` : `Currently, Out of Stock.`}
        </div>
        
      </div>
      
      <div className="product-highlight-wrapper px-[1vw] md:px-0">
        <p className="product-highlight-text py-1 text-xs sm:text-sm">
          {displayText}
        </p>
        <button className="text-xs text-primaryFont" onClick={toggleText}>
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>

      <form className="actions flex justify-between items-center mt-2 xs:justify-around md:justify-between lg:justify-start lg:gap-[5vw]">
        
        <ProductQuantity
          className="quantity"
          inputClassName="text-sm bg-septenaryBackground text-primaryFont sm:text-base sm:py-2"
          buttonsClassName="text-sm bg-white text-primaryFont sm:text-base sm:py-2"
          incrementIcon={FiPlus}
          decrementIcon={FiMinus}
          stockLeft={9}
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
            ${!product.inStock && "opacity-50"}
          `}
          type="submit"
          disabled={!product.inStock}
        >
          Add to Cart
        </button>
      </form>
      
    </div>
  );
}
