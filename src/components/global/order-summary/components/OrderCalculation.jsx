import INR from "@/utils/functions/INR";


export default function OrderCalculation({ className = "" }) {

  return (
    <div className={`order-calculation flex flex-col gap-2 py-5 text-sm text-primaryFont ${className}`}>

      <div className="subtotal flex justify-between">
        <span className="text">
          Subtotal
        </span>
        <span className="value">
          {INR(2580)}
        </span>
      </div>

      <div className="shipping flex justify-between">
        <span className="text">
          Shipping
        </span>
        <span className="value">
          {INR(255)}
        </span>
      </div>

      <div className="taxes flex justify-between">
        <span className="text">
          Taxes
        </span>
        <span className="value">
          {INR(55)}
        </span>
      </div>

      <hr className="my-2 border-primaryFont"/>

      <div className="total flex justify-between">
        <span className="text text-xl">
          Total
        </span>
        <span className="value text-xl">
          {INR(2805)}
        </span>
      </div>

    </div>
  );
}
