'use client';

import ReactDOM from "react-dom";

import { useState, useEffect, useRef, useContext } from 'react';

import { context } from "@/context-API/context";
import { storeData } from "@/context-API/actions/action.creators";

import Media from '@/components/general/Media';


const ZoomableImage = ({
  className = "",
  image = {},
  video = {},
  media = {},
  zoom = {}
}) => {
  
  const theImage = {
    className: "",
    ...image
  };

  const theVideo = {
    className: "",
    ...video
  };

  const theMedia = {
    contClassName: "",
    src: "",
    zoomSrc: "",
    alt: "",
    ...media
  };

  const theZoom = {
    className: "",
    portalId: "",
    positionType: {
      outer: "static",
      inner: "static"
    },
    position: {
      top: "0%",
      right: "0%",
      bottom: "0%",
      left: "0%"
    },
    level: 4,
    ...zoom
  };

  const { dispatch } = useContext(context) || {};


  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const touchTimer = useRef(null);


  useEffect(() => {

    function storeComponentData() {
      dispatch(storeData({ zoomableImage: { isZoomed } }, "states"));
    }
    storeComponentData();

  }, [isZoomed, dispatch]);


  const disableScroll = () => {
    document.documentElement.classList.add('overflow-hidden', 'lg:overflow-auto');
    document.body.classList.add('overflow-hidden', 'lg:overflow-auto');
  }

  const enableScroll = () => {
    document.documentElement.classList.remove('overflow-hidden', 'lg:overflow-auto');
    document.body.classList.remove('overflow-hidden', 'lg:overflow-auto');
  }


  const handleMouseEnter = () => {
    disableScroll();
    setIsZoomed(true);
  }
  
  const handleMouseMove = event => {
    
    const { left, top, width, height } = event.target.getBoundingClientRect();
    
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    
    setPosition({ x, y });
  }
  
  const handleMouseLeave = () => {
    enableScroll();
    setIsZoomed(false);
  }

  const handleTouchStart = () => {

    touchTimer.current = setTimeout(() => {
      setIsZoomed(true);
      disableScroll();
    }, 1000);
  }

  const handleTouchMove = event => {

    if (!isZoomed) {
      clearTimeout(touchTimer.current);
      return;
    }

    event.stopPropagation();

    const touch = event.touches[0];

    const { left, top, width, height } = event.target.getBoundingClientRect();

    const x = ((touch.clientX - left) / width) * 100;
    const y = ((touch.clientY - top) / height) * 100;

    setPosition({ x, y });
  }

  const handleTouchEnd = () => {

    clearTimeout(touchTimer.current);

    if (isZoomed) {
      setIsZoomed(false);
      enableScroll();
    }
  }


  return (
    <div
      className={`
        zoomable-image-component-wrapper
        relative flex flex-col gap-4
        lg:flex-row
        ${className}
      `}
    >
    {/* Original Image */}
      <div
        className={`${theMedia.contClassName}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onContextMenu={event => event.preventDefault()}
      >
        <div className="relative w-full h-full cursor-none">
          <Media
            imgContClassName={`original-image w-[inherit] h-[inherit] absolute inset-0`}
            imgClassName={`${theImage.className}`}
            videoClassName={`w-[inherit] h-[inherit] ${theVideo.className}`}
            src={theMedia.src}
            alt={theMedia.alt}
          />

          {/* Custom Cursor */}
          {isZoomed &&
            <div
              className={`
                square-focused-cursor
                hidden
                lg:size-[5rem]
                lg:flex lg:justify-center lg:items-center
                lg:absolute lg:inset-0 lg:z-50
                lg:pointer-events-none
                lg:border-white lg:bg-black/20
              `}
              style={{
                top: `${position.y}%`,
                left: `${position.x}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <span className="text-xl text-white text-opacity-70">
                +
              </span>
            </div>
          }
        </div>

        {/* Zoomed View (Mobile Devices) */}
        {isZoomed &&
          <div
            className={`
              zoomed-image
              w-[inherit] h-[inherit]
              absolute inset-0 z-10
              bg-center bg-cover bg-no-repeat
              bg-white shadow-lg
              pointer-events-none
              lg:hidden
            `}
            style={{
              backgroundImage: `url(${theMedia?.zoomSrc || theMedia?.src})`,
              backgroundSize: `${theZoom.level * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`
            }}
          ></div>
        }
      </div>

      {/* Zoomed View (Desktop & Tablet) */}
      {isZoomed && ReactDOM.createPortal(
        <div
          className={`
            hidden
            lg:flex lg:justify-center lg:items-center
            lg:z-10
            lg:overflow-hidden lg:pointer-events-none
            ${(theZoom.positionType.outer === "fixed") ?
              "lg:w-screen lg:h-screen lg:fixed"
                :
              (theZoom.positionType.outer === "relative" ? "lg:relative" : "lg:static")
            }
          `}
        >
          <div
            className={`
              zoomed-image-lg
              ${theZoom?.className}
              bg-center bg-cover bg-no-repeat
              bg-white shadow-lg
              pointer-events-none
            `}
            style={{
              position: theZoom.positionType.inner,
              top: theZoom.position?.top,
              right: theZoom.position?.right,
              bottom: theZoom.position?.bottom,
              left: theZoom.position?.left,
              backgroundImage: `url(${theMedia?.zoomSrc || theMedia?.src})`,
              backgroundSize: `${theZoom.level * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`
            }}
          ></div>
        </div>, document.getElementById(theZoom.portalId)
      )}
    </div>
  );
};


export default ZoomableImage;