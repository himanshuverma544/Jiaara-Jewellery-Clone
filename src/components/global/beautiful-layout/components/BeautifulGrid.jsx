'use client';

import React from "react";
import BeautifulCard from "@/components/global/beautiful-layout/components/BeautifulCard";
import isEven from "@/utils/functions/general/isEven";

import useWindowSize from "@/utils/hooks/general/useWindowSize";


export default function BeautifulGrid({ className = "", items = {} }) {

  const { screenWidth, breakpoints: { md } } = useWindowSize();

  let pos = 0;
  const rows = [];

  const { itemsArr, urlsArr } = items;

  const isLast = currPos => !(items[currPos + 1]);
  

  while (pos < itemsArr?.length) {

    rows.push(
      <React.Fragment key={pos}>

        {/* Single card for small screens */}
        {screenWidth < md && (
          <div className={`row-1`}>
            <BeautifulCard
              className="w-full"
              item={itemsArr[pos]}
              url={urlsArr[pos++]}
            />
          </div>
        )}

        {/* Two-card row */}
        {pos < itemsArr.length && (
          <div className="row-2 grid grid-cols-10 gap-2">
            <BeautifulCard
              className={`col-span-4
                ${isEven(pos) ? "order-last" : "order-first"}
              `}
              item={itemsArr[pos]}
              url={urlsArr[pos++]}
            />
            {pos < itemsArr.length && (
              <BeautifulCard
                className="col-span-6"
                item={itemsArr[pos]}
                url={urlsArr[pos++]}
              />
            )}
          </div>
        )}

        {/* Three-card row */}
        {pos < itemsArr.length && (
          <div className="row-3 grid grid-cols-12 gap-2 md:grid-cols-11">
            <BeautifulCard
              className={` md:col-span-3
                ${(!isLast(pos)) ? "col-span-6": "col-span-full"}
                ${isEven(pos) ? "md:order-first" : "md:order-last"}`
              }
              item={itemsArr[pos]}
              url={urlsArr[pos++]}
            />
            {pos < itemsArr.length && (
              <BeautifulCard
                className="col-span-6 md:col-span-4"
                item={itemsArr[pos]}
                url={urlsArr[pos++]}
              />
            )}
            {screenWidth >= md && pos < itemsArr.length && (
              <BeautifulCard
                className="md:col-span-4"
                item={itemsArr[pos]}
                url={urlsArr[pos++]}
              />
            )}
          </div>
        )}
      </React.Fragment>
    );
  }

  return (
    <div className={`${className} grid gap-y-2`}>
      {rows}
    </div>
  );
}