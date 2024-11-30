import ContactDetails from "@/components/pages/contact-us/ContactDetails";
import ContactForm from "@/components/pages/contact-us/ContactForm";


export default function ContactUs() {

  return (
    <div className="contact-us-page no-pb md:flex">
      <ContactDetails
        className={`
          contact-details
          flex items-center
          md:w-1/2
        `}
      />
      <ContactForm
        className={`
          contact-us-form
          px-[8vw] py-10
        bg-white text-black
          md:w-1/2 md:px-[5vw]
        `}
      />
    </div>
  );
}
