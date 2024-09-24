import { useEffect } from "react";

import useWindowSize from "../general/useWindowSize";
import useSleep from "../general/useSleep";


export default function useRemoveExcessBottomPadding({
  currSecRef = null,
  nodeClassName = "carousel-tray-wrapper",
  paddingBottom = 0,
  sleepTimeMs = 100
}) {

  const { screenWidth } = useWindowSize();

  const { sleep, clearSleep } = useSleep();


  useEffect(() => {

    const removeExcessBottomPadding = () => {
      
      const carouselTrayWrapperNode = currSecRef.current?.querySelector(`.${nodeClassName}`);
      
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

  }, [currSecRef, nodeClassName, paddingBottom, screenWidth, sleepTimeMs, sleep, clearSleep]);

  return {
    nodeClassName,
  };
}