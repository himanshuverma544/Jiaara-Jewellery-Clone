import "@/styles/pure-react-carousel.css";

import { useState, useRef } from "react";

import { 
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from 'pure-react-carousel';

import Media from "@/components/general/Media";

import useWindowSize from "@/utils/hooks/general/useWindowSize";
import useGoToSlide from "@/utils/hooks/pure-react-carousel/useGoToSlide";
import useCurrentSlide from "@/utils/hooks/pure-react-carousel/useCurrentSlide";
import useRemoveExcessBottomPadding from "@/utils/hooks/pure-react-carousel/useRemoveExcessBottomPadding";

import setStatePromptly from "@/utils/functions/general/setStatePromptly";
import ProductUpperOverview from "./general/ProductUpperOverview";

const productsDir = "/assets/pages/homepage/products";

const productMedia = [
  {
    id: 1,
    url: `${productsDir}/wearing-product/beautiful-girl.jpg`,
  },
  {
    id: 2,
    url: `${productsDir}/wearing-product/brass.webp`,
  },
  {
    id: 3,
    url: `${productsDir}/wearing-product/etch-bracelet.jpg`,
  },
  {
    id: 4,
    url: `${productsDir}/wearing-product/ethnic.jpg`,
  },
  {
    id: 5,
    url: `${productsDir}/wearing-product/heart_pearl_hoops.webp`,
  },
  {
    id: 6,
    url: `${productsDir}/wearing-product/indo-western.jpg`,
  },
  {
    id: 7,
    url: `${productsDir}/wearing-product/jewellery-in-hand.jpg`,
  },
  {
    id: 8,
    url: `${productsDir}/wearing-product/man-showing-eye.jpg`,
  },
  {
    id: 9,
    url: `${productsDir}/wearing-product/men-neck-jewellery.webp`,
  },
  {
    id: 10,
    url: `${productsDir}/wearing-product/minimalist.jpg`,
  },
  {
    id: 11,
    url: `${productsDir}/wearing-product/necklace.jpg`,
  },
  {
    id: 12,
    url: `${productsDir}/wearing-product/ring-in-finger.webp`,
  },
  {
    id: 13,
    url: `${productsDir}/wearing-product/two-girls.webp`,
  },
  {
    id: 14,
    url: `${productsDir}/videos/1.mp4`
  },
  {
    id: 15,
    url: `${productsDir}/videos/2.mp4`
  },
  {
    id: 16,
    url: `${productsDir}/videos/3.mp4`
  }
];

//TODO: Just below tablet screen size, secondary carousel turns into vertical orientation.

export default function ProductShowcase() {

  const primaryCarouselRef = useRef(null);
  const secondaryCarouselRef = useRef(null);

  const currContRef = useRef(null);
  
  const { screenWidth, breakpoints: { md } } = useWindowSize();

  const { goToSlide } = useGoToSlide();

  useCurrentSlide({ 
    carouselRef: primaryCarouselRef,
    onSlideChange: onPrimarySlideChange
  });

  const [
    secondaryCarouselSelectedSlideIndex,
    setSecondaryCarouselSelectedSlideIndex
  ] = useState(undefined);

  const [preventSecondarySlide, setPreventSecondarySlide] = useState(false);
  
  const { 
    sliderTrayWrapClassName,
    carouselSlidePaddingBottom: secondaryCarouselSlidePaddingBottom
  }
   = useRemoveExcessBottomPadding({
    carouselParentNodeRef: currContRef,
    sliderTrayWrapClassName: "secondary-display-product-carousel",
    paddingBottom: screenWidth < md ? "0%" : "470%"
  });


  function onPrimarySlideChange(primarySlideIndex) {

    setSecondaryCarouselSelectedSlideIndex(primarySlideIndex);

    if(preventSecondarySlide) {
      setPreventSecondarySlide(false);
    }
    else {
      goToSlide({
        carouselRef: secondaryCarouselRef,
        slideIndex: primarySlideIndex
      });
    }
  }

  const handleSecondaryCarouselSlide = async slideIndex => {

    await setStatePromptly(setPreventSecondarySlide, true);

    setSecondaryCarouselSelectedSlideIndex(slideIndex);
    goToSlide({
      carouselRef: primaryCarouselRef,
      slideIndex
    });
  };
  
  const applySecondaryCarouselSlideSelection = slideIndex => {

    if (secondaryCarouselSelectedSlideIndex === slideIndex) {
      return "border-[3px] overlay-black-50 border-quaternaryBackground";
    }
  }

  const handleSecondaryCarouselSlidePaddingBottom = () => {

    if (screenWidth >= md) {
      return { paddingBottom: secondaryCarouselSlidePaddingBottom };
    }
    return {};
  }
  
  return (
    <div
      ref={currContRef}
      className="product-showcase flex flex-col items-center justify-center gap-2 md:flex-row-reverse md:items-start"
    >
      {screenWidth < md &&
        <ProductUpperOverview className="w-full flex justify-between items-start gap-5 px-[4vw]"/>
      }

      {/* Primary Display Product Carousel */}
      <CarouselProvider
        ref={primaryCarouselRef}
        className="primary-display-product-carousel w-[95vw] relative md:w-[40vw] lg:w-[24rem]"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        visibleSlides={1}
        totalSlides={productMedia.length}
      >
        <Slider className="primary-product-variations-slider">
          {productMedia.map((singleProductMedia, index) =>
            <Slide
              key={singleProductMedia.id}
              index={index}
              className="mx-[1.25vw]"
              data-slide-num={index}
              innerClassName="md:h-[23rem]"
            >
              <Media
                imgContClassName="img-cont relative w-full h-[80vw] md:h-[inherit]"
                imgClassName="object-cover object-center rounded"
                videoClassName="w-full h-[80vw] object-fill rounded-sm md:h-[inherit]"
                src={singleProductMedia.url}
                alt={singleProductMedia.id}
              />
            </Slide>
          )}
        </Slider>
        <div className="primary-dots-cont w-full absolute flex flex-wrap justify-center items-center bottom-0">
          <DotGroup className="dot-group mb-3"/>
        </div>
      </CarouselProvider>


      {/* Secondary Display Product Carousel */}
      <CarouselProvider
        ref={secondaryCarouselRef}
        className="secondary-display-product-carousel w-[96vw] flex justify-center items-center md:w-auto"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={screenWidth < md}
        visibleSlides={4}
        totalSlides={productMedia.length}
        orientation={screenWidth < md ? "horizontal" : "vertical"}
      >
        <Slider
          className="secondary-product-variations-slider"
          classNameTrayWrap={sliderTrayWrapClassName}
          classNameTray={`
            slider-tray
            ${screenWidth >= md && "flex flex-col items-center justify-center gap-2"}
          `}
        >
          {productMedia.map((singleProductMedia, index) =>
            <Slide
              key={singleProductMedia.id}
              index={index}
              className={`
                mx-[1.8vw]
                md:size-[4.9rem]
                md:mx-0
                ${applySecondaryCarouselSlideSelection(index)}
              `}
              style={handleSecondaryCarouselSlidePaddingBottom}
              data-slide-num={index}
              onClick={() => handleSecondaryCarouselSlide(index)}
            >
              <Media
                imgContClassName="img-cont size-[20vw] relative md:size-[4.5rem]"
                imgClassName="object-cover object-center rounded-sm"
                videoClassName="size-[20vw] object-cover object-center rounded-sm md:size-[4.5rem]"
                src={singleProductMedia.url}
                alt={singleProductMedia.id}
              />
            </Slide>
          )}
        </Slider>          
      </CarouselProvider>
    </div>
  );
}