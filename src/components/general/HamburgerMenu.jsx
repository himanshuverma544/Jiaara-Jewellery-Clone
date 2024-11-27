const HamburgerMenu = ({
  className = "", innerClassName = "", isOpen = null, onClick: handleClick = () => {}
}) => {

  return (
    <button
      className={`
        ${className}
        inline-block cursor-pointer
        ${isOpen ? 'change' : ''}
      `}
      onClick={handleClick}
    >
      <div
        className={`
          ${innerClassName}
          transition-transform duration-400
          ${isOpen ? 'translate-y-1.5 -rotate-45' : ''}
        `}
      ></div>
      <div
        className={`
          ${innerClassName}
          transition-opacity duration-400
          ${isOpen ? 'opacity-0' : ''}
        `} 
      ></div>
      <div
        className={`
          ${innerClassName}
          transition-transform duration-400
          ${isOpen ? '-translate-y-1 rotate-45' : ''}
        `}
      ></div>
    </button>
  );
};


export default HamburgerMenu;