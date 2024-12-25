import React from 'react';

import ZoomableImage from '@/components/general/ZoomableImage';


export default function Try() {

  return (
    <div className="try">
      <ZoomableImage
        image={{
          contClassName: "w-[300px] h-[400px]",
          className: "object-cover object-center rounded",
        }}
        videoClassName="w-full h-[80vw] object-fill rounded-sm md:h-[inherit]"
        media={{
          src: "/assets/pages/contact-us/contact-us-image.png",
          zoomSrc: "/assets/pages/contact-us/contact-us-image.png",
          alt: "zoom-image"
        }}
        zoom = {{
          className: "w-[300px] h-[400px]"
        }}
      />
    </div>
  );
}
