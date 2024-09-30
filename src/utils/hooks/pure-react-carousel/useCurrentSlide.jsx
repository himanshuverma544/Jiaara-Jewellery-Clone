import { useState, useEffect, useCallback } from 'react';


export default function useCurrentSlide({ carouselRef, autoPlayInterval = 0 }) {

  const [currentSlide, setCurrentSlide] = useState(0);


  const getCurrentSlide = useCallback(() => {
    return carouselRef.current.carouselStore.state.currentSlide;
  }, [carouselRef]);

 
  useEffect(() => {

    if (autoPlayInterval) {

      const interval = setInterval(() => {
        
        if (carouselRef.current) {
          setCurrentSlide(
            carouselRef.current.carouselStore.state.currentSlide
          );
        }
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [carouselRef, autoPlayInterval]);


  return {
    currentSlide,
    getCurrentSlide
  };
}
