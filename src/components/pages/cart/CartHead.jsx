import { RiDeleteBin6Line } from "react-icons/ri";


export default function CartHead({ className = "" }) {

  return (
    <div className={`cart-head flex justify-between items-center ${className}`}>
      <div className="heading uppercase font-semibold text-primaryFont md:text-lg">
        Your Cart
      </div>
      <div className="actions flex items-center gap-5 text-lg text-primaryFont md:text-xl">
        <div className="icon-cont">
          <RiDeleteBin6Line/>
        </div>
      </div>
    </div>
  );
}
