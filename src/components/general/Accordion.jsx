import "@/styles/accordion-animations.css";

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Icon from "./Icon";

const Content = Icon;


const Accordion = ({
  className = "",
  title = "",
  titleClassName = "",
  enableDivider = false,
  dividerClassName = "",
  content = <></>,
  contentClassName = "",
  openIcon = "+",
  closeIcon = "-",
  iconClassName = "",
  timeout = 300
}) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`accordion ${className} flex flex-col border-b`}>
      <button
        onClick={toggleAccordion}
        className={`
          toggle-button
          w-full
          flex justify-between items-center py-4
          text-left
          focus:outline-none
        `}
      >
        <span className={`accordion-title ${titleClassName}`}>
          {title}
        </span>
        <span className={`accordion-toggle-icon-cont ${iconClassName}`}>
          {!isOpen ? <Icon icon={openIcon}/> : <Icon icon={closeIcon}/>}
        </span>
      </button>

      {enableDivider &&
        <hr className={`w-full ${dividerClassName}`}/>
      }

      <CSSTransition
        in={isOpen}
        timeout={timeout}
        classNames="accordion"
        unmountOnExit
      >
        <Content
          className={contentClassName}
          icon={content}
        />
      </CSSTransition>
    </div>
  );
};


export default Accordion;