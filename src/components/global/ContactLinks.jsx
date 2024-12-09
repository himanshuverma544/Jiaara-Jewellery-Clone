'use client';

import Link from "next/link";
import Icon from "@/components/general/Icon";

import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookBoxLine } from "react-icons/ri";
import { MdMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import useWindowSize from "@/utils/hooks/general/useWindowSize";


export default function ContactLinks({
  className = "", iconClassName = "", linkTitleClassName = ""
}) {

  const { screenWidth, breakpoints: { md } } = useWindowSize();

  const contactLinks = [
    {
      id: "instagram",
      className: "instagram-handler-link",
      icon: <RxInstagramLogo/>,
      name: "instagram.com/jiaarajewellery",
      url: "https://www.instagram.com/jiaarajewellery/",
      target: "_blank"
    },
    {
      id: "facebook",
      className: "facebook-handler-link",
      icon: <RiFacebookBoxLine/>,
      name: "facebook.com/Jiaara-100068747121541",
      url: "https://www.facebook.com/Jiaara-100068747121541/",
      target: "_blank"
    },
    {
      id: "mail",
      className: "mail-address-link",
      icon: <MdMailOutline/>,
      name: "jiaaracreations@gmail.com",
      url: screenWidth >= md ?
        "https://mailto:jiaaracreations@gmail.com" : "mailto:jiaaracreations@gmail.com",
      target: "_blank"
    },
    {
      id: "contact-num",
      className: "contact-number-link",
      icon: <MdOutlineLocalPhone/>,
      name: "+91 639 687 2895",
      url: "tel:+916396872895",
      target: "_self"
    },
    {
      id: "location",
      className: "location-address-link",
      icon: <GrLocation/>,
      name: "1003, Building 6, Sandstone Society, Unique Garden, Kanakia Layout, Mira Road East, Bhayander, Thane, Maharashtra, India - 401107",
      url: "#location.",
      target: "_self"
    }
  ];

  return (
    <div className={`${className} links-cont flex flex-col gap-5 justify-center`}>
      {contactLinks.map((contactLink, index) =>
        <Link
          key={contactLink?.id || index}
          className={`${contactLink?.className} w-fit flex gap-3 hover:font-semibold`}
          href={contactLink?.url}
          target={contactLink?.target}
          scroll={false}
        >
          <div className="icon-cont">
            <Icon className={`icon text-xl ${iconClassName}`} icon={contactLink?.icon}/>
          </div>
          <div className={`name text-xs text-wrap xs:text-sm ${linkTitleClassName}`}>
            {contactLink?.name}
          </div>
        </Link>
      )}
    </div>
  );
}