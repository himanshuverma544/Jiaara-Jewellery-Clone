'use client';

import { useState, useEffect, memo } from "react";

import Product from "@/components/global/Product";


const ProductGrid = ({
  className = "",
  products = null,
  currentId = undefined,
  lastRemoveId = undefined,
  length = 0
}) => {

  const [productsMap, setProductsMap] = useState(new Map());

  console.log(currentId, products);
  
  useEffect(() => {

    if (length >= 0 && currentId !== undefined) {
      
      setProductsMap(prevMap => {

        const updatedMap = new Map(prevMap);

        if (updatedMap.has(null)) {
          updatedMap.delete(null);
        }

        updatedMap.set(currentId, {currentId, products});
        return updatedMap;
      });

    }

    else if (lastRemoveId) {

      setProductsMap(prevMap => {
        const updatedMap = new Map(prevMap);
        updatedMap.delete(lastRemoveId);
        return updatedMap;
      });


      if (length <= 0) {

      } 
    }
  }, [products, currentId, lastRemoveId, length]);


  let finalProductsArr = Array.from(productsMap.values()).flat() || [];
  finalProductsArr = length <= 0 ? finalProductsArr : finalProductsArr.reverse();
  
  
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
      {/* {console.log(Array.from(productsMap.values()))} */}
      {finalProductsArr?.map((product, index) =>
        <Product
          key={index}
          className={`
            w-[87vw]
            2xs:w-[42vw] 
            sm:w-[27vw]
            md:w-[19vw]
            xl:w-[14vw]
            2xl:w-[11vw]
          `}
          imgContClassName={`
            w-full relative
            h-[87vw]
            2xs:h-[42vw]
            sm:h-[27vw]
            md:h-[19vw]
            xl:h-[14vw]
            2xl:h-[11vw]
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