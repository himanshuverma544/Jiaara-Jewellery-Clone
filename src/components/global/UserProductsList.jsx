import Image from "next/image";

import INR from "@/utils/functions/INR";

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


export default function UsersProductsList({ className = "" }) {

  return (
    <ul className={`checkout-products-list flex flex-col gap-3 p-[5vw] rounded-lg bg-white ${className}`}>
      {productsList.map(product => 
        <li key={product.id} className="flex justify-between">
          <div className="img-cont relative size-[25vw] max-w-[7rem] max-h-[7rem]">
            <Image
              fill
              className="object-cover border rounded border-tertiaryBackground"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-details w-[40%] flex flex-col gap-1 px-1 text-xs 2xs:text-sm">
            <div className="product-name">
              {product.name}
            </div>
            <div className="quantity">
              {`Qty: ${product.quantity}`}
            </div>
          </div>

          <div className="total-price px-1 text-xs 2xs:text-sm">
            {INR(product.totalPrice)}
          </div>
        </li>  
      )}
    </ul>
  );
}