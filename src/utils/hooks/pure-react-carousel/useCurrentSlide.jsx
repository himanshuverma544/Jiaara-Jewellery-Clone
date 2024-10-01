import { useState, useEffect, useCallback } from 'react';


export default function useCurrentSlide({ carouselRef = null, onSlideChange = undefined }) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const getCurrentSlide = useCallback(() =>
    carouselRef.current.carouselStore.state.currentSlide, [carouselRef]);


  useEffect(() => {

    const theCarouselRef = carouselRef.current;

    if (theCarouselRef) {

      const initialSlide = getCurrentSlide();
      setCurrentSlide(initialSlide);
      
      function trackSlideChange() {

        const newSlide = getCurrentSlide();

        if (newSlide !== currentSlide) {
          setCurrentSlide(newSlide);

          if (onSlideChange) {
            onSlideChange(newSlide);
          }
        }
        else {
          onSlideChange(newSlide);
        }
      }
      
      theCarouselRef.carouselStore.subscribe(trackSlideChange);

      return () =>
        theCarouselRef.carouselStore.unsubscribe(trackSlideChange);
    }
  }, [carouselRef, currentSlide, getCurrentSlide, onSlideChange]);


  return {
    currentSlide,
  };
}
