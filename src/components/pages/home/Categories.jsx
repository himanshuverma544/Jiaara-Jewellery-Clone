'use client';

import Image from "next/image";

import { useRef } from 'react';

import { 
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import useVisibleSlides from '@/utils/hooks/pure-react-carousel/useVisibleSlides';


const categories = [
  {
    id: 1,
    categoryName: "Brass",
    image: "/assets/pages/homepage/products/wearing-product/brass.webp",
    imageAlt: "image 1",
    totalProducts: 10
  },

  {
    id: 2,
    categoryName: "Ethnic",
    image: "/assets/pages/homepage/products/wearing-product/ethnic.jpg",
    imageAlt: "image 2",
    totalProducts: 20
  },
  {
    id: 3,
    categoryName: "Oxidised",
    image: "/assets/pages/homepage/products/wearing-product/necklace.jpg",
    imageAlt: "image 3",
    totalProducts: 30
  },
  {
    id: 4,
    categoryName: "Minimalist",
    image: "/assets/pages/homepage/products/wearing-product/minimalist.jpg",
    imageAlt: "image 4",
    totalProducts: 40
  },
  {
    id: 5,
    categoryName: "Indo-Western",
    image: "/assets/pages/homepage/products/wearing-product/indo-western.jpg",
    imageAlt: "image 5",
    totalProducts: 50
  }
];


export default function Categories() {

  const carouselRef = useRef(null);

  const [currentSlide, visibleSlidesCount] = useVisibleSlides({
    carouselRef,
    autoPlayInterval: 5000,
    desktopVisibleSlidesCount: 3,
    tabletVisibleSlidesCount: 2,
    mobileVisibleSlidesCount: 1
  });

  return (
    <section id="shop-by-category" className="flex flex-col items-center justify-center gap-12">

      <h2 className="heading text-center text-4xl uppercase text-primaryFont">
        Shop by Category
      </h2>

      <CarouselProvider
        ref={carouselRef}
        className="carousel w-screen px-3"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        currentSlide={currentSlide}
        visibleSlides={visibleSlidesCount}
        totalSlides={categories.length}
        isPlaying
      >
        <Slider className="categories-slide select-none cursor-grab active:cursor-grabbing">
          {categories.map((category, index) =>
            <Slide
              key={category.id}
              index={index}
              className="mx-[2.5vw]"
              innerClassName="relative"
            >
              <div className="img-cont relative w-full h-[80vw] sm:h-[40vw] lg:h-[25vw]">
                <Image
                  className="object-cover object-center rounded-3xl"
                  fill
                  src={category.image}
                  alt={category.imageAlt}
                />
              </div>
              
              <div className="content absolute bottom-0 w-full flex justify-between uppercase p-5 overlay-black-50 after:rounded-b-3xl text-white">
                <div className="category flex flex-col gap-2 z-10">
                  <div className="category-text text-sm font-semibold">
                    {category.categoryName}
                  </div>
                  <div className="total-products text-xs opacity-50">
                    {`${category.totalProducts} Products`}
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
    </section>
  );
}