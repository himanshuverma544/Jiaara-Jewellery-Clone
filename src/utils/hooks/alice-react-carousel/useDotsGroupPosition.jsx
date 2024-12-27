'use client';

import { useEffect } from "react";

import useWindowSize from "@/utils/hooks/general/useWindowSize";

/*
* This is unstable version.
* Doesn't works when loaded normally on screen.
* Works on screen resizing.
*/

const useDotsGroupPosition = ({
  carouselNodeRef = null,
  position = {
    global = '0',
    breakpoints = {}
  } = {},
  givenDotsGroupClassName = "ul.alice-carousel__dots"
}) => {

  const { screenWidth, breakpoints } = useWindowSize();

  const getPosition = position => {

    let globalPosition = position?.global || '0';
    let breakpointPosition = position?.breakpoints || {};

    if (typeof position === 'string') {
      globalPosition = position;
    }

    else if (typeof position === 'object') {
      globalPosition = position.global || '0';
      breakpointPosition = position.breakpoints || position;
    }

    const { xxs = {}, xs = {}, sm = {}, md = {}, lg = {}, xl = {}, xxl = {} } = breakpointPosition;

    const settings = [
      { breakpoint: breakpoints.xxs, value: xxs },
      { breakpoint: breakpoints.xs, value: xs },
      { breakpoint: breakpoints.sm, value: sm },
      { breakpoint: breakpoints.md, value: md },
      { breakpoint: breakpoints.lg, value: lg },
      { breakpoint: breakpoints.xl, value: xl },
      { breakpoint: breakpoints.xxl, value: xxl },
      { breakpoint: Infinity, value: globalPosition }
    ];

    let selectedPosition = globalPosition;

    for (let i = 0; i < settings.length; i++) {

      const { breakpoint, value } = settings[i];

      if (screenWidth >= breakpoint && value) {
        selectedPosition = value;
      }
    }

    return selectedPosition;
  }


  useEffect(() => {

    function handlePosition() {

      if (carouselNodeRef?.current) {
        const aliceCarouselDotsNode = carouselNodeRef?.current?.querySelector(givenDotsGroupClassName);
  
        if (aliceCarouselDotsNode) {
          aliceCarouselDotsNode.style.marginTop = getPosition(position);
        }
      }
    }

    handlePosition();

  }, [carouselNodeRef, screenWidth, givenDotsGroupClassName]);
 
  
  return { getPosition };
}


export default useDotsGroupPosition;