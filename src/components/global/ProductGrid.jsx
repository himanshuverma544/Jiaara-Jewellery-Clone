'use client';

import { useContext, memo } from "react";
import { context } from "@/context-API/context";

import Product from "@/components/global/Product";


const ProductGrid = ({
  className = "",
  products = null
}) => {
  
  const { data: { triggered } = {}, data: { states } = {} } = useContext(context) || {};
  const [isSidebarOpen] = triggered ? states?.sidebar || [] : [];

  return (
    <div
      className={`
        product-grid
        flex flex-wrap justify-between items-center gap-x-1 gap-y-10 px-5 py-5
        xs:px-[5vw]
        sm:justify-start sm:gap-x-[3.2vw] md:gap-x-[3vw] sm:px-[4vw] md:px-[3vw]
        ${className}
      `}
    >
      {products.map((product, index) =>
        <Product
          key={index}
          className={`
            w-[87vw]
            2xs:w-[42vw]
            sm:w-[28.5vw]
            md:w-[29.3vw]
            lg:w-[20.9vw]
            ${isSidebarOpen ? "lg:w-[29.8vw] xl:w-[20.6vw]" : "lg:w-[20.9vw]"}
          `}
          imgContClassName={`
            w-full relative
            h-[87vw]
            2xs:h-[42vw]
            sm:h-[28.5vw]
            md:h-[29.3vw]
            ${isSidebarOpen ? "lg:h-[29.8vw] xl:h-[20.6vw]" : "lg:h-[20.9vw]"}
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