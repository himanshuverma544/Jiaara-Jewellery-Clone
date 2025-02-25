import { useState, useEffect, useRef } from 'react';


export default function useSidebarUtils({ defaultState = false } = {}) {

  const [isOpen, setIsOpen] = useState(defaultState);
  const innerRef = useRef(null);


  const handleClickOutside = event => {
    if (innerRef.current && !innerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscapePress = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {

    const sidebarContNode = document.querySelector('.sidebar-cont');

    if (isOpen) {
      sidebarContNode.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapePress);
    }
    return () => {
      sidebarContNode.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen]);

  return ({
    sidebarState: [isOpen, setIsOpen],
    innerRef
  });
}