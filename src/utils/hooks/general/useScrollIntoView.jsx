import { useRef, useEffect, useCallback } from "react";


const useScrollIntoView = ({ behavior = "auto", block = "start", mode = "auto" }) => {

  const scrollRef = useRef(null);

  const scrollIntoView = useCallback(() => {
    
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior,
        block
      });
    }
  }, [behavior, block]);


  useEffect(() => {
    if (mode === "auto") {
      scrollIntoView();
    }
  }, [mode, scrollIntoView]);


  return {
    scrollRef,
    scrollIntoView
  };
}

export default useScrollIntoView;