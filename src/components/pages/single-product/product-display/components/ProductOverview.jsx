import { FiMinus, FiPlus } from "react-icons/fi";

import ProductQuantity from "@/components/global/ProductQuantity";

import getDiscountPercentage from "@/utils/functions/getDiscountPercentage";


const product = {
  name: "Jiaara Pure Brass Contemporary Geometric Cuff Bracelet for Women",
  actualPrice: "1599",
  discountedPrice: "599",
  rating: 4.3,
  inStock: true,
}


export default function ProductOverview() {

  return (
    <div className="product-overview-lower flex flex-col gap-4 px-[2vw] py-5">

    <div className="wrapper flex flex-wrap items-center gap-4 xs:justify-around">

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

    <p className="product-highlight-text text-xs px-[1vw] py-1 sm:text-sm">
      Jiaara Brass Collection offers a unique appeal with a break from the traditional styles we are used to seeing. If you want to shake things up this season,consider accessorizing with Brass.
    </p>

      <form className="actions flex justify-between items-center mt-2 xs:justify-around">
        
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
