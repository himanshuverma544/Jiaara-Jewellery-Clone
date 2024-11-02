import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";


import Benefit from "./components/Benefit";


export default function KeyBenefits({ className = "" }) {

  return (
    <section id="key-benefits" className={`w-full flex flex-wrap justify-evenly items-stretch px-[16vw] py-4 bg-quaternaryBackground lg:px-[5vw] ${className}`}>
      <Benefit
        className="free-shipping"
        icon={LiaShippingFastSolid}
        heading="Free Shipping"
        text="Free Shipping for orders over ₹ 599"
      />
      <Benefit
        className="money-guarantee"
        icon={GiReceiveMoney}
        heading="Money Guarantee"
        text="Within 30 days for an exchange"
      />
      <Benefit
        className="online-support"
        icon={BiSupport}
        heading="Online Support"
        text="24 hours a day, 7 days a week"
      />
      <Benefit
        className="flexible-payment"
        icon={MdPayment}
        heading="Flexible Payment"
        text="Pay with multiple modes"
      />
    </section>
  );
}
