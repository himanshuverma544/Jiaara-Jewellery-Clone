'use client';

import useLinkActive from "@/utils/hooks/general/useLinkActive";

import { CART, CHECKOUT, ORDER_CONFIRMATION } from "@/routes";


export default function UserProductsStatus({
  className = "",
  titles = [
    {
      name: CART.title,
      url: CART.pathname 
    },
    {
      name: CHECKOUT.title,
      url: CHECKOUT.pathname
    },
    {
      name: ORDER_CONFIRMATION.title,
      url: ORDER_CONFIRMATION.pathname
    }
  ],
  titleClassName = ""
}) {

  const { isLinkActive } = useLinkActive();

  return (
    <div className={`
      user-products-status
      flex flex-wrap justify-center items-center
      ${className}
    `}>
      {titles.map((title, index) =>
        <span
          key={index}
          className={`
            ${titleClassName}
            ${isLinkActive(title.url) &&
              "font-semibold underline underline-offset-[15px] decoration-2"
            }
          `}
        >
          {title.name}
        </span>
      )}
    </div>
  );
}
