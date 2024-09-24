import { useRef, useCallback } from 'react';


const useSleep = () => {


  const timeoutRef = useRef(null);


  const sleep = useCallback(duration => {
    
    return new Promise(resolve => {
      timeoutRef.current = setTimeout(() => {
        resolve();
      }, duration);
    });

  }, []);


  const clearSleep = useCallback(() => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

  }, []);


  return { sleep, clearSleep };
};

export default useSleep;