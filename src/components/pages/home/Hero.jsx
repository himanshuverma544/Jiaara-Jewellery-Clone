'use client';

import "../../../styles/pure-react-carousel.css";

import Image from "next/image";

import { useEffect, useRef, useContext } from 'react';

import { 
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from 'pure-react-carousel';

import { context } from "../../../context-API/context";
import { storeData } from "../../../context-API/actions/action.creators";

import useIntersectionObserver from "@/utils/hooks/general/useIntersectionObserver";
import useVisibleSlides from "@/utils/hooks/pure-react-carousel/useVisibleSlides";


const images = [
  {
    id: 1,
    src: "/assets/pages/homepage/cover-images/beautiful-girl.jpg",
    alt: "Beautiful Girl Wearing Jewellery"
  },

  {
    id: 2,
    src: "/assets/pages/homepage/cover-images/indo-western.jpg",
    alt: "Indo Western"
  },
  {
    id: 3,
    src: "/assets/pages/homepage/cover-images/polki.jpg",
    alt: "Polki"
  }
];


export default function HeroCarousel() { 

  const sectionRef = useRef(null);
  
  const carouselRef = useRef(null);

  const { dispatch } = useContext(context);

  const isHeroSecVisible = useIntersectionObserver({ sectionRef });
  
  const [currentSlide, visibleSlidesCount] = useVisibleSlides({
    carouselRef,
    autoPlayInterval: 5000,
    desktopVisibleSlidesCount: 1,
    tabletVisibleSlidesCount: 1,
    mobileVisibleSlidesCount: 1
  });


  useEffect(() => {

    function storeComponentData() {
      dispatch(storeData({ isHeroSecVisible }, "states"));
    }
    storeComponentData();

  }, [isHeroSecVisible, dispatch]);
   

  return (
    <section id="hero" ref={sectionRef}>
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
                overlay-black-30
                transition-transform duration-[5000ms] ease-in-out
                ${currentSlide === index ? "scale-125" : "scale-100"}
              `}
            >
              <div className="image-cont size-full">
                <Image
                  className="static object-cover object-center"
                  fill
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </Slide>
          )}
        </Slider>
        <div className={`
          content
          w-full px-6 py-6
          absolute right-1/2 bottom-[10%] translate-x-1/2
          flex flex-col items-center justify-center gap-7
          select-none
          text-white
          lg:gap-10
        `}>
          <div className="text text-center lg:text-lg 2xl:text-2xl">
            <p className="leading-loose">
              Crafted from the Heart, for the Heart.<br/>
              Premium Contemporary Handcrafted Pure Brass Jewellery for Modern Women.
            </p>
          </div>
          <button className={`
            carousel-button
            px-5 py-2
            rounded-xl
            text-xs uppercase
            bg-primaryButton
            text-primaryFont
            lg:text-sm
            xl:text-base
          `}>
            Explore
          </button>
          <DotGroup className="dot-group absolute bottom-0"/>
        </div>
      </CarouselProvider>
    </section>
  );
}