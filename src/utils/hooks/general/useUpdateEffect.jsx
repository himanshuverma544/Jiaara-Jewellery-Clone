import { useEffect, useRef } from "react";


const useUpdateEffect = (callback = () => {}, dependencies = [], startAfterRender = 1, skipChangesTill = 0) => {

  const renderCount = useRef(0);
  const changeCount = useRef(0);

  useEffect(() => {

    renderCount.current += 1;

    if (renderCount.current <= startAfterRender) {
      return;
    }

    if (changeCount.current < skipChangesTill) {
      changeCount.current += 1;
      return;
    }

    let cleanUpFn = callback(true);

    return () => {
      if (typeof cleanUpFn === "function") {
        cleanUpFn();
      }
    }

  }, [...dependencies]);
}


export default useUpdateEffect;