import { useEffect, useRef } from 'react';


const useUnmountEffect = (callback = () => {}, dependencies = []) => {

  const hasMounted = useRef(false);

  useEffect(() => {

    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    return () => {
      callback();
    }
  }, [callback, ...dependencies]);
}


export default useUnmountEffect;