import { useState, useEffect } from "react";


const useReadyEffect = (callback, dependencies = []) => {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {

    if (!callback) {
      console.error("useReadyEffect: callback is required");
      return;
    }

    async function executeCallback() {
      await callback();
      setIsReady(true);
    }

    executeCallback();

    return () => {
      setIsReady(false);
    }

  }, [callback, ...dependencies]);

  return isReady;
}


export default useReadyEffect;