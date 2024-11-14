'use client';

import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { getCollections } from "@/utils/functions/api/cms/woocommerce/collections";

import useWindowSize from "@/utils/hooks/general/useWindowSize";
import isEven from "@/utils/functions/general/isEven";



export default function Collections() {

  let pos = 0;
  let rowNum = 1;

  const { breakpoints: { md }, screenWidth } = useWindowSize();

  const { data: collections, isSuccess } = useQuery({
    queryKey: ['general-collections'],
    queryFn: getCollections
  });
    
  const collectionsNum = 5; // per counter
  const counter = isSuccess && Math.ceil(collections.length / collectionsNum);
  const rowsLength = isSuccess && (collections.length - (counter * 2));


  return (
    <section id="collections" className="flex flex-col justify-center items-center gap-12">
      <h2 className="heading text-center px-5 text-4xl uppercase text-primaryFont">
        Collections
      </h2>

      {(isSuccess && collections.length > 0) &&
        <div className={`w-full grid grid-rows-${rowsLength} gap-2 px-5 mx-auto sm:px-7 md:px-10 lg:px-12 xl:px-15 2xl:px-17`}>
          {Array.from({ length: counter }).map((_, index) =>

            <React.Fragment key={index}>

              {screenWidth < md && pos < collections.length && (
                <div className={`row-${rowNum++} collection-${pos + 1} relative`}> 
                  <div className="col-1 img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                    <Image
                      className="object-cover object-center rounded-xl"
                      fill
                      src={collections[pos]?.image}
                      alt={collections[pos]?.slug}
                    />
                  </div>
                  <div className="absolute left-0 bottom-0 w-full flex flex-wrap flex-col items-start justify-center gap-1 px-3 py-3 text-xs font-semibold overlay-black-50 after:rounded-b-xl text-white sm:flex-row sm:justify-between sm:items-center sm:text-sm md:text-base">
                    <div className="name ms-0.5 z-10 uppercase">
                      {collections[pos++]?.name}
                    </div>
                    <button className="border px-2 py-1 z-10 rounded-lg">
                      View
                    </button>
                  </div>
                </div>
              )}

              <div className={`row-${rowNum++} grid grid-cols-10 gap-2`}>

                {pos < collections.length && (
                  <div className={`collection-${pos + 1} col-1 col-span-4 ${isEven(index) ? "order-last" : "order-first"} relative`}>
                    <div className="img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                      <Image
                        className="object-cover object-center rounded-xl"
                        fill
                        src={collections[pos]?.image}
                        alt={collections[pos]?.slug}
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full flex flex-wrap flex-col items-start justify-center gap-1 px-3 py-3 text-xs font-semibold overlay-black-50 after:rounded-b-xl text-white sm:flex-row sm:justify-between sm:items-center sm:text-sm md:text-base">
                      <div className="name ms-0.5 z-10 uppercase">
                        {collections[pos++]?.name}
                      </div>
                      <button className="border px-2 py-1 z-10 rounded-lg">
                        View
                      </button>
                    </div>
                  </div>
                )}

                {pos < collections.length && (
                  <div className={`collection-${pos + 1} col-2 col-span-6 relative`}>
                    <div className="img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                      <Image
                        className="object-cover object-center rounded-xl"
                        fill
                        src={collections[pos]?.image}
                        alt={collections[pos]?.slug}
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full flex flex-wrap flex-col items-start justify-center gap-1 px-3 py-3 text-xs font-semibold overlay-black-50 after:rounded-b-xl text-white sm:flex-row sm:justify-between sm:items-center sm:text-sm md:text-base">
                      <div className="name ms-0.5 z-10 uppercase">
                        {collections[pos++]?.name}
                      </div>
                      <button className="border px-2 py-1 z-10 rounded-lg">
                        View
                      </button>
                    </div>
                  </div>
                )}

              </div>

              <div className={`row-${rowNum++} grid grid-cols-12 gap-2 md:grid-cols-11`}>
                
                {pos < collections.length && (
                  <div className={`collection-${pos + 1} col-1 col-span-6 relative md:col-span-3 ${isEven(index) ? "md:order-first" : "md:order-last"}`}>
                    <div className="img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                      <Image
                        className="object-cover object-center rounded-xl"
                        fill
                        src={collections[pos]?.image}
                        alt={collections[pos]?.slug}
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full flex flex-wrap flex-col items-start justify-center gap-1 px-3 py-3 text-xs font-semibold overlay-black-50 after:rounded-b-xl text-white sm:flex-row sm:justify-between sm:items-center sm:text-sm md:text-base">
                      <div className="name ms-0.5 z-10 uppercase">
                        {collections[pos++]?.name}
                      </div>
                      <button className="border px-2 py-1 z-10 rounded-lg">
                        View
                      </button>
                    </div>
                  </div>
                )}

                {pos < collections.length && (
                  <div className={`collection-${pos + 1} col-2 col-span-6 relative md:col-span-4`}>
                    <div className="img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                      <Image
                        className="object-cover object-center rounded-xl"
                        fill
                        src={collections[pos]?.image}
                        alt={collections[pos]?.slug}
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full flex flex-wrap flex-col items-start justify-center gap-1 px-3 py-3 text-xs font-semibold overlay-black-50 after:rounded-b-xl text-white sm:flex-row sm:justify-between sm:items-center sm:text-sm md:text-base">
                      <div className="name ms-0.5 z-10 uppercase">
                        {collections[pos++]?.name}
                      </div>
                      <button className="border px-2 py-1 z-10 rounded-lg">
                        View
                      </button>
                    </div>
                  </div>
                )}

                {screenWidth >= md && pos < collections.length && (
                  <div className={`collection-${pos + 1} col-3 relative md:col-span-4`}>
                    <div className="img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                      <Image
                        className="object-cover object-center rounded-xl"
                        fill
                        src={collections[pos]?.image}
                        alt={collections[pos]?.slug}
                      />
                    </div>
                    <div className="absolute left-0 bottom-0 w-full flex flex-wrap flex-col items-start justify-center gap-1 px-3 py-3 text-xs font-semibold overlay-black-50 after:rounded-b-xl text-white sm:flex-row sm:justify-between sm:items-center sm:text-sm md:text-base">
                      <div className="name ms-0.5 z-10 uppercase">
                        {collections[pos++]?.name}
                      </div>
                      <button className="border px-2 py-1 z-10 rounded-lg">
                        View
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </React.Fragment>
          )}
        </div>
      }
    </section>
  );
}
