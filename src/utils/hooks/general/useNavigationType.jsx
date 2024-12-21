"use client";

import { useState } from "react";

import useReadyEffect from "@/utils/hooks/general/useReadyEffect";


const useNavigationType = () => {

  const [isPageReload, setIsPageReload] = useState(false);
  const [isDirectAccess, setIsDirectAccess] = useState(false);
  const [isGeneralAccess, setIsGeneralAccess] = useState(false);


  const isReady = useReadyEffect(() => {

    function checkNavigationType() {
  
      const navigationEntries = performance.getEntriesByType("navigation");
  
      if (navigationEntries && navigationEntries.length > 0) {
  
        const navigationType = navigationEntries[0].type;
        
        if (navigationType === "reload") {
          setIsPageReload(true);
        }
        
        else if (navigationType === "navigate" && !document.referrer) {
          setIsDirectAccess(true);
        }

        else if (navigationType === "navigate") {
          setIsGeneralAccess(true);
        }
      }
    }
  
    checkNavigationType();
  }, []);

  
  return {
    isReady,
    isPageReload,
    isDirectAccess,
    isGeneralAccess
  };
}


export default useNavigationType;