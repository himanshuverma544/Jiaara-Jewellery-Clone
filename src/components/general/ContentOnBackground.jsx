import Media from "@/components/general/Media";


export default function ContentOnBackground({
  className = "",
  innerClassName = "",
  image = {
    className: "",
    innerClassName: "object-cover object-center",
    src: "",
    alt: ""
  },
  children
}) {

  return (
    <div className={`${className} ${image?.src ? "relative" : ""}`}>
      {image?.src ?
        <Media
          imgContClassName={`img-cont absolute inset-0 ${image?.className}`}
          imgClassName={`${image?.innerClassName}`}
          videoClassName={`${image?.className} object-fill object-center`}
          src={image?.src}
          alt={image?.alt}
        />
          :
        children
      }
      {(image?.src && children) &&
        <div className={`${innerClassName} relative`}>
          {children}
        </div>
      }
    </div>
  );
}