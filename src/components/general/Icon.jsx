import React from 'react';
import Image from 'next/image';


function isReactElement(icon) {
  return React.isValidElement(icon);
}

function isReactComponent(icon) {
  return (
    typeof icon === 'function' &&
    (
      icon.prototype?.isReactComponent || 
      String(icon).includes('createElement') || 
      React.isValidElement(React.createElement(icon))
    )
  );
}


const Icon = ({ icon, alt, className, innerClassName, ...props }) => {

  if (isReactElement(icon)) {
    return (
      React.cloneElement(icon, { 'className': className, 'aria-label': alt, ...props })
    );
  }
  else if (isReactComponent(icon)) {
    const TheIcon = icon;
    return (
      <TheIcon className={className} aria-label={alt} {...props}/>
    );
  }
  else {
    return (
      <div className={className} {...props}>
        <Image
          className={innerClassName}
          fill
          src={icon}
          alt={alt}
        />
      </div>
    );
  }
};

export default Icon;