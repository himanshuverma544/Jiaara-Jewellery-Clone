"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import useReadyEffect from "@/utils/hooks/general/useReadyEffect";


const usePreviousRoute = () => {

  const pathname = usePathname();

  const [previousRoute, setPreviousRoute] = useState(null);


  const saveRoute = (givenPathname = undefined) => {

    if (typeof window !== "undefined") {
      sessionStorage.setItem("previousRoute", givenPathname ?? pathname);
    }
  }

  const removePreviousRoute = () => {

    if (typeof window !== "undefined") {
      sessionStorage.removeItem("previousRoute");
    }
  }

  const isReady = useReadyEffect(() => {

    function retrievePreviousRoute() {

      if (typeof window !== "undefined") {
        const previousRoute = sessionStorage.getItem("previousRoute");

        if (previousRoute && previousRoute !== "null") {
          setPreviousRoute(previousRoute);
        }
      }
    }

    retrievePreviousRoute();
  }, [pathname]);


  return {
    isReady,
    previousRoute,
    saveRoute,
    removePreviousRoute,
  };
};


export default usePreviousRoute;
