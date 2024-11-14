import { useEffect } from 'react';


export default function useHideWarnings({ keywords = [] }) {

  useEffect(() => {

    if (process.env.NODE_ENV === "development") {

      const originalWarn = console.warn;

      console.warn = (message, ...args) => {
        
        for (const keyword of keywords) {
          if (message.includes(keyword)) {
            return;
          }
        }
        originalWarn(message, ...args);
      };

      return () => {
        console.warn = originalWarn;
      };
    }
  }, [keywords]);
}
