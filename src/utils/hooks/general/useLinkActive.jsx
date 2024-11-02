import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';


const useLinkActive = ({ href = "" } = {}) => {
  
  const [isActive, setIsActive] = useState(false);

  const pathname = usePathname();


  const isLinkActive = useCallback((href = "") => {

    return (pathname === href);
  }, [pathname]);


  useEffect(() => {

    if(isLinkActive(href)) {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  }, [href, isLinkActive]);


  return {
    isActive,
    isLinkActive
  };
}

export default useLinkActive;