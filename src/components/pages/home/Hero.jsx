'use client';

import "../../../styles/pure-react-carousel.css";

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
    <section id="hero-carousel">
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
      >
        <Slider className="hero-slides">
          {images.map((image, index) =>
            <Slide
              key={image.id}
              index={index}
              className={`
                pt-[50%]
                relative
                bg-cover bg-center bg-no-repeat
                overlay-black-30
                transition-transform duration-[5000ms] ease-in-out
                ${currentSlide === index ? "scale-125" : "scale-100"}
              `}
              style={{ backgroundImage: `url('${image.src}')` }}
            >
            </Slide>
          )}
        </Slider>
        <div className="carousel-content w-[inherit] px-6 py-6 absolute right-1/2 bottom-[10%] translate-x-1/2 flex flex-col items-center justify-center gap-7 font-semibold text-white">
          <div className="carousel-text text-center">
            <p>Elegance you can Wear</p>
            <p>Moments you can Cherish</p>
          </div>
          <button className="carousel-button px-5 py-2 rounded-full text-xs uppercase bg-primaryButton text-primaryFont">
            Explore
          </button>
          <DotGroup className="dot-group absolute bottom-0"/>
        </div>
      </CarouselProvider>
    </section>
  );
}