import ContentOnBackground from "@/components/general/ContentOnBackground";

import ContactLinks from "@/components/global/ContactLinks";


export default function ContactDetails({ className = "" }) {

  const assetsDirPath = `/assets/pages/contact-us`;

  return (
    <ContentOnBackground
      className={`${className}`}
      image={{
        src: `${assetsDirPath}/contact-us-image.png`,
        alt: "contact-us-reference-image"
      }}
      innerClassName="contact-information-cont w-[73%] flex flex-col gap-8 relative px-[7vw] py-16  md:px-[5vw] lg:gap-10"
    >
      <h1 className="heading text-3xl uppercase text-white lg:text-4xl">
        Contact Us
      </h1>
      <ContactLinks
        className="contact-links text-white lg:gap-7"
        iconClassName="lg:text-3xl"
        linkTitleClassName="lg:text-base"
      />
    </ContentOnBackground>
  );
}