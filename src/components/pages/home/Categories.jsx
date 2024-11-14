'use client';

import Image from "next/image";

import { 
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import { useQuery } from "@tanstack/react-query";

import useVisibleSlides from '@/utils/hooks/pure-react-carousel/useVisibleSlides';

import { getCategories } from "@/utils/functions/api/cms/woocommerce/categories";

import skipMap from "@/utils/functions/general/skipMap";


export default function Categories() {

  const { data: parentCategories, isSuccess } = useQuery({
    queryKey: ['parent-categories'],
    queryFn: () => getCategories({ parent: 0 })
  });

  const { visibleSlidesCount } = useVisibleSlides({
    desktopVisibleSlidesCount: 3,
    tabletVisibleSlidesCount: 2,
    mobileVisibleSlidesCount: 1
  });

  return (
    <section id="shop-by-category" className="flex flex-col items-center justify-center gap-12">

      <h2 className="heading text-center text-4xl uppercase text-primaryFont">
        Shop by Category
      </h2>
    
      {(isSuccess && parentCategories.length > 0) &&
        <CarouselProvider
          className="carousel w-screen px-3"
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight
          visibleSlides={visibleSlidesCount}
          totalSlides={parentCategories.length}
          isPlaying
          interval={3000}
        >
          <Slider className="categories-slide select-none cursor-grab active:cursor-grabbing">
            {skipMap(parentCategories, [{ name: "General" }], (parentCategory, index) =>
              <Slide
                key={parentCategory?.id}
                index={index}
                className="mx-[2.5vw]"
                innerClassName="relative"
              >
                <div className="img-cont relative w-full h-[80vw] sm:h-[40vw] lg:h-[25vw]">
                  <Image
                    className="object-cover object-center rounded-3xl"
                    fill
                    src={parentCategory?.image}
                    alt={parentCategory?.slug}
                  />
                </div>
                
                <div className="content absolute bottom-0 w-full flex justify-between uppercase p-5 overlay-black-50 after:rounded-b-3xl text-white">
                  <div className="category flex flex-col gap-2 z-10">
                    <div className="category-text text-sm font-semibold">
                      {parentCategory?.name}
                    </div>
                    <div className="total-products text-xs opacity-50">
                      {`${parentCategory?.totalProducts} Products`}
                    </div>
                  </div>
                  <button className="z-10 border px-3 py-1 rounded-xl">
                    View All
                  </button>
                </div>
              </Slide>
            )}
          </Slider>   
        </CarouselProvider>
      }
    </section>
  );
}