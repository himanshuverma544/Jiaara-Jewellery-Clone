import { IoMdHeartEmpty } from "react-icons/io";

import Rating from "@/components/general/Rating";


export default function ProductUpperOverview({ className = "" }) {

  return (
    <div className={`wrapper ${className}`}>
      <div className="product-overview-upper">
        <h2 className="product-name uppercase">
          {`Jiaara Pure Brass Contemporary Geometric Cuff Bracelet for Women`}
        </h2>

        <div className="wrapper flex items-center gap-3 py-1">
          <Rating className="product-rating text-lg" given={4.5}/>
          <div className="reviews-count text-2xs uppercase opacity-50">
            3 Reviews
          </div>
        </div>
      </div>

      <button className="add-to-wishlist-btn">
        <IoMdHeartEmpty className="wishlist-icon text-xl"/>
      </button>
    </div>  
  );
}