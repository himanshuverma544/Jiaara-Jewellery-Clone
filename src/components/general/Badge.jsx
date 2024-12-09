import Icon from "@/components/general/Icon";


export default function Badge({
  className = "",
  icon = {
    className: "",
    innerClassName: "",
    icon: null,
    alt: ""
  },
  badge = {
    className: "",
    size: "50px",
    textSize: "",
    position: {
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
    value: "",
    backgroundColor: "",
    textColor: ""
  }
}) {

  return (
    <div className={`relative ${className}`}>
      <Icon
        className={icon?.className}
        innerClassName={icon?.innerClassName}
        icon={icon?.icon}
        alt={icon?.alt}
      />
      <div className={`
        badge
        ${className}
        size-[${badge?.size}]
        flex justify-center items-center rounded-[50%] absolute
        top-[${badge?.position?.top}]
        right-[${badge?.position?.right}]
        bottom-[${badge?.position?.bottom}]
        left-[${badge?.position?.left}]
        ${badge?.textSize}
        ${badge?.backgroundColor}
        ${badge?.textColor}
      `}>
        {badge?.value}
      </div>
    </div>
  );
}