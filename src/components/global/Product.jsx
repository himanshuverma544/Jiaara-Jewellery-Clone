import Image from "next/image";

import { IoMdHeartEmpty } from "react-icons/io";

import Icon from "@/components/general/Icon";


export default function Product({
  product,
  imgContClassName,
  imgClassName,
  productDetailsContClassName,
  productNameClassName,
  productPriceClassName,
  btnClassName,
  btnTextClassName,
  btnText = "Add to Cart",
  iconContClassName,
  icon = <IoMdHeartEmpty/>
}) {

  return (
    <div className="product-cont flex flex-col items-center justify-center gap-3">
      {product.image &&
        <div className={`img-cont ${imgContClassName}`}>
          <Image
            className={imgClassName}
            fill
            src={product.image}
            alt={product.name}
          />
        </div>
      }
      
      {(product.name || product.price) &&
        <div className={`product-details flex flex-col items-center justify-center gap-1 text-center ${productDetailsContClassName}`}>
          {product.name &&
            <div className={`name ${productNameClassName}`}>
              {product.name}
            </div>
          }
          {product.price &&
            <div className={`price ${productPriceClassName}`}>
              {`₹ ${product.price}`}
            </div>
          }
        </div>
      }

      {(btnText || icon) &&
        <button className={`add-to-cart-btn w-[97%] flex justify-center items-center ${btnClassName}`}>
          {btnText &&
            <span className={`btn-text w-[80%] py-2 ${btnTextClassName}`}>
              {btnText}
            </span>
          }
          {icon &&
            <div className={`wishlist-icon-cont ${iconContClassName}`}>
              <Icon className="wishlist-icon" icon={icon}/>
            </div>
          }
        </button>
      }
    </div>
  );
}
