import { useState, useRef, useEffect } from "react";

import InputField from "./InputField";
import Icon from "./Icon";

import useScrollIntoView from "@/utils/hooks/general/useScrollIntoView";
import useClickOutside from "@/utils/hooks/general/useClickOutside";


const AutoSelect = ({
  className = "",
  inputGroupClassName = "",
  label = {},
  input = {},
  validation = {},
  dropdownClassName = "",
  optionClassName = {
    default: "",
    hover: "",
    selection: ""
  },
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


  const [inputValue, setInputValue] = useState(options[25] || "");
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
      inputRef.current?.blur();
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
    inputRef.current?.blur();      
  });


  return (
    <div ref={dropdownRef} className={`relative ${className}`}>

      <InputField
        className={`${inputGroupClassName}`}
        onClick={toggleDropdown}

        input={{
          ref: inputRef,
          icon: {
            className: `${isDropdownVisible && "rotate-180"} text-primaryFont`,
            theIcon: <Icon icon={<ArrowDropdown/>}/>
          },
          value: inputValue,
          onChange: handleInputChange,
          ...input
        }}
        
        label={{
          ...label
        }}
        
        validation={{
          ...validation
        }}
      />

      {isDropdownVisible && filteredOptions.length > 0 && (
        <ul className={`w-full absolute top-[97.9%] inset-x-0 mt-0.5 z-10 select-none ${dropdownClassName}`}>
          {filteredOptions.map((option, index) =>
            <li
              key={index}
              ref={selectedOption === option ? scrollRef : null}
              className={`
                cursor-pointer px-3 py-2 ${optionClassName.default}
                ${optionClassName.hover}
                ${selectedOption === option && optionClassName.selection}
              `}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoSelect;
