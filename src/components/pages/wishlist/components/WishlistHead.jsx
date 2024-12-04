import { useDispatch } from "react-redux";
import { wishlist } from "@/redux/slices/wishlist"

import { RiDeleteBin6Line } from "react-icons/ri";


export default function WishlistHead({ className = "", wishlistItemsCount = 0 }) {

  const dispatch = useDispatch();

  const clearWishlist = () =>
    dispatch(wishlist.clear());

  return (
    <div className={`${className} wishlist-head flex justify-between items-center px-5 pt-10 pb-2 xs:px-[5vw] sm:px-[4vw]`}>
      <div className="heading flex gap-3 uppercase font-semibold text-primaryFont md:text-lg">
        <span className="heading-text">
          Your Wishlist
        </span>
        <span className="total-wishlist-items capitalize">
          {wishlistItemsCount <= 1 ? `(${wishlistItemsCount} item)` : `(${wishlistItemsCount} items)`}
        </span>
      </div>
      <div className="actions flex items-center gap-5 text-lg text-primaryFont md:text-xl">
        <button className="icon-cont" onClick={clearWishlist}>
          <RiDeleteBin6Line/>
        </button>
      </div>
    </div>
  );
}
