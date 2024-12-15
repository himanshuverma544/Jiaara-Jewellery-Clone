import Link from "next/link";
import Image from "next/image";

import { IoCartOutline } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";

import Rating from "@/components/general/Rating";
import Icon from "@/components/general/Icon";

import ProductQuantity from "@/components/global/ProductQuantity";

import useClamp from "@/utils/hooks/general/useClamp";
import useTruncateText from "@/utils/hooks/general/useTruncateText";

import useProductUtils from "@/utils/hooks/global/useProductUtils";

import INR from "@/utils/functions/general/INR";

import { PRODUCT, WISHLIST } from "@/routes";


const STOCK_LEFT_FALLBACK_VALUE = 15;


export default function SaleProductCard({
  product,
  icon = {
    className: "text-lg",
    active: WISHLIST?.activeIcon,
    inactive: WISHLIST?.inactiveIcon,
    general: <></>
  }
}) {  

  const { clamp } = useClamp();

  const { displayText: productName } = useTruncateText({ text: product?.name, wordLimit: 4 });

  const {
    cartUtils: { cartItem, addToCart },
    wishlistUtils: { wishlistItem, handleWishlist}
  }
    = useProductUtils(product);

  return (
    <div className="sale-product-card rounded-sm bg-white ">

      <div className="wrapper h-[50vw] max-h-[15rem] flex justify-center items-center">

        <Link
          className="img-cont relative w-1/2 h-[inherit] max-h-[inherit]"
          href={PRODUCT?.getPathname(product?.id)}
        >
          <Image
            className="object-fill object-center rounded-tl-xl"
            fill
            src={product?.image}
            alt={product?.slug}
          />
          <span className="discount-percent absolute top-0 left-0 px-2 py-1 text-xs rounded-tl-sm bg-red-500 text-white">
            {product?.discountPercentage}
          </span>
        </Link>

        <div className="content w-1/2 flex flex-col items-center justify-center gap-3 pt-5 ps-3 pe-5">
        <div
          className="name text-center font-semibold"
          style={{ fontSize: 
            clamp({
              xs: { min: 1, current: 5, max: 1.3 },
              sm: { min: 1, current: 2.1, max: 1.1 },
              lg: { min: 1, current: 1.35, max: 1.1 }
            })
          }}
        >
          {productName}
        </div>

          <div className="price flex flex-col gap-1">
            <div
              className="discounted-price"
              style={{ fontSize:
                clamp({
                  xs: { min: 0.875, current: 4.5, max: 1.1 },
                  sm: { min: 0.875, current: 2.1, max: 1 },
                  lg: { min: 0.875, current: 1.35, max: 1 }
                })
              }}
            >
              {INR(product?.salePrice)}
            </div>
            <div
              className="actual-price line-through opacity-50"
              style={{ fontSize:
                clamp({
                  xs: { min: 0.875, current: 4.5, max: 1.1 },
                  sm: { min: 0.875, current: 2.1, max: 1 },
                  lg: { min: 0.875, current: 1.35, max: 1 }
                })
              }}
            >
              {INR(product?.regularPrice)}
            </div>
          </div>
          <div className="rating-bar flex items-center gap-3">
            <Rating
              given={product?.rating}
              style={{ fontSize:
                clamp({
                  xs: { min: 0.875, current: 4.5, max: 1.1 },
                  sm: { min: 1, current: 2.1, max: 1.5 },
                  lg: { min: 1, current: 1.35, max: 1.5 }
                })
              }}
            />
            <span
              className="numeric-rating"
              style={{ fontSize: 
                clamp({
                  xs: { min: 0.73, current: 2.1, max: 1 },
                  sm: { min: 0.73, current: 1.5, max: 1 },
                  lg: { min: 0.73, current: 1, max: 1 }
                })
              }}
            >
              {product?.rating}
            </span>
          </div>
        </div>

      </div>

      <div className="actions flex justify-between items-center px-[1.2vw] py-5">
        {!cartItem ?
          <button
            className="add-to-cart flex items-center gap-1 px-2 py-2 bg-primaryFont text-white"
            onClick={addToCart}
          >
            <IoCartOutline className="text-lg"/>
            <span
              className="uppercase"
              style={{ fontSize:
                clamp({
                  xs: { min: 0.65, current: 2.5, max: 0.85 },
                  sm: { min: 0.3, current: 1.5, max: 0.85 },
                  lg: { min: 0.3, current: 1, max: 0.8 }
                })
              }}
            >
              Add to Cart
            </span>
          </button>
          :
          <ProductQuantity
            productId={cartItem?.id}
            theClassName="h-[2rem] flex items-stretch ms-1 rounded-sm bg-primaryFont xs:ms-0"
            inputClassName="w-[1.5rem] px-2 py-1 outline-none text-center text-xs input-selection-primaryFont focus:ring-1 hover:ring-1 focus:ring-primaryFont hover:ring-secondaryBackground xs:w-[3rem] xs:text-base sm:px-3 sm:py-2"
            buttonsClassName="px-2 py-2 text-xs text-white xs:text-sm sm:px-3 sm:py-2 sm:text-base"
            incrementIcon={FiPlus}
            decrementIcon={FiMinus}
            cartQtyCount={cartItem?.cartQtyCount}
            stockLeft={
              product?.stockQuantity ? product?.stockQuantity : STOCK_LEFT_FALLBACK_VALUE
            }
          />
        }
        <button
          className="wishlist flex items-center gap-1 px-2 py-2 bg-primaryFont text-white"
          onClick={handleWishlist}
        >
          {(icon?.general || icon?.active || icon?.inactive) &&
            <Icon
              className={`${icon?.className}`}
              icon={wishlistItem?.isWishlist ? icon?.active : icon?.inactive ?? icon?.general}
            />
          }
          <span
            className="text-xs uppercase"
            style={{
              fontSize: clamp({
                xs: { min: 0.65, current: 2.5, max: 0.85 },
                sm: { min: 0.3, current: 1.5, max: 0.85 },
                lg: { min: 0.3, current: 1, max: 0.8 }
              })
            }}
          >
            {!wishlistItem?.isWishlist ? "Add to Wishlist" : "Added to Wishlist"}
          </span>
        </button>
      </div>
    </div>
  );
}