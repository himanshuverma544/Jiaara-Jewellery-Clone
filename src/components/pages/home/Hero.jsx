'use client';

import "../../../styles/pure-react-carousel.css";

import Image from "next/image";

import { useRef } from 'react';

import { 
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from 'pure-react-carousel';


import useVisibleSlides from '@/utils/hooks/pure-react-carousel/useVisibleSlides';


const images = [
  {
    id: 1,
    src: "/assets/pages/homepage/products/wearing-product/two-girls.webp",
    alt: "Two Girls"
  },
  {
    id: 2,
    src: "/assets/pages/homepage/products/wearing-product/man-showing-eye.jpg",
    alt: "Man Showing Eye"
  },
  {
    id: 3,
    src: "/assets/pages/homepage/products/wearing-product/necklace.jpg",
    alt: "Necklace"
  }
];


export default function HeroCarousel() { 

  const carouselRef = useRef(null);

  const [currentSlide, visibleSlidesCount] = useVisibleSlides({
    carouselRef,
    autoPlayInterval: 5000,
    desktopVisibleSlidesCount: 1,
    tabletVisibleSlidesCount: 1,
    mobileVisibleSlidesCount: 1
  });

  return (
    <section id="hero">
      <CarouselProvider
        ref={carouselRef}
        className="carousel w-screen relative"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        currentSlide={currentSlide}
        visibleSlides={visibleSlidesCount}
        totalSlides={images.length}
        isPlaying
        lockOnWindowScroll
        touchEnabled={false}
        dragEnabled={false}
      >
        <Slider className="hero-slides">
          {images.map((image, index) =>
            <Slide
              key={image.id}
              index={index}
              className={`
                pt-[37rem]
                relative
                overlay-black-30
                transition-transform duration-[5000ms] ease-in-out
                ${currentSlide === index ? "scale-125" : "scale-100"}
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </Slide>
          )}
        </Slider>
        <div className="content w-[inherit] px-6 py-6 absolute right-1/2 bottom-[10%] translate-x-1/2 flex flex-col items-center justify-center gap-7 text-white lg:gap-10">
          <div className="text text-center lg:text-lg 2xl:text-2xl">
            <p className="leading-loose">
              Crafted from the Heart, for the Heart.<br/>
              Premium Contemporary Handcrafted Pure Brass Jewellery for Modern Women.
            </p>
          </div>
          <button className="carousel-button px-5 py-2 rounded-full text-xs uppercase bg-primaryButton text-primaryFont lg:text-sm xl:text-base">
            Explore
          </button>
          <DotGroup className="dot-group absolute bottom-0"/>
        </div>
      </CarouselProvider>
    </section>
  );
}