import { useEffect } from "react";

import useWindowSize from "../general/useWindowSize";
import useSleep from "../general/useSleep";


export default function useRemoveExcessBottomPadding({
  carouselParentNodeRef = null,
  sliderTrayWrapClassName = "",
  paddingBottom = 0,
  sleepTimeMs = 100
}) {

  sliderTrayWrapClassName = `${sliderTrayWrapClassName}-carousel-tray-wrapper`;
  
  const { screenWidth } = useWindowSize();

  const { sleep, clearSleep } = useSleep();


  useEffect(() => {

    const removeExcessBottomPadding = () => {
      
      const carouselTrayWrapperNode = carouselParentNodeRef.current?.querySelector(`.${sliderTrayWrapClassName}`);
      
      if (carouselTrayWrapperNode) {
        carouselTrayWrapperNode.style.paddingBottom = paddingBottom;
      }
    };
  
    const handlePaddingAdjustment = async () => {
      
      await sleep(sleepTimeMs);
      removeExcessBottomPadding();
    };
  
    handlePaddingAdjustment();

    return () => clearSleep();

  }, [
      carouselParentNodeRef,
      sliderTrayWrapClassName,
      paddingBottom,
      screenWidth,
      sleepTimeMs,
      sleep,
      clearSleep
    ]
  );

  return {
    sliderTrayWrapClassName,
    carouselSlidePaddingBottom: 0
  };
}