import { useEffect } from "react";


const useDebounceEffect = (callback = () => {}, dependencies = [], delay = 0) => {

  useEffect(() => {

    let cleanUpFn = null;

    const handler = setTimeout(() => {

      if (typeof callback === "function") {
        cleanUpFn = callback(true);
      }
    }, delay);

    return () => {

      clearTimeout(handler);
      if (typeof cleanUpFn === "function") {
        cleanUpFn();
      }
    }
  }, [callback, delay, ...dependencies]);
}


export default useDebounceEffect;
