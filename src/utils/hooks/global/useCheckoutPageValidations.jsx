'use client';

import { useRouter } from 'next/navigation';

import { useEffect, useCallback, useMemo } from 'react';

import usePreviousRoute from '@/utils/hooks/general/usePreviousRoute';
import useNavigationType from '@/utils/hooks/general/useNavigationType';
import useDebounceEffect from '@/utils/hooks/general/useDebounceEffect';

import useProductUtils from '@/utils/hooks/global/useProductUtils';

import { HOME, PRODUCT } from '@/routes';


const useCheckoutPageValidations = () => {

  const router = useRouter();

  const { isReady: isPreviousRouteReady, previousRoute, removePreviousRoute } = usePreviousRoute();
  const { isReady: isNavigationTypeReady, isPageReload } = useNavigationType();
  

  const {
    cartUtils: { cartItems, clearCart },
    buyNowUtils: { buyNowItem, clearBuyNow }
  }
    = useProductUtils();


  const isProductPageRoute = useMemo(() => {

    if (isPreviousRouteReady) {
      if (previousRoute) {
        return previousRoute?.includes(PRODUCT.getPathname()) ?? false;
      }

      else if (isNavigationTypeReady && isPageReload) {
        let backupPrevRoute = sessionStorage.getItem("checkoutBackupPreviousRoute");
        backupPrevRoute = (backupPrevRoute && backupPrevRoute !== "null") ? backupPrevRoute : null;
        return backupPrevRoute ? backupPrevRoute?.includes(PRODUCT.getPathname()) : false;
      }
    }

    return false;

  }, [isPreviousRouteReady]);


  const isCartItemsPerceptive = () => !isProductPageRoute;
  const isBuyNowItemPerceptive = () => isProductPageRoute;

  
  const validateCartItemsPerceptive = (() => {

    if (isCartItemsPerceptive()) {

      if (buyNowItem?.length > 0) {
        clearBuyNow();
      }

      else if (cartItems?.length <= 0) {
        router.push(HOME.pathname);
      }
    }
  });

  const validateBuyNowItemPerceptive = (() => {

    if (isBuyNowItemPerceptive() && buyNowItem?.length <= 0) {
      router.push(HOME.pathname);
    }
  });


  const validate = useCallback(() => {

    if (isPreviousRouteReady || (isNavigationTypeReady && isPageReload)) {
      validateCartItemsPerceptive();
      validateBuyNowItemPerceptive();
    }
  }, [isPreviousRouteReady, isNavigationTypeReady]);

  useEffect(() => validate(), [validate]);


  useDebounceEffect(cleanUp => {

    const handleBeforeUnload = () => {

      function resetPreviousRoute() {

        if (typeof window !== "undefined") {
          sessionStorage.removeItem("checkoutBackupPreviousRoute");
  
          if (previousRoute) {
            sessionStorage.setItem("checkoutBackupPreviousRoute", previousRoute);
          }
        }
      }

      resetPreviousRoute();
      removePreviousRoute();
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    
    if (cleanUp) {
      return () => {
        removePreviousRoute();
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    }
  }, [previousRoute], 500);


  return {
    currentItems: isBuyNowItemPerceptive() ? buyNowItem : cartItems,
    clearItems: isBuyNowItemPerceptive() ? clearBuyNow : clearCart
  };
}


export default useCheckoutPageValidations;