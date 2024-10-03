import "@/styles/pure-react-carousel.css";

import { useState, useRef } from "react";

import { 
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from 'pure-react-carousel';

import { IoMdHeartEmpty } from "react-icons/io";

import Rating from "@/components/general/Rating";
import Media from "@/components/general/Media";

import useWindowSize from "@/utils/hooks/general/useWindowSize";
import useGoToSlide from "@/utils/hooks/pure-react-carousel/useGoToSlide";
import useCurrentSlide from "@/utils/hooks/pure-react-carousel/useCurrentSlide";

import setStatePromptly from "@/utils/functions/setStatePromptly";

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


export default function ProductShowcase() {

  const primaryCarouselRef = useRef(null);
  const secondaryCarouselRef = useRef(null);
  
  const { screenWidth, breakpoints: { lg } } = useWindowSize();

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
  
  
  return (
    <div className="product-showcase flex flex-col items-center justify-center gap-2">
      
      <div className="wrapper w-full flex justify-between items-start gap-5 px-[2vw]">

        <div className="product-overview-upper">
          <h2 className="product-name uppercase">
            {`Jiaara Pure Brass Contemporary Geometric Cuff Bracelet for Women`}
          </h2>

          <div className="wrapper flex items-center gap-3">
            <Rating className="product-rating text-lg" given={4.5}/>
            <div className="reviews-count text-2xs uppercase opacity-50">
              3 Reviews
            </div>
          </div>
        </div>

        <button className="add-to-wishlist-btn">
          <IoMdHeartEmpty className="wishlist-icon text-xl"/>
        </button>
      </div>

      {/* Primary Display Product Carousel */}
      <CarouselProvider
        ref={primaryCarouselRef}
        className="primary-display-product-carousel w-[95vw] relative"
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
            >
              <Media
                imgContClassName="img-cont relative w-full h-[80vw]"
                imgClassName="object-cover object-center rounded-sm"
                videoClassName="w-full h-[80vw] object-fill rounded-sm"
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
        className="secondary-display-product-carousel w-[96vw] flex justify-center items-center"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        visibleSlides={4}
        totalSlides={productMedia.length}
      >
        <Slider className="secondary-product-variations-slider">
          {productMedia.map((singleProductMedia, index) =>
            <Slide
              key={singleProductMedia.id}
              index={index}
              className={`
                mx-[1.8vw]
                ${secondaryCarouselSelectedSlideIndex === index &&
                  "border-[3px] overlay-black-50 border-quaternaryBackground"
                }
              `}
              data-slide-num={index}
              onMouseOver={() => screenWidth >= lg && handleSecondaryCarouselSlide(index)}
              onClick={() => screenWidth < lg && handleSecondaryCarouselSlide(index)}
            >
              <Media
                imgContClassName="img-cont size-[20vw] relative"
                imgClassName="object-cover object-center rounded-sm"
                videoClassName="size-[20vw] object-cover object-center rounded-sm"
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