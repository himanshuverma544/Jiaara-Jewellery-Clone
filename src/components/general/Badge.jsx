'use client';

import Icon from "@/components/general/Icon";

import useClient from "@/utils/hooks/general/useClient";


export default function Badge({
  className = "",
  icon = {
    className: "",
    innerClassName: "",
    icon: null,
    alt: "badge-icon"
  },
  badge = {
    className: "",
    size: "15px",
    textSize: "text-2xs",
    position: {
      top: "-8px",
      right: "0px",
      bottom: "0px",
      left: "13px",
    },
    value: 0,
    backgroundColor: "bg-white",
    textColor: "text-black"
  }
}) {

  const isClient = useClient();
  
  return (
    (isClient &&
      <div className={`relative ${className}`}>
        <Icon
          className={`${icon.className} z-10`}
          innerClassName={icon.innerClassName}
          icon={icon.icon}
          alt={icon.alt}
        />
        <div
          className={`
            badge
            ${badge.className}
            rounded-[50%]
            ${badge.textSize}
            ${badge.backgroundColor}
            ${badge.textColor}
          `}
          style={{
            width: badge.size,
            height: badge.size,
            position: "absolute",
            top: badge.position.top,
            right: badge.position.right,
            bottom: badge.position.bottom,
            left: badge.position.left,
            lineHeight: badge.size,
            textAlign: "center"
          }}
        >
          {badge.value}
        </div>
      </div>
    )
  );
}