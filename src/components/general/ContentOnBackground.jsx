import Image from "next/image";


export default function ContentOnBackground({
  className = "",
  innerClassName = "",
  image = {
    className: "",
    innerClassName: "",
    src: "",
    alt: ""
  },
  children
}) {

  return (
    <div className={`${className} ${image?.src ? "relative" : ""}`}>
      {image?.src ?
        <div className={`img-cont absolute inset-0 ${image?.className}`}>
          <Image
            className={`object-cover object-center ${image?.innerClassName}`}
            fill
            src={image?.src}
            alt={image?.alt}
          />
        </div>
          :
        {children}
      }
      {(image?.src && children) &&
        <div className={`${innerClassName} relative`}>
          {children}
        </div>
      }
    </div>
  );
}