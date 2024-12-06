import getLongFormatDate from "@/utils/functions/general/getLongFormatDate";


export default function OrderDetails({ className = "", orderDetails = null }) {

  return ( 
    <div className={`order-details-cont w-full flex flex-col gap-2 ${className}`}>
      <div className="heading text-sm font-medium xs:text-base">
        Order Details
      </div>

      <div className="details flex flex-col gap-1">
        <div className="order-number flex justify-between text-xs xs:text-sm">
          <div className="label">
            Order Number
          </div>
          <div className="value text-black text-opacity-50">
            {`#${orderDetails?.order?.id}`}
          </div>
        </div>
        <div className="order-date flex justify-between text-xs xs:text-sm">
          <div className="label">
            Order Date
          </div>
          <div className="value w-[6.7rem] text-black text-opacity-50 xs:w-[7.8rem] sm:w-auto">
            {getLongFormatDate(orderDetails?.order?.date)}
          </div>
        </div>
        <div className="order-status flex justify-between text-xs xs:text-sm">
          <div className="label">
            Order Status
          </div>
          <div className="value capitalize text-black text-opacity-50">
            {orderDetails?.order?.status}
          </div>
        </div>
        <div className="payment-method flex justify-between text-xs xs:text-sm">
          <div className="label">
            Payment Method
          </div>
          <div className="value text-black text-opacity-50">
            {orderDetails?.payment?.title}
          </div>
        </div>
      </div>
    </div>
  );
}