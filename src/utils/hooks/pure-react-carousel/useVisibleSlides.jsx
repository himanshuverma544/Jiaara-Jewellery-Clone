import { useState, useEffect } from "react";

import useWindowSize from "../general/useWindowSize";


const useVisibleSlides = ({
  carouselRef,
  autoPlayInterval = 1000,
  desktopBreakpoint = 1024,
  desktopVisibleSlidesCount = 3,
  tabletBreakpoint = 640,
  tabletVisibleSlidesCount = 2,
  mobileBreakpoint = 0,
  mobileVisibleSlidesCount = 1,
}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlidesCount, setVisibleSlidesCount] = useState(mobileVisibleSlidesCount);

  const { screenWidth } = useWindowSize();


  useEffect(() => {

    const interval = setInterval(() => {
      if (carouselRef.current) {
        setCurrentSlide(
          carouselRef.current.carouselStore.state.currentSlide
        );
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);

  }, [carouselRef, autoPlayInterval]);


  useEffect(() => {

    const updateCarouselSlide = slidesToBeVisible => {
      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselRef.current.carouselStore.state;

      setVisibleSlidesCount(slidesToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= (totalSlides - visibleSlides) ||
        currentSlide >= (totalSlides - slidesToBeVisible)
      ) {
        setCurrentSlide(totalSlides - slidesToBeVisible);
      }
    };

    if (screenWidth >= desktopBreakpoint) {
      updateCarouselSlide(desktopVisibleSlidesCount);
    }
    else if (screenWidth >= tabletBreakpoint) {
      updateCarouselSlide(tabletVisibleSlidesCount);
    }
    else if (screenWidth <  tabletBreakpoint) {
      updateCarouselSlide(mobileVisibleSlidesCount);
    }
  },
    [
      carouselRef,
      screenWidth,
      desktopBreakpoint,
      desktopVisibleSlidesCount,
      tabletBreakpoint,
      tabletVisibleSlidesCount,
      mobileBreakpoint,
      mobileVisibleSlidesCount,
      setVisibleSlidesCount,
      setCurrentSlide
    ]
  );

  return [currentSlide, visibleSlidesCount];
}

export default useVisibleSlides;