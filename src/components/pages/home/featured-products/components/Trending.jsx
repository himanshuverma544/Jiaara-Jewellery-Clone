'use client';

import Image from 'next/image';

import { useRef } from 'react';

import { 
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';

import useVisibleSlides from '@/utils/hooks/pure-react-carousel/useVisibleSlides';


const products = [
  {
    id: 1,
    image: "/assets/pages/homepage/products/only-product/1.webp",
    name: "Pearlime Jewellery",
    price: "9,200.00",
  },
  {
    id: 2,
    image: "/assets/pages/homepage/products/only-product/2.webp",
    name: "Tambina Jewellery",
    price: "6,300.00",
  },
  {
    id: 3,
    image: "/assets/pages/homepage/products/only-product/3.webp",
    name: "Sambina Jewellery",
    price: "7,500.00",
  },
  {
    id: 4,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/1.webp",
    name: "Amalita Earrings Pearl",
    price: "5,200.00",
  },
  {
    id: 5,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/2.webp",
    name: "Bambina Earrings White",
    price: "25,027.99",
  },
  {
    id: 6,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/3.webp",
    name: "Bambina Earrings Green",
    price: "25,027.99",
  },
  {
    id: 7,
    image: "/assets/pages/homepage/sections/3-FeaturedProducts/4.webp",
    name: "Amalita Earrings Green",
    price: "24,457.99",
  }
];


export default function Trending() {

  const carouselRef = useRef(null);

  const autoPlayInterval = 3000;

  const [currentSlide, visibleSlidesCount] = useVisibleSlides({
    carouselRef,
    autoPlayInterval,
    desktopVisibleSlidesCount: 5,
    tabletVisibleSlidesCount: 4,
    mobileVisibleSlidesCount: 2
  });

  return (
    <div className="trending flex flex-col gap-6">
      <h3 className="heading text-center text-2xl uppercase text-primaryFont">
        Trending
      </h3>

      <CarouselProvider
        ref={carouselRef}
        className="carousel w-screen px-3"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        currentSlide={currentSlide}
        visibleSlides={visibleSlidesCount}
        totalSlides={products.length}
        isPlaying
        interval={autoPlayInterval}
      >
        <Slider className="products-slide select-none cursor-grab active:cursor-grabbing">
          {products.map((product, index) =>
            <Slide
              key={product.id}
              index={index}
              className="mx-[2.5vw]"
              innerClassName="flex flex-col gap-3"
            >
              <div className="img-cont relative w-full h-[40vw] sm:h-[20vw] lg:h-[15vw]">
                <Image
                  className="rounded-3xl"
                  fill
                  src={product.image}
                  alt={product.name}
                />
              </div>
              
              <div className="product-details flex flex-col items-center justify-center gap-1 text-center text-xs text-primaryFont">
                <div className="name">
                  {product.name}
                </div>
                <div className="price">
                  {`₹ ${product.price}`}
                </div>
              </div>
            </Slide>
          )}
        </Slider>   
      </CarouselProvider>
    </div>
  );
}
