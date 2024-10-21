import { useState, useRef, useEffect } from "react";

import Icon from "./Icon";

import useScrollIntoView from "@/utils/hooks/general/useScrollIntoView";
import useClickOutside from "@/utils/hooks/general/useClickOutside";


const AutoSelect = ({
  placeholder = "",
  options = [],
  arrowDropdownIcon: ArrowDropdown = ({
    className = "", size = 20, stroke = "", fill = "none", onClick = () => {}
  }) => 
    <svg
      className={`arrow-drop-down-icon ${className}`}
      width={size}
      height={size}
      onClick={onClick}
      stroke={stroke}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 20l10 10 10-10z" />
      <path d="M0 0h48v48h-48z" fill={fill}/>
    </svg>
}) => {


  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const inputRef = useRef(null);  
  const dropdownRef = useRef(null);

  const { scrollRef, scrollIntoView }
    = useScrollIntoView({ behavior: "instant", block: "nearest", mode: "manual" });


  const handleInputChange = event => {

    const value = event.target.value;
    setInputValue(value);

    const filtered = options.filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };


  const handleSelect = option => {

    setInputValue(option);
    setSelectedOption(option);
    setFilteredOptions(options);
    setDropdownVisible(false);
  };


  const toggleDropdown = () => {

    if (isDropdownVisible) {
      inputRef.current.blur();
    }
    setFilteredOptions(options);
    setDropdownVisible(!isDropdownVisible);
  };


  useEffect(() => {
    if (isDropdownVisible) {
      scrollIntoView();
    }
  }, [isDropdownVisible, scrollRef, scrollIntoView]);


  useClickOutside(dropdownRef, () => {

    setDropdownVisible(false);    
    inputRef.current.blur();      
  });


  return (
    <div ref={dropdownRef} className="relative">
      <div
        className="input-wrapper flex justify-between items-center rounded-e-md"
        onClick={toggleDropdown}
      >
        <input
          ref={inputRef}
          className={`
            w-full border rounded-s-md p-3
            outline-none
            hover:ring-1 hover:ring-secondaryBackground
            focus:ring-1 focus:ring-primaryFont
          `}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        <Icon
          className={isDropdownVisible && "rotate-180"}
          icon={<ArrowDropdown/>}
        />
      </div>

      {isDropdownVisible && filteredOptions.length > 0 && (
        <ul className="w-full h-[11rem] absolute border mt-0.5 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              ref={selectedOption === option ? scrollRef : null}
              className={`cursor-pointer px-3 py-2 hover:bg-gray-200 ${
                selectedOption === option ? "bg-gray-300" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSelect;
