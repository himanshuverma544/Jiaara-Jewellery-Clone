'use client';

import Link from "next/link";
import Image from "next/image";


export default function BeautifulCard({ className = "", item = null, url = "" }) {

  return (
    <div className={`${className} relative`}>
      <div className={`
        img-cont relative
        w-full h-[50vw]
        sm:h-[40vw]
        md:h-[35vw]
        lg:h-[30vw]
        xl:h-[25vw]
        2xl:h-[20vw]
      `}>
        <Image
          className="object-cover object-center rounded-xl"
          fill
          src={item?.image}
          alt={item?.slug}
        />
      </div>

      {(item?.name || item?.count || url) &&
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
          {(item?.name || item?.count) &&
            <div className="wrapper flex flex-col gap-1 z-10 uppercase">
              {item?.name &&
                <div className="name">
                  {item?.name}
                </div>
              }
              {item?.count &&
                <div
                  className={`
                    products-count
                    text-2xs font-normal
                    text-white text-opacity-50
                    sm:text-xs
                    md:text-sm
                  `}
                >
                  {`${item?.count} Products`}
                </div>
              }
            </div>
          }

          {url &&
            <Link
              className="url border px-2 py-1 z-10 rounded-lg"
              href={url}
            >
              View
            </Link>
          }
        </div>
      }
    </div>
  );
}