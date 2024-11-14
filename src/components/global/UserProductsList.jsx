import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";

import Icon from "@/components/general/Icon";

import INR from "@/utils/functions/general/INR";

const dirPath = "/assets/pages/homepage/products/only-product";

const productsList = [
  {
    id: 1,
    image: `${dirPath}/1.webp`,
    name: "Etch Chain Bracelet",
    color: "Gold",
    quantity: 1,
    totalPrice: "5000"
  },
  {
    id: 2,
    image: `${dirPath}/2.webp`,
    name: "Heart Pearls Hoops",
    color: "Silver",
    quantity: 2,
    totalPrice: 6300
  },
  {
    id: 3,
    image: `${dirPath}/3.webp`,
    name: "Dangbury Ring",
    color: "Diamond",
    totalPrice: 7500,
    quantity: 3,
  }
];

const Component = Icon;

export default function UserProductsList({
  theClassName = "",
  context = {
    isCart: false,
    isCheckout: false
  },
  rowClassName = "",
  dividerClassName = "",
  divider = false,
  productImageContClassName = "",
  productImageClassName = "",
  productDetailsClassName = "",
  productQuantityComponent = <></>,
  productRemoveButtonClassName = ""
}) {

  const TotalPrice = ({ className = "", amount = 0 }) => {
    return (
      <div className={className}>
        {INR(amount)}
      </div>
    );
  };


  return (
    <ul className={`${theClassName} flex flex-col gap-3`}>

      {productsList.map((product, index) =>
        <>
          <li
            key={product.id}
            className={`row-${index + 1} ${rowClassName}`}
          >
            <div className={`img-cont relative ${productImageContClassName}`}>
              <Image
                fill
                className={`object-cover ${productImageClassName}`}
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className={`product-details ${productDetailsClassName}`}>
              <div className="product-name font-semibold">
                {product.name}
              </div>
              
              {context.isCheckout &&
                <div className="quantity">
                  {`Qty: ${product.quantity}`}
                </div>
              }
              {context.isCart && 
                <TotalPrice
                  className="total-price mt-1"
                  amount={product.totalPrice}
                />
              }
            </div>

            {context.isCheckout &&
              <TotalPrice
                className="total-price px-1 text-xs 2xs:text-sm"
                amount={product.totalPrice}
              />
            }

            {context.isCart &&
              <Component icon={productQuantityComponent}/>
            }

            {context.isCart &&
              <button className={`remove-btn ${productRemoveButtonClassName}`}>
                <IoCloseOutline className="cross-icon"/>
              </button>
            }
          </li>
          {divider && productsList.length - 1 !== index &&
            <li>
              <hr className={`divider ${dividerClassName}`}/>
            </li>
          }
        </>
      )}
    </ul>
  );
}