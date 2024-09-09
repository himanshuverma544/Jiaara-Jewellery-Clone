import { useState, useEffect } from "react";


export default function useIntersectionObserver({ sectionRef = null} ) {

  
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  
  useEffect(() => {

    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
          }
          else {
            setIsSectionVisible(false);
          }
        });
      },
      { threshold: 0.1 }  // Adjust this based on when you want the effect to trigger
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [sectionRef]);  

  return isSectionVisible;
}
