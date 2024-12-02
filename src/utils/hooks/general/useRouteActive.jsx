import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';


const useRouteActive = ({ href = "" } = {}) => {
  
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();


  const isRouteActive = useCallback((href = "") => {

    return (pathname === href);
  }, [pathname]);


  useEffect(() => {

    if(isRouteActive(href)) {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  }, [href, isRouteActive]);


  return {
    activeRoute: pathname,
    isActive,
    isRouteActive
  };
}

export default useRouteActive;