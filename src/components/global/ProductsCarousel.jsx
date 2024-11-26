'use client';

import React from "react";

import { 
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import Product from '@/components/global/Product';

import useVisibleSlides from '@/utils/hooks/pure-react-carousel/useVisibleSlides';


export default function ProductsCarousel({
  
  visibleSlides: { 
    desktop = 5,
    tablet = 4,
    mobile = 2
  } = {},

  className = "",
  headingClassName = "",
  heading = "",

  carousel: {
    isPlaying = false,
    interval = 5000,
    playDirection = "forward"
  } = {},

  sliderClassName = "",
  slideClassName = "",
  slideInnerClassName = "",

  data: {
    products = [],
    productComponent = 
    <Product
      product={null}
      imgContClassName="relative w-full h-[40vw] sm:h-[20vw] lg:h-[15vw]"
      imgClassName="rounded-3xl"
      productDetailsContClassName="text-xs text-primaryFont"
      productNameClassName="uppercase"
      btnTextClassName="rounded-s text-2xs uppercase bg-primaryFont text-white xs:text-xs"
      iconContClassName="text-lg p-2 rounded-e bg-white text-black"
    />
  } = {}
}) {

  const { visibleSlidesCount } = useVisibleSlides({
    desktopVisibleSlidesCount: desktop,
    tabletVisibleSlidesCount: tablet,
    mobileVisibleSlidesCount: mobile
  });

  return (
    <div className={`${className} flex flex-col gap-6`}>
      {heading &&
        <h3 className={`heading ${headingClassName}`}>
          {heading}
        </h3>
      }

      <CarouselProvider
        className="carousel w-screen px-3"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        visibleSlides={visibleSlidesCount}
        totalSlides={products.length}
        isPlaying={isPlaying}
        interval={interval}
        playDirection={playDirection}
      >
        <Slider className={`products-slider ${sliderClassName}`}>
          {products.length > 0 &&
            products.map((product, index) =>
              <Slide
                key={product?.id || index}
                index={index}
                className={`${slideClassName}`}
                innerClassName={`${slideInnerClassName}`}
              >
                {productComponent &&
                  React.cloneElement(productComponent, { product })
                }
              </Slide>
            )
          }
        </Slider>   
      </CarouselProvider>
    </div>
  );
}
