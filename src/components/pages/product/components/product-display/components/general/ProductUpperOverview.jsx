import { IoMdHeartEmpty } from "react-icons/io";

import Rating from "@/components/general/Rating";


export default function ProductUpperOverview({ className = "", product = null }) {

  return (
    <div className={`wrapper ${className}`}>
      <div className="product-overview-upper">
        <h2 className="product-name uppercase">
          {product?.name}
        </h2>

        <div className="wrapper flex items-center gap-3 py-1">
          <Rating className="product-rating text-lg" given={product?.rating}/>
          <div className="ratings-count text-2xs uppercase opacity-50">
            {`${product?.ratingCount} Ratings`}
          </div>
        </div>
      </div>
      <button className="add-to-wishlist-btn">
        <IoMdHeartEmpty className="wishlist-icon text-xl"/>
      </button>
    </div>  
  );
}