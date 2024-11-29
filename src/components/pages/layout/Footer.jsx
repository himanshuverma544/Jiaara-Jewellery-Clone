import Link from "next/link";
import Image from "next/image";

import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookBoxLine } from "react-icons/ri";
import { MdMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import Icon from "@/components/general/Icon";

import {
  HOME,
  CONTACT_US,
  PRIVACY_POLICY,
  SHIPPING_POLICY,
  TERMS_AND_CONDITIONS,
  RETURN_REFUND_CANCELLATION_POLICY
} from "@/routes";


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
    url: "mailto:jiaaracreations@gmail.com",
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
    name: "1003, Bldg-6, Sandstone Society, Unique Garden, Kanakia Layout, Mira Road, Thane-East, Bhayander, 401107",
    url: "#location.",
    target: "_self"
  }
];


const helpAndPolicesLink = [
  {
    id: "contact-us",
    className: "contact-us-link",
    name: "Contact Us",
    url: CONTACT_US?.pathname
  },
  {
    id: "privacy-policy",
    className: "privacy-policy-link",
    name: "Privacy Policy",
    url: PRIVACY_POLICY?.pathname
  },
  {
    id: "shipping-policy",
    className: "shipping-policy-link",
    name: "Shipping Policy",
    url: SHIPPING_POLICY?.pathname
  },
  {
    id: "terms-and-conditions",
    className: "terms-and-conditions-link",
    name: "Terms and Conditions",
    url: TERMS_AND_CONDITIONS?.pathname
  },
  {
    id: "return-refund-cancellation-policy",
    className: "return-refund-cancellation-policy-link",
    name: "Return, Refund & Cancellation Policy",
    url: RETURN_REFUND_CANCELLATION_POLICY?.pathname
  }
];


export default function Footer() {
  
  return (
    <footer
      className={`
        w-full flex flex-col justify-center gap-5 px-[10vw] py-10 mb-16 text-primaryFont
        md:flex-row-reverse md:px-[5vw] md:items-center
        lg:mb-0
        bg-tertiaryBackground
      `}
    >

      <div className="wrapper w-full flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-16 md:gap-0 md:justify-evenly">

        <div className="connect-with-us-cont flex flex-col gap-5 justify-center sm:w-1/2 sm:justify-start">
          <div className="heading font-semibold">
            Stay connected with us
          </div>
          <div className="links-cont flex flex-col gap-5 justify-center">
            {contactLinks.map((contactLink, index) =>
              <Link
                key={contactLink?.id || index}
                className={`${contactLink?.className} w-fit flex gap-3 hover:font-semibold`}
                href={contactLink?.url}
                target={contactLink?.target}
                scroll={false}
              >
                <div className="icon-cont">
                  <Icon className="icon text-xl" icon={contactLink?.icon}/>
                </div>
                <div className="name text-xs xs:text-sm">
                  {contactLink?.name}
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="customer-care-cont flex flex-col gap-5 justify-center sm:w-1/2 sm:justify-start md:w-auto">
          <div className="heading font-semibold">
            Help and Policies
          </div>
          <div className="links-cont flex flex-col gap-5 justify-center">
            {helpAndPolicesLink.map((helpAndPolicyLink, index) =>
              <Link
                key={helpAndPolicyLink?.id || index}
                className={`${helpAndPolicyLink?.className} w-fit flex gap-3 hover:font-semibold`}
                href={helpAndPolicyLink?.url}
              >
                <div className="name text-xs xs:text-sm">
                  {helpAndPolicyLink?.name}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Link
        className="brand w-full flex flex-col justify-center items-center sm:hidden md:w-fit md:h-full md:flex"
        href={HOME?.pathname}
      >
        <div className="img-cont size-[70px] relative xs:size-[100px]">
          <Image
            fill
            src="/assets/logos/jiaara-black.png"
            alt="brand-logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="brand-name text-center text-xs font-semibold">
          Jiaara Creations Private Limited
        </div>
      </Link>
    </footer>
  );
}
