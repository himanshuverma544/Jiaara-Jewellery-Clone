'use client';

import { memo } from "react";

import Product from "@/components/global/Product";


const ProductGrid = ({
  className = "",
  products = null
}) => {
  
  return (
    <div
      className={`
        product-grid
        flex flex-wrap justify-between items-center gap-x-[5vw] gap-y-10 px-5 py-5
        xs:px-[5vw]
        sm:justify-start sm:px-[4vw]
        ${className}
      `}
    >
      {products.map((product, index) =>
        <Product
          key={index}
          className={`
            w-[87vw]
            2xs:w-[42vw]
            sm:w-[27vw]
            lg:w-[18vw]
            2xl:w-[14vw]
          `}
          imgContClassName={`
            w-full relative
            h-[87vw]
            2xs:h-[42vw]
            sm:h-[27vw]
            lg:h-[18vw]
            2xl:h-[14vw]
          `}
          productDetailsContClassName="text-xs text-primaryFont"
          productNameClassName="uppercase"
          btnTextClassName="text-2xs uppercase bg-primaryFont text-white xs:text-xs"
          iconContClassName="text-lg p-2 bg-white text-black"
          product={product}
        />
      )}
    </div>
  );
}


export default memo(ProductGrid);