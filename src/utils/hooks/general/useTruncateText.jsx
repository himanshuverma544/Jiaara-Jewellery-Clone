import { useState } from 'react';


function useTruncateText({ text = "", wordLimit = 10 }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = text.split(' ').length > wordLimit
    ? text.split(' ').slice(0, wordLimit).join(' ') + '…'
    : text;

  return {
    isExpanded,
    toggleText,
    displayText: isExpanded ? text : truncatedText
  };
}

export default useTruncateText;
