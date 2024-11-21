import { useState, useEffect, useCallback } from 'react';


function useTruncateText({ text = "", wordLimit = 10 } = {}) {

  const [truncatedText, setTruncatedText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const createTruncateText = (text, wordLimit) => {
    return (
      text.split(' ').length > wordLimit ?
        text.split(' ').slice(0, wordLimit).join(' ') + '…' : text
    );
  };

  const getTruncateText = useCallback((text, wordLimit) => {
    return createTruncateText(text, wordLimit);
  }, []);

  useEffect(() => {
    if (text && wordLimit) {
      const truncatedText = createTruncateText(text, wordLimit);
      setTruncatedText(truncatedText);
    }
  }, [text, wordLimit]);

  const toggleText = () => setIsExpanded(!isExpanded);

  return {
    isExpanded,
    toggleText,
    displayText: isExpanded ? text : truncatedText,
    getTruncateText
  };
}


export default useTruncateText;