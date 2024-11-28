'use client';

import Link from "next/link"
import Image from "next/image";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getCollections } from "@/utils/functions/api/cms/woocommerce/collections";

import Validation from "@/components/general/Validation";

import useWindowSize from "@/utils/hooks/general/useWindowSize";
import isEven from "@/utils/functions/general/isEven";


export default function Collections() {

  const { breakpoints: { md }, screenWidth } = useWindowSize();

  const { data: collections, isLoading, isSuccess } = useQuery({
    queryKey: ['general-collections'],
    queryFn: getCollections
  });
  
  if (isLoading) {
    return (
      <Validation 
        className="w-full h-[10rem] text-primaryFont"
        message="Loading Collections…"
      />
    );
  }

  let pos = 0;
  let rowNum = 1;

  const url = "/collection"

  const collectionsNum = 5; // number of collections per counter
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
                  <div
                    className={`
                      w-full flex flex-wrap justify-between items-center gap-2 px-3 py-3
                      absolute left-0 bottom-0
                      after:rounded-b-xl
                      text-xs font-semibold
                      overlay-black-50 text-white
                      sm:text-sm
                      md:text-base
                    `}
                  >
                    <div className="wrapper flex flex-col gap-1 z-10 uppercase">
                      <div className="name">
                        {collections[pos]?.name}
                      </div>
                      <div className="products-count text-2xs font-normal text-white text-opacity-50 sm:text-xs md:text-sm">
                        {`${collections[pos]?.count} Products`}
                      </div>
                    </div>
                    <Link
                      className="url border px-2 py-1 z-10 rounded-lg"
                      href={`${url}/${collections[pos++]?.id}`}
                    >
                      View
                    </Link>
                  </div>
                </div>
              )}

              <div className={`row-${rowNum++} grid grid-cols-10 gap-2`}>

                {pos < collections.length && (
                  <div
                    className={`
                      collection-${pos + 1} col-1 col-span-4
                      ${isEven(index) ? "order-last" : "order-first"} relative
                    `}
                  >
                    <div className="img-cont relative w-full h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] xl:h-[25vw] 2xl:h-[20vw]">
                      <Image
                        className="object-cover object-center rounded-xl"
                        fill
                        src={collections[pos]?.image}
                        alt={collections[pos]?.slug}
                      />
                    </div>
                    <div
                      className={`
                        w-full flex flex-wrap justify-between items-center gap-2 px-3 py-3
                        absolute left-0 bottom-0
                        after:rounded-b-xl
                        text-xs font-semibold
                        overlay-black-50 text-white
                        sm:text-sm
                        md:text-base
                      `}
                    >
                      <div className="wrapper flex flex-col gap-1 z-10 uppercase">
                        <div className="name">
                          {collections[pos]?.name}
                        </div>
                        <div className="products-count text-2xs font-normal text-white text-opacity-50 sm:text-xs md:text-sm">
                          {`${collections[pos]?.count} Products`}
                        </div>
                      </div>
                      <Link
                        className="url border px-2 py-1 z-10 rounded-lg"
                        href={`${url}/${collections[pos++]?.id}`}
                      >
                        View
                      </Link>
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
                    <div
                      className={`
                        w-full flex flex-wrap justify-between items-center gap-2 px-3 py-3
                        absolute left-0 bottom-0
                        after:rounded-b-xl
                        text-xs font-semibold
                        overlay-black-50 text-white
                        sm:text-sm
                        md:text-base
                      `}
                    >
                      <div className="wrapper flex flex-col gap-1 z-10 uppercase">
                        <div className="name">
                          {collections[pos]?.name}
                        </div>
                        <div className="products-count text-2xs font-normal text-white text-opacity-50 sm:text-xs md:text-sm">
                          {`${collections[pos]?.count} Products`}
                        </div>
                      </div>
                      <Link
                        className="url border px-2 py-1 z-10 rounded-lg"
                        href={`${url}/${collections[pos++]?.id}`}
                      >
                        View
                      </Link>
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
                    <div
                      className={`
                        w-full flex flex-wrap justify-between items-center gap-2 px-3 py-3
                        absolute left-0 bottom-0
                        after:rounded-b-xl
                        text-xs font-semibold
                        overlay-black-50 text-white
                        sm:text-sm
                        md:text-base
                      `}
                    >
                      <div className="wrapper flex flex-col gap-1 z-10 uppercase">
                        <div className="name">
                          {collections[pos]?.name}
                        </div>
                        <div className="products-count text-2xs font-normal text-white text-opacity-50 sm:text-xs md:text-sm">
                          {`${collections[pos]?.count} Products`}
                        </div>
                      </div>
                      <Link
                        className="url border px-2 py-1 z-10 rounded-lg"
                        href={`${url}/${collections[pos++]?.id}`}
                      >
                        View
                      </Link>
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
                    <div
                      className={`
                        w-full flex flex-wrap justify-between items-center gap-2 px-3 py-3
                        absolute left-0 bottom-0
                        after:rounded-b-xl
                        text-xs font-semibold
                        overlay-black-50 text-white
                        sm:text-sm
                        md:text-base
                      `}
                    >
                      <div className="wrapper flex flex-col gap-1 z-10 uppercase">
                        <div className="name">
                          {collections[pos]?.name}
                        </div>
                        <div className="products-count text-2xs font-normal text-white text-opacity-50 sm:text-xs md:text-sm">
                          {`${collections[pos]?.count} Products`}
                        </div>
                      </div>
                      <Link
                        className="url border px-2 py-1 z-10 rounded-lg"
                        href={`${url}/${collections[pos++]?.id}`}
                      >
                        View
                      </Link>
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
                    <div
                      className={`
                        w-full flex flex-wrap justify-between items-center gap-2 px-3 py-3
                        absolute left-0 bottom-0
                        after:rounded-b-xl
                        text-xs font-semibold
                        overlay-black-50 text-white
                        sm:text-sm
                        md:text-base
                      `}
                    >
                      <div className="wrapper flex flex-col gap-1 z-10 uppercase">
                        <div className="name">
                          {collections[pos]?.name}
                        </div>
                        <div className="products-count text-2xs font-normal text-white text-opacity-50 sm:text-xs md:text-sm">
                          {`${collections[pos]?.count} Products`}
                        </div>
                      </div>
                      <Link
                        className="url border px-2 py-1 z-10 rounded-lg"
                        href={`${url}/${collections[pos++]?.id}`}
                      >
                        View
                      </Link>
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
