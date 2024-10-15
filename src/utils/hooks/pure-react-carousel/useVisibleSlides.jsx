import { useState, useEffect } from "react";

import useWindowSize from "../general/useWindowSize";


const useVisibleSlides = ({
  desktopBreakpoint = 1024,
  desktopVisibleSlidesCount = 3,
  tabletBreakpoint = 640,
  tabletVisibleSlidesCount = 2,
  mobileBreakpoint = 0,
  mobileVisibleSlidesCount = 1,
} = {}) => {

  const [visibleSlidesCount, setVisibleSlidesCount] = useState(mobileVisibleSlidesCount);

  const { screenWidth } = useWindowSize();


  useEffect(() => {

    function updateVisibleSlidesCount() {

      if (screenWidth >= desktopBreakpoint) {
        setVisibleSlidesCount(desktopVisibleSlidesCount);
      }
      else if (screenWidth >= tabletBreakpoint) {
        setVisibleSlidesCount(tabletVisibleSlidesCount);
      }
      else if (screenWidth <  tabletBreakpoint) {
        setVisibleSlidesCount(mobileVisibleSlidesCount);
      }
    }

    updateVisibleSlidesCount();
  },
    [
      screenWidth,
      desktopBreakpoint,
      desktopVisibleSlidesCount,
      tabletBreakpoint,
      tabletVisibleSlidesCount,
      mobileBreakpoint,
      mobileVisibleSlidesCount,
      setVisibleSlidesCount
    ]
  );

  return {
    visibleSlidesCount
  };
}

export default useVisibleSlides;