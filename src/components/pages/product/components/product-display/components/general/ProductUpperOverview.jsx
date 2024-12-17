import Rating from "@/components/general/Rating";
import Icon from "@/components/general/Icon";

import useProductUtils from "@/utils/hooks/global/useProductUtils";

import { WISHLIST } from "@/routes";


export default function ProductUpperOverview({
  className = "",
  product = null,
  icon = {
    className: "text-2xl text-primaryFont",
    active: WISHLIST?.activeIcon,
    inactive: WISHLIST?.inactiveIcon,
    general: <></>
  },
  wishlistUtils = null
}) {

  const { wishlistItem = {}, handleWishlist = () => {} } = wishlistUtils || {};

  return (
    <div className={`wrapper flex justify-between items-left ${className}`}>
      <div className="product-overview-upper">
        <h2 className="product-name text-lg font-medium text-primaryFont uppercase">
          {product?.name}
        </h2>

        <div className="wrapper flex items-center gap-3 py-1 text-primaryFont">
          <Rating className="product-rating text-lg" given={product?.rating ?? 0}/>
          <div className="ratings-count text-xs uppercase opacity-50">
            {`${product?.ratingCount ?? 0} Ratings`}
          </div>
        </div>
      </div>

      {icon &&
        <button
          className={`wishlist-icon-btn`}
          onClick={handleWishlist}
        >
          {(icon?.general || icon?.active || icon?.inactive) &&
            <Icon
              className={`${icon?.className}`}
              icon={wishlistItem?.isWishlist ? icon?.active : icon?.inactive ?? icon?.general}
            />
          }
        </button>
      }
    </div>  
  );
}