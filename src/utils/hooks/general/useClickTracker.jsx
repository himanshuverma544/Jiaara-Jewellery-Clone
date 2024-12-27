import { useState, useRef } from 'react';


const useClickTracker = ({ threshold = 200 } = {}) => {

  const [clickType, setClickType] = useState('');

  const mouseDownTime = useRef(0);

  const handleMouseDown = () => {
    mouseDownTime.current = Date.now();
  }

  const handleMouseUp = () => {

    const mouseUpTime = Date.now();
    const duration = mouseUpTime - mouseDownTime.current;

    if (duration < threshold) {
      setClickType("instant");
    }
    else {
      setClickType("held");
    }
  }

  return {
    clickType,
    handleMouseUp,
    handleMouseDown
  };
}


export default useClickTracker;