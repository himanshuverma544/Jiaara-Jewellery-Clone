import { useState, useEffect } from "react";


const defaultBreakpoints = {
  xxl: 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640
};


const useWindowSize = (customBreakpoints = {}) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { 
    breakpoints,
    screenWidth
  };
};

export default useWindowSize;