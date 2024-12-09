import Link from "next/link";
import Image from "next/image";

import ContactLinks from "@/components/global/ContactLinks";

import {
  HOME,
  CONTACT_US,
  PRIVACY_POLICY,
  SHIPPING_POLICY,
  TERMS_AND_CONDITIONS,
  RETURN_REFUND_CANCELLATION_POLICY
} from "@/routes";


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
          <ContactLinks/>
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
        <div className="brand-name flex flex-col items-center justify-center text-center text-xs font-semibold">
          <div className="name">
            Jiaara Creations
          </div>
          <div className="ownership">
            Pvt. Ltd.
          </div>
        </div>
      </Link>
    </footer>
  );
}
