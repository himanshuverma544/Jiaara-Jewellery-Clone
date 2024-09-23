import Image from "next/image";

import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import Rating from "@/components/general/Rating";

import useClamp from "@/utils/hooks/general/useClamp";


export default function SaleProductCard({ saleProduct }) {  

  const { clamp } = useClamp();

  return (
    <div className="sale-product-card rounded-xl bg-white ">

      <div className="wrapper h-[50vw] max-h-[15rem] flex justify-center items-center">

        <div className="img-cont relative w-1/2 h-[inherit] max-h-[inherit]">
          <Image
            className="object-fill object-center rounded-tl-xl rounded-bl-xl"
            fill
            src={saleProduct.image}
            alt={saleProduct.name}
          />
          <span className="discount-percent absolute top-0 left-0 px-2 py-1 rounded-tl-xl text-xs bg-red-500 text-white">
            {saleProduct.discountPercentage}
          </span>
        </div>

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
          {saleProduct.name}
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
              {`₹. ${saleProduct.discountedPrice}`}
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
              {`₹. ${saleProduct.actualPrice}`}
            </div>
          </div>
          <div className="rating-bar flex items-center gap-3">
            <Rating
              given={4}
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
              {saleProduct.rating}
            </span>
          </div>
        </div>

      </div>

      <div className="actions flex justify-evenly items-center px-[1vw] py-5">
        <button className="add-to-cart flex items-center gap-1 px-2 py-2 rounded bg-primaryLight">
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
        <button className="wishlist flex items-center gap-1 px-2 py-2 rounded bg-primaryLight">
          <IoMdHeartEmpty className="text-lg"/>
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
            Add to Wishlist
          </span>
        </button>
      </div>

    </div>
  );
}